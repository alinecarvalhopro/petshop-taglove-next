"use client";

import "./cart.scss";
import { useCartContext } from "@/app/providers/CartContext";
import Image from "next/image";
import { CartListProduct } from "../components/Cart/CartListProducts/CartListProducts";
import { CartTotal } from "../components/Cart/CartTotal/CartTotal";
import Link from "next/link";
import { Header } from "../components/Header/Header";

const Cart = () => {
  const { productsCart, removeAll } = useCartContext();

  return (
    <>
      <Header children={null} />
      <div className="cartContainer__div">
        {productsCart.length == 0 ? (
          <div className="cart__div">
            <Link href="/">
              <Image
                className="cart__img--back"
                src="/imageApp/back.svg"
                alt="back"
                width={25}
                height={25}
                priority
              />
            </Link>
            <h2 className="cart__h2--titeCart">Carrinho vazio</h2>
            <Link href="/">
              <Image
                className="cart__img--return"
                src="/imageApp/return.png"
                alt="back"
                width={250}
                height={250}
                priority
              />
            </Link>
          </div>
        ) : (
          <div className="cart__div">
            <Link href="/">
              <Image
                className="cart__img--back"
                src="/imageApp/back.svg"
                alt="back"
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
        )}
      </div>
    </>
  );
};

export default Cart;
