import { createContext, useState } from 'react';
import { FilterContextType, filtersOptions } from '../types/Filters';

const initialFilters = {
  category: 'all',
  minPrice: 0,
};

export const FiltersContext = createContext<FilterContextType | null>(null);

interface Props {
  children: React.ReactNode;
}

export function FiltersProvider({ children }: Props) {
  const [filters, setFilters] = useState<filtersOptions>(initialFilters);

  return (
    <FiltersContext.Provider
      value={{
        filters,
        setFilters,
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
}
