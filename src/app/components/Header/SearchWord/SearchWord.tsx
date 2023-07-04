import "./searchword.scss";
import { Input } from "../../fragments/Input/Input";

export const SearchWord = () => {
  return (
    <Input
    className="header__input--search"
    id="search"
    type="search"
    placeholder="Pesquisar intem"
  />
  );
};
