"use client";

import { createContext, useContext } from "react";

interface IShowcaseProviderProps {
  children: React.ReactNode;
}

interface IShowcaseContext {}

export const ShowcaseContext = createContext({} as IShowcaseContext);

export const ShowcaseProvider = ({ children }: IShowcaseProviderProps) => {
  return (
    <ShowcaseContext.Provider value={{}}>{children}</ShowcaseContext.Provider>
  );
};

export const useShowcaseContext = () => useContext(ShowcaseContext);
