"use client";

import "./cartTotal.scss";
import { useCartContext } from "@/app/providers/CartContext";

export const CartTotal = () => {
  const { quantity , total } = useCartContext();

  return (
    <div className="cart__div--totalAndPrice">
      <p className="cart__p--totalQuantityAndPrice">{quantity ? `Total ( ${quantity} )` : `Total(0)`}</p>
      <p className="cart__p--totalQuantityAndPrice">{total ? total : "R$ 0,00"}</p>
    </div>
  );
};
