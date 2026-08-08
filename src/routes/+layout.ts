// Event availability is date-sensitive, so pages must be rendered against the
// current London date instead of being frozen at build time.
export const prerender = false;

// Keep every indexable URL aligned with canonicals and the sitemap.
// SvelteKit redirects slash-suffixed requests to the slashless URL with 308.
export const trailingSlash = 'never';
