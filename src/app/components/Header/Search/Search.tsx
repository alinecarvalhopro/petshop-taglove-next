import "./serach.scss";
import { Select } from "../../fragments/Select/Select";
import { Input } from "../../fragments/Input/Input";

export const Search = () => {

  return (
    <div className="header__div--search">
      <Select className="header__select--search">
        <option className="select__option" key="Todos" value="Todos">
          Todos
        </option>
        <option
          className="select__option"
          key="Alimentação"
          value="Alimentação"
        >
          Alimentação
        </option>
        <option className="select__option" key="Higiene" value="Higiene">
          Higiene
        </option>
        <option className="select__option" key="Acessórios" value="Acessórios">
          Acessórios
        </option>
      </Select>
      <Input
        className="header__input--search"
        id="search"
        type="search"
        placeholder="Pesquisar item"
      />
    </div>
  );
};
