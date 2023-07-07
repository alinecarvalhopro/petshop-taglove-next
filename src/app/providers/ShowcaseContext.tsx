"use client";

import { createContext, useContext } from "react";

interface IShowcaseProviderProps {
  children: React.ReactNode;
}

interface IShowcaseContext {
  optionsSeachFilterCategory: IOptionsSeachFilterCategory[];
}

interface IOptionsSeachFilterCategory {
  value: string;
}

export const ShowcaseContext = createContext({} as IShowcaseContext);

export const ShowcaseProvider = ({ children }: IShowcaseProviderProps) => {
  const optionsSeachFilterCategory: IOptionsSeachFilterCategory[] = [
    { value: "Todos" },
    { value: "Alimentação" },
    { value: "Higiene" },
    { value: "Acessórios" },
  ];

  return (
    <ShowcaseContext.Provider value={{ optionsSeachFilterCategory }}>
      {children}
    </ShowcaseContext.Provider>
  );
};

export const useShowcaseContext = () => useContext(ShowcaseContext);
