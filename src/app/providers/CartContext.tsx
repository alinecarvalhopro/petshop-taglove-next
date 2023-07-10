"use client";

import { createContext, useContext, useState } from "react";
import { useShowcaseContext } from "./ShowcaseContext";

interface ICartProviderProps {
  children: React.ReactNode;
}

interface ICartContext {
  cartModalIsOpen: boolean;
  setCartModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IProductCart {
  id: string;
  img: string;
  name: string;
  description: string;
  price: number;
  category: "Alimentação" | "Higiene" | "Acessórios";
  quantity: number;
}

export const CartContext = createContext({} as ICartContext);

export const CartProvider = ({ children }: ICartProviderProps) => {
  const { productsList } = useShowcaseContext();

  const [cartModalIsOpen, setCartModalIsOpen] = useState(false);

  return (
    <CartContext.Provider value={{ cartModalIsOpen, setCartModalIsOpen }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => useContext(CartContext);
