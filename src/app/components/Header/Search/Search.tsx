"use client";

import "./serach.scss";
import { Select } from "../../fragments/Select/Select";
import { Input } from "../../fragments/Input/Input";
import { useShowcaseContext } from "@/app/providers/ShowcaseContext";

export const Search = () => {
  const { optionsSeachFilterCategory } = useShowcaseContext();

  return (
    <div className="header__div--search">
      <Select className="header__select--search">
        {optionsSeachFilterCategory.map((option) => (
          <option
            className="select__option"
            key={option.value}
            value={option.value}
          >
            {option.value}
          </option>
        ))}
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
