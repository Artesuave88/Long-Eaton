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
  { href: "/discover-long-eaton", label: "Discover" },
  { href: "/events", label: "Events" },
  { href: "/guides", label: "Guides" },
  { href: "/businesses", label: "Businesses" },
  { href: "/jobs", label: "Jobs" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const primaryNavLinks = navLinks.filter(
  (link) => link.href !== "/about",
);
