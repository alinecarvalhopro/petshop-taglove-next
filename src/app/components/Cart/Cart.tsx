"use client";

import { useCartContext } from "@/app/providers/CartContext";
import "./cart.scss";
import { CartTotal } from "./CartTotal/CartTotal";
import Image from "next/image";
import { CartListProduct } from "./CartListProducts/CartListProducts";

export const Cart = () => {
  const { cartModalIsOpen, setCartModalIsOpen, removeAll } = useCartContext();

  return (
    <>
      {cartModalIsOpen ? (
        <div className="cartContainer__div">
          <div className="cart__div">
            <Image
              className="cart__img--close"
              onClick={() => setCartModalIsOpen(false)}
              src="/imageApp/close.svg"
              alt="logo"
              width={25}
              height={25}
              priority
            />
            <h2 className="cart__h2--titeCart">Carrinho do seu pet</h2>
            <CartListProduct />
            <CartTotal />
            <button
              className="cart__button--finalizeOrder"
              onClick={() => removeAll()}
            >
              Finalizar pedido
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
};
