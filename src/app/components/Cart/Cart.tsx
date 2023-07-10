"use client"

import { useCartContext } from "@/app/providers/CartContext";
import "./cart.scss";

export const Cart = () => {
  const { cartModalIsOpen } = useCartContext();
  return (
    <>
      {cartModalIsOpen ? (
        <div className="cartContainer--div">
          <h1>Carrinho</h1>
        </div>
      ) : null}
    </>
  );
};
