export const site = {
  name: "Love Long Eaton",
  tagline: "A local guide to what's on, where to go and who's in Long Eaton.",
  url: "https://www.lovelongeaton.com",
  email: "",
  phone: "",
  address: "",
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/things-to-do", label: "Things to do" },
  { href: "/events", label: "Events" },
  { href: "/discover-long-eaton", label: "Places" },
  { href: "/guides", label: "Seasonal guides" },
  { href: "/businesses", label: "Businesses" },
  { href: "/jobs", label: "Jobs" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const primaryNavHrefs = new Set([
  "/",
  "/things-to-do",
  "/events",
  "/businesses",
  "/jobs",
  "/contact",
]);

export const primaryNavLinks = navLinks.filter((link) =>
  primaryNavHrefs.has(link.href),
);
