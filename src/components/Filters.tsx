import './Filters.css';
import { useFilters } from '../hooks';

export const Filters = () => {
  const { filters, setFilters } = useFilters();

  const handleChangeMinPrice = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setFilters((prevState) => ({
      ...prevState,
      minPrice: +evt.target.value,
    }));
  };

  const handleChangeCategory = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setFilters((prevState) => ({
      ...prevState,
      category: event.target.value,
    }));
  };

  return (
    <section className="filters">
      <div>
        <label htmlFor="price">Price</label>
        <input
          type="range"
          id="price"
          min="0"
          max="2000"
          onChange={handleChangeMinPrice}
          value={filters.minPrice}
        />
        <span>${filters.minPrice}</span>
      </div>
      <div>
        <label htmlFor="category">Category</label>
        <select id="category" onChange={handleChangeCategory}>
          <option value="all">All</option>
          <option value="laptops">Laptops</option>
          <option value="smartphones">Smartphones</option>
          <option value="fragrances">Fragrances</option>
          <option value="skincare">Skincare</option>
          <option value="groceries">Groceries</option>
          <option value="home-decoration">Home Decoration</option>
        </select>
      </div>
    </section>
  );
};
