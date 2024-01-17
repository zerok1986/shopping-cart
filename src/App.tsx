import { useState } from 'react';
import { products as initialProducts } from './mocks/products.json';
import { Footer, Header, ProductsList } from './components';
import { Products } from './types';
import { useFilters } from './hooks';

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
