import { useState } from 'react';
import ProductsList from './components/ProductsList';
import { products as initialProducts } from './mocks/products.json';
import { Products } from './types/Products';
import Header from './components/Header';

export type filtersOptions = {
  category: string;
  minPrice: number;
};

const initialFilters = {
  category: 'all',
  minPrice: 0,
};

function App() {
  const [products] = useState<Products>(initialProducts);
  const [filters, setFilters] = useState(initialFilters);

  const filterProducts = (products: Products) => {
    return products.filter((product) => {
      return (
        product.price >= filters.minPrice &&
        (filters.category === 'all' || product.category === filters.category)
      );
    });
  };

  const filteredProducts = filterProducts(products);

  return (
    <>
      <Header changeFilters={setFilters} />
      <ProductsList products={filteredProducts} />
    </>
  );
}

export default App;
