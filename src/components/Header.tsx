import { filtersOptions } from '../types/Filters';
import Filters from './Filters';

interface Props {
  changeFilters: React.Dispatch<React.SetStateAction<filtersOptions>>;
}

const Header = ({ changeFilters }: Props) => {
  return (
    <header>
      <h1>👨‍💻 mikydev shop 🛒</h1>
      <Filters changeFilters={changeFilters} />
    </header>
  );
};

export default Header;
