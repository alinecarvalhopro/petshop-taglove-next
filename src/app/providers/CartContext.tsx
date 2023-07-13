"use client";

import { createContext, useContext, useState } from "react";
import { useShowcaseContext } from "./ShowcaseContext";

interface ICartProviderProps {
  children: React.ReactNode;
}

interface ICartContext {
  addProductToCart: (productId: string) => void;
  productsCart: IProductCart[] | [];
  addQuantityProduct: (productId: string) => void;
  removeQuantityProduct: (productId: string) => void;
  removeProductCart: (productId: string) => void;
  removeAll: () => void;
  quantity: number | undefined;
  total: string | undefined;
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

  const [productsCart, setProductsCart] = useState<IProductCart[] | []>([]);

  const addProductToCart = (productId: string) => {
    if (
      productsCart.some((product: IProductCart) => product.id === productId)
    ) {
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
  };

  let quantity;
  if (productsCart.length > 0) {
    const newListProductsPrice = productsCart.map(
      (product) => product.quantity
    );
    quantity = newListProductsPrice.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
  }

  let total;
  if (productsCart.length > 0) {
    const newListProducts = productsCart.map(
      (product) => product.price * product.quantity
    );
    total = newListProducts
      .reduce((accumulator, currentValue) => accumulator + currentValue, 0)
      .toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL",
      });
  }

  return (
    <CartContext.Provider
      value={{
        addProductToCart,
        productsCart,
        addQuantityProduct,
        removeQuantityProduct,
        removeProductCart,
        removeAll,
        quantity,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => useContext(CartContext);
