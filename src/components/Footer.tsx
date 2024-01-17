import './Footer.css';
import { filtersOptions } from '../types';
import { IS_DEVELOPMENT } from '../../config.ts';

interface Props {
  filters: filtersOptions;
}

export const Footer = ({ filters }: Props) => {
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
