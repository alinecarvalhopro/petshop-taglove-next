"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { productsDatabase } from "../../../database/productsDatabase";

interface IShowcaseProviderProps {
  children: React.ReactNode;
}

interface IShowcaseContext {
  optionsSeachFilterCategory: IOptionsSeachFilterCategory[];
  productsList: IProduct[] | [];
  renderShowcase: () => void;
  searchValue: string;
  inputSearchValue: string;
  searchWord: (search: string) => void;
  clearSearchWord: () => void;
  setInputSearchValue: React.Dispatch<React.SetStateAction<string>>;
  productsListSecundary: IProduct[] | [];
  setProducstList: React.Dispatch<React.SetStateAction<[] | IProduct[]>>;
}

interface IOptionsSeachFilterCategory {
  value: string;
}

export interface IProduct {
  id: string;
  img: string;
  name: string;
  description: string;
  price: number;
  category: "Alimentação" | "Higiene" | "Acessórios";
}

export const ShowcaseContext = createContext({} as IShowcaseContext);

export const ShowcaseProvider = ({ children }: IShowcaseProviderProps) => {
  const optionsSeachFilterCategory: IOptionsSeachFilterCategory[] = [
    { value: "Todos" },
    { value: "Alimentação" },
    { value: "Higiene" },
    { value: "Acessórios" },
  ];

  const [productsList, setProducstList] = useState<IProduct[] | []>([]);
  const [productsListSecundary, setProducstListSecundary] = useState<
    IProduct[] | []
  >([]);
  const [inputSearchValue, setInputSearchValue] = useState("");
  const [searchValue, setSearchValue] = useState("");

  const renderShowcase = () => {
    setProducstList(productsDatabase);
    setProducstListSecundary(productsListSecundary);
  };

  const searchWord = (search: string) => {
    const seachWordResult = productsList.filter((product) => {
      return product.name.toUpperCase().includes(search.toUpperCase());
    });

    const verifyIfProductExists = seachWordResult.find((product) => {
      return product.name.toUpperCase().includes(search.toUpperCase());
    });

    if (verifyIfProductExists) {
      setProducstList(seachWordResult);
      setInputSearchValue("");

      if (seachWordResult.length > 0) {
        setInputSearchValue(search);
        setSearchValue(search);
      } else {
        setInputSearchValue("");
      }
    }
  };

  const clearSearchWord = () => {
    setProducstList(productsListSecundary);
    setSearchValue("");
    renderShowcase();
  };

  return (
    <ShowcaseContext.Provider
      value={{
        optionsSeachFilterCategory,
        productsList,
        renderShowcase,
        searchValue,
        inputSearchValue,
        searchWord,
        clearSearchWord,
        setInputSearchValue,
        productsListSecundary,
        setProducstList,
      }}
    >
      {children}
    </ShowcaseContext.Provider>
  );
};

export const useShowcaseContext = () => useContext(ShowcaseContext);
