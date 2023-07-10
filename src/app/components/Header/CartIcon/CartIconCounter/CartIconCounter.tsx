import { useCartContext } from "@/app/providers/CartContext";
import "./cartIconCounter.scss";

export const CartIconCounter = () => {
  const {productsCart} = useCartContext();
  return <p className="header__p--cartIconCounter">{productsCart.length}</p>;
};
