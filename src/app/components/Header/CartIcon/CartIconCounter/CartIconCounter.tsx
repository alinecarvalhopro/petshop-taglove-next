import { useCartContext } from "@/app/providers/CartContext";
import "./cartIconCounter.scss";

export const CartIconCounter = () => {
  const { quantity } = useCartContext();
  return <p className="header__p--cartIconCounter">{quantity ? quantity : 0}</p>;
};
