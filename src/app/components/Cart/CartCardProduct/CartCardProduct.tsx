import "./cartCardProduct.scss";
import Image from "next/image";
import { IProductCart, useCartContext } from "@/app/providers/CartContext";
import { QuantityProduct } from "../QuantityProduct/QuantityProduct";

interface IProductCartProps {
  product: IProductCart;
}

export const CartCardProduct = ({ product }: IProductCartProps) => {
  const { removeProductCart } = useCartContext();
  return (
    <li className="cart__card">
      <div className="cart__div--imageNameQuantity">
        <Image
          className="cart__img--product"
          src={product.img}
          alt={`Imagem`}
          width={50}
          height={50}
          priority
        />
        <h3 className="cart__h3--nameProduct">{`${product.name.substring(
          0,
          12
        )}...`}</h3>
        <QuantityProduct product={product} />
      </div>
      <div className="cart__div--priceAndRemove">
        <p className="cart__p--priceProduct">
          {" "}
          {product.price.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
        <button
          className="cart__button--removeProduct"
          onClick={() => removeProductCart(product.id)}
        >
          Remover
        </button>
      </div>
    </li>
  );
};
