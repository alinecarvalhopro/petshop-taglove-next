"use client";

import "./cart.scss";
import { useCartContext } from "@/app/providers/CartContext";
import Image from "next/image";
import { CartListProduct } from "../components/Cart/CartListProducts/CartListProducts";
import { CartTotal } from "../components/Cart/CartTotal/CartTotal";
import Link from "next/link";

const Cart = () => {
  const { removeAll } = useCartContext();

  return (
        <div className="cartContainer__div">
          <div className="cart__div">
            <Link href="/">
              <Image
                className="cart__img--back"
                src="/imageApp/back.svg"
                alt="logo"
                width={25}
                height={25}
                priority
              />
            </Link>
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
  );
};

export default Cart;
