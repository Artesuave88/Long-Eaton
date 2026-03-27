import type { DiscoverCategory } from "$types/content";
import { optionalImportedDiscoverCategories } from "$data/imported";

export const discoverCategories: DiscoverCategory[] = [
  ...optionalImportedDiscoverCategories,
];
