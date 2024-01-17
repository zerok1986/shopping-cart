export interface filtersOptions {
  category: string;
  minPrice: number;
};

export type FilterContextType = {
  filters: filtersOptions;
  setFilters: React.Dispatch<React.SetStateAction<filtersOptions>>
};