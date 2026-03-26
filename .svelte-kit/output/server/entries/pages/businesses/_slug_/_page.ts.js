import { error } from "@sveltejs/kit";
import { b as businesses } from "../../../../chunks/businesses.js";
const load = ({ params }) => {
  const business = businesses.find((item) => item.slug === params.slug);
  if (!business) {
    throw error(404, "Business not found");
  }
  return { business };
};
export {
  load
};
