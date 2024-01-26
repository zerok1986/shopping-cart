import './Footer.css';
import { IS_DEVELOPMENT } from '../../config.ts';
import { useFilters } from '../hooks/useFilters.ts';

export const Footer = () => {
  const { filters } = useFilters();
  return IS_DEVELOPMENT ? (
    <footer className="footer">{JSON.stringify(filters, null, 2)}</footer>
  ) : (
    <footer className="footer">
      <h4>
        Training Purposes ⚛️ － <span>@mikydev</span>
      </h4>
      <h5>Shopping Cart with useContext & useReducer</h5>
    </footer>
  );
};
