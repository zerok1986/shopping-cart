import { useState } from 'react';
import './Filters.css';

const Filters = () => {
  const [minPrice, setMinPrice] = useState<number>(0);

  const handleChangeMinPrice = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setMinPrice(+evt.target.value);
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
        />
        <span>${minPrice}</span>
      </div>
      <div>
        <label htmlFor="category">Category</label>
        <select id="category">
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

export default Filters;
