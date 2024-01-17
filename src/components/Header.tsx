import { Filters } from '.';
import { filtersOptions } from '../types';

interface Props {
  changeFilters: React.Dispatch<React.SetStateAction<filtersOptions>>;
}

export const Header = ({ changeFilters }: Props) => {
  return (
    <header>
      <h1>👨‍💻 mikydev shop 🛒</h1>
      <Filters changeFilters={changeFilters} />
    </header>
  );
};
