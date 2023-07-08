"use client";

import "./serach.scss";
import { Select } from "../../fragments/Select/Select";
import { Input } from "../../fragments/Input/Input";
import { useShowcaseContext } from "@/app/providers/ShowcaseContext";
import Image from "next/image";

export const Search = () => {
  const {
    optionsSeachFilterCategory,
    searchWord,
    inputSearchValue,
    setInputSearchValue,
  } = useShowcaseContext();

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
        value={inputSearchValue}
        onChange={(event) => {
          setInputSearchValue(event.target.value);
        }}
        className="header__input--search"
        id="search"
        type="search"
        placeholder="Pesquisar item"
      />
      <button
        className="header__button--search"
        onClick={() => {
          searchWord(inputSearchValue)
          , setInputSearchValue("");
        }}
      >
        <Image
          src="/imageApp/search.svg"
          alt="search"
          width={25}
          height={25}
          priority
        />
      </button>
    </div>
  );
};
