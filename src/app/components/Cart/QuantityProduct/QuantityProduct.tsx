"use client"

import "./quantityProduct.scss";
import { IProductCart, useCartContext } from "@/app/providers/CartContext";

interface IQuantityProductProps {
    product: IProductCart;
  }
  
  export const QuantityProduct = ({product}: IQuantityProductProps) => {
  
    const { addQuantityProduct, removeQuantityProduct} = useCartContext();
  
    return (
      <div className="cart__div--quantityChange">
              <button
          className={"cart__button--buttonQuantity"}
          onClick={() => removeQuantityProduct(product.id)}
        >
          -
        </button>
        <p>{product.quantity}</p>
        <button
          className={"cart__button--buttonQuantity"}
          onClick={() => addQuantityProduct(product.id)}
        >
          +
        </button>
      </div>
    )
  }