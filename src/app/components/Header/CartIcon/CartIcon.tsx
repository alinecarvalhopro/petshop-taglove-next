import { useCartContext } from "@/app/providers/CartContext";
import { CartIconCounter } from "./CartIconCounter/CartIconCounter";
import "./cartIcon.scss";
import Image from "next/image";

export const CartIcon = () => {
  const { setCartModalIsOpen } = useCartContext();
  return (
    <button
      className="header_button--cartIcon"
      onClick={() => {
        setCartModalIsOpen(true);
      }}
    >
      <div className="header__div--containerCart">
        <Image
          src="/imageApp/bag.svg"
          alt="logo"
          width={35}
          height={35}
          priority
        />
        <CartIconCounter />
      </div>
    </button>
  );
};
