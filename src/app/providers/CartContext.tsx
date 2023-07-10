"use client";

import { createContext, useContext, useState } from "react";
import { useShowcaseContext } from "./ShowcaseContext";

interface ICartProviderProps {
  children: React.ReactNode;
}

interface ICartContext {
  cartModalIsOpen: boolean;
  setCartModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  addProductToCart: (productId: string) => void;
  productsCart: IProductCart[] | [];
  addQuantityProduct: (productId: string) => void;
  removeQuantityProduct: (productId: string) => void;
  removeProductCart: (productId: string) => void;
  removeAll: () => void;
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
  const [productsCart, setProductsCart] = useState<IProductCart[] | []>([]);

  const addProductToCart = (productId: string) => {
    if (productsCart.some((product: IProductCart) => product.id === productId)) {
      const newProduct = productsCart.map((product) => {
        if (product.id === productId) {
          product.quantity++;
          return product;
        } else {
          return product;
        }
      });
      setProductsCart(newProduct);
    } else {
      const productAddedToCart = productsList.find((product) => {
        return product.id === productId;
      });

      const newProductToCart = { ...productAddedToCart, quantity: 1 };
      setProductsCart([...productsCart, newProductToCart] as IProductCart[]);
    }
  };

  const addQuantityProduct = (productId: string) => {
    const productCart = productsCart.map((product: IProductCart) => {
      if (product.id === productId) {
        product.quantity++;
        return product;
      } else {
        return product;
      }
    });
    setProductsCart(productCart);
  };

  const removeQuantityProduct = (productId: string) => {
    const productCart = productsCart.map((product) => {
      if (product.id === productId) {
        if (product.quantity === 1) {
          return product;
        } else {
          product.quantity--;
          return product;
        }
      } else {
        return product;
      }
    });
    setProductsCart(productCart);
  };

  const removeProductCart = (productId: string) => {
    const removedProduct = productsCart.filter((product) => {
      return product.id !== productId;
    });
    setProductsCart(removedProduct);
  };

  const removeAll = () => {
    setProductsCart([]);
    setCartModalIsOpen(false);
  };

  return (
    <CartContext.Provider
      value={{
        cartModalIsOpen,
        setCartModalIsOpen,
        addProductToCart,
        productsCart,
        addQuantityProduct,
        removeQuantityProduct,
        removeProductCart,
        removeAll,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => useContext(CartContext);
