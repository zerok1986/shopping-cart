import { useState } from 'react';
import ProductsList from './components/ProductsList';
import { products as initialProducts } from './mocks/products.json';
import { Products } from './types/Products';
import Header from './components/Header';
import Footer from './components/Footer';
import useFilters from './hooks/useFilters';

function App() {
  const [products] = useState<Products>(initialProducts);
  const { filters, filterProducts, setFilters } = useFilters();
  const filteredProducts = filterProducts(products);

  return (
    <>
      <Header changeFilters={setFilters} />
      <ProductsList products={filteredProducts} />
      <Footer filters={filters} />
    </>
  );
}

export default App;
