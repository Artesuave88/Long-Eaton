import { spawn } from 'node:child_process';
import process from 'node:process';
import * as cheerio from 'cheerio';

const host = '127.0.0.1';
const port = Number(process.env.SEO_PORT ?? 4173);
const localOrigin = `http://${host}:${port}`;
const canonicalOrigin = new URL(process.env.SEO_CANONICAL_ORIGIN ?? 'https://www.lovelongeaton.com');
const intentionallyNoindex = new Set(['/donate/thank-you', '/jobs']);
// Recurring event instances intentionally share this editorial title. Keep it
// visible as a warning until distinct SEO titles are approved.
const acknowledgedDuplicateTitles = new Set(['Long Eaton Car Boot Sale | Love Long Eaton']);
const errors = [];
const warnings = [];
const pages = new Map();
const checkedUrls = new Map();

const preview = spawn('pnpm', ['exec', 'vite', 'preview', '--host', host, '--port', String(port), '--strictPort'], {
	stdio: ['ignore', 'pipe', 'pipe'],
	env: { ...process.env, NODE_ENV: 'production' }
});

let previewOutput = '';
preview.stdout.on('data', (chunk) => (previewOutput += chunk));
preview.stderr.on('data', (chunk) => (previewOutput += chunk));

function report(path, message) {
	errors.push(`${path}: ${message}`);
}

function normalisePath(value) {
	const url = new URL(value, localOrigin);
	return url.pathname === '/' ? '/' : url.pathname.replace(/\/$/, '');
}

async function waitForServer() {
	for (let attempt = 0; attempt < 50; attempt += 1) {
		if (preview.exitCode !== null) throw new Error(`Preview server exited early.\n${previewOutput}`);
		try {
			const response = await fetch(localOrigin);
			if (response.ok) return;
		} catch {}
		await new Promise((resolve) => setTimeout(resolve, 200));
	}
	throw new Error(`Timed out waiting for preview server.\n${previewOutput}`);
}

async function fetchLocal(path) {
	if (!checkedUrls.has(path)) {
		checkedUrls.set(path, fetch(`${localOrigin}${path}`, { redirect: 'follow' }));
	}
	return checkedUrls.get(path);
}

function isHtml(response) {
	return response.headers.get('content-type')?.includes('text/html');
}

async function inspectPage(path, sitemapPaths, queue) {
	const response = await fetchLocal(path);
	if (!response.ok) {
		report(path, `returned HTTP ${response.status}`);
		return;
	}
	if (!isHtml(response)) return;

	const html = await response.text();
	const $ = cheerio.load(html);
	const title = $('head title').text().trim();
	const descriptions = $('head meta[name="description"]')
		.map((_, element) => ($(element).attr('content') ?? '').trim())
		.get();
	const canonicals = $('head link[rel="canonical"]')
		.map((_, element) => $(element).attr('href'))
		.get()
		.filter(Boolean);
	const robots = $('head meta[name="robots"]')
		.map((_, element) => ($(element).attr('content') ?? '').toLowerCase())
		.get();
	const noindex = robots.some((value) => /(^|,)\s*noindex\b/.test(value));
	const indexable = !noindex;

	if (!title) report(path, 'missing page title');
	if (descriptions.length === 0 || descriptions.some((value) => !value)) report(path, 'missing meta description');
	if (descriptions.length > 1) report(path, `has ${descriptions.length} meta descriptions`);
	if (canonicals.length === 0 && indexable) report(path, 'missing canonical URL');
	if (canonicals.length > 1) report(path, `has ${canonicals.length} canonical URLs`);
	for (const canonical of canonicals) {
		let url;
		try {
			url = new URL(canonical);
		} catch {
			report(path, `has invalid canonical URL: ${canonical}`);
			continue;
		}
		if (url.hostname !== canonicalOrigin.hostname) report(path, `canonical uses wrong hostname: ${url.hostname}`);
		if (normalisePath(url.href) !== path) report(path, `canonical path ${url.pathname} does not match page`);
	}

	const h1Count = $('h1').length;
	if (h1Count !== 1) report(path, `has ${h1Count} H1 headings (expected 1)`);
	if (noindex && !intentionallyNoindex.has(path)) report(path, 'has an unexpected noindex directive');
	if (indexable && !sitemapPaths.has(path)) report(path, 'is indexable and internally discoverable but missing from sitemap');

	$('script[type="application/ld+json"]').each((_, element) => {
		try {
			JSON.parse($(element).text());
		} catch (error) {
			report(path, `contains invalid JSON-LD (${error.message})`);
		}
	});

	pages.set(path, { title, description: descriptions[0], indexable });
	$('a[href]').each((_, element) => {
		const href = $(element).attr('href');
		if (!href || /^(#|mailto:|tel:|javascript:)/i.test(href)) return;
		let url;
		try {
			url = new URL(href, canonicalOrigin);
		} catch {
			report(path, `contains invalid link: ${href}`);
			return;
		}
		if (url.hostname === canonicalOrigin.hostname) queue.add(normalisePath(url.href));
	});
}

function reportDuplicates(field, label) {
	const values = new Map();
	for (const [path, page] of pages) {
		if (!page.indexable || !page[field]) continue;
		const paths = values.get(page[field]) ?? [];
		paths.push(path);
		values.set(page[field], paths);
	}
	for (const paths of values.values()) {
		if (paths.length <= 1) continue;
		const value = pages.get(paths[0])?.[field];
		if (field === 'title' && acknowledgedDuplicateTitles.has(value)) {
			warnings.push(`Duplicate ${label} needs an editorial decision: ${paths.join(', ')}`);
		} else {
			errors.push(`Duplicate ${label} on: ${paths.join(', ')}`);
		}
	}
}

try {
	await waitForServer();
	const sitemapResponse = await fetchLocal('/sitemap.xml');
	if (!sitemapResponse.ok) throw new Error(`Sitemap returned HTTP ${sitemapResponse.status}`);
	const sitemapXml = await sitemapResponse.text();
	const sitemap = cheerio.load(sitemapXml, { xmlMode: true });
	const sitemapPaths = new Set();
	sitemap('loc').each((_, element) => {
		const value = sitemap(element).text().trim();
		try {
			const url = new URL(value);
			if (url.hostname !== canonicalOrigin.hostname) report('/sitemap.xml', `URL uses wrong hostname: ${value}`);
			sitemapPaths.add(normalisePath(value));
		} catch {
			report('/sitemap.xml', `contains invalid URL: ${value}`);
		}
	});
	if (sitemapPaths.size === 0) report('/sitemap.xml', 'contains no URLs');

	const queue = new Set(['/', ...sitemapPaths]);
	const visited = new Set();
	while (queue.size) {
		const path = queue.values().next().value;
		queue.delete(path);
		if (visited.has(path)) continue;
		visited.add(path);
		await inspectPage(path, sitemapPaths, queue);
	}

	reportDuplicates('title', 'page title');
	reportDuplicates('description', 'meta description');
	for (const warning of warnings) console.warn(`SEO warning: ${warning}`);

	if (errors.length) {
		console.error(`SEO validation failed with ${errors.length} issue(s):`);
		for (const error of errors) console.error(`- ${error}`);
		process.exitCode = 1;
	} else {
		console.log(`SEO validation passed: ${pages.size} HTML pages, ${sitemapPaths.size} sitemap URLs, ${checkedUrls.size} internal URLs checked.`);
	}
} catch (error) {
	console.error(`SEO validation could not run: ${error.message}`);
	process.exitCode = 1;
} finally {
	preview.kill('SIGTERM');
}
