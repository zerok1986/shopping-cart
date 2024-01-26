import { products as initialProducts } from './mocks/products.json';
import { Cart, Footer, Header, ProductsList } from './components';
import { useFilters } from './hooks';

function App() {
  const { filterProducts } = useFilters();
  const filteredProducts = filterProducts(initialProducts);

  return (
    <>
      <Header />
      <Cart />
      <ProductsList products={filteredProducts} />
      <Footer />
    </>
  );
}

export default App;
