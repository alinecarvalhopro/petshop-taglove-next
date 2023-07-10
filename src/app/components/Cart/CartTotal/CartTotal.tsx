"use client";

import "./cartTotal.scss";
import { useCartContext } from "@/app/providers/CartContext";

export const CartTotal = () => {
  const { productsCart } = useCartContext();

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
    <div className="cart__div--totalAndPrice">
      <p className="cart__p--totalQuantityAndPrice">{quantity ? `Total(${quantity})` : `Total(0)`}</p>
      <p className="cart__p--totalQuantityAndPrice">{total ? total : "R$ 0,00"}</p>
    </div>
  );
};
