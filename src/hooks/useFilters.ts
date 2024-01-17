import { useContext } from "react";
import { Products } from "../types/Products";
import { FiltersContext } from "../context/filters";
import { FilterContextType } from "../types/Filters";

export const useFilters = () => {
  const {filters, setFilters} = useContext(FiltersContext) as FilterContextType

  const filterProducts = (products: Products) => {
    return products.filter((product) => {
      return (
        product.price >= filters.minPrice &&
        (filters.category === 'all' || product.category === filters.category)
      );
    });
  };

  return { filters, filterProducts, setFilters };
}