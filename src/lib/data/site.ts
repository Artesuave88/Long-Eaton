export const site = {
  name: "Love Long Eaton",
  tagline: "A local guide to what's on, where to go and who's in Long Eaton.",
  url: "https://www.lovelongeaton.com",
  email: "",
  phone: "",
  address: "",
};

const links = [
  { href: "/", label: "Home" },
  { href: "/things-to-do", label: "Things to do" },
  { href: "/events", label: "Events" },
  { href: "/discover-long-eaton", label: "Places" },
  { href: "/guides", label: "Guides" },
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

export const navigation = {
  all: links,
  primary: links.filter((link) => primaryNavHrefs.has(link.href)),
  footer: links,
  donate: { href: "/donate", label: "Donate" },
};
