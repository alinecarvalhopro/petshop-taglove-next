import { CartIconCounter } from "./CartIconCounter/CartIconCounter";
import "./cartIcon.scss";
import Image from "next/image";

export const CartIcon = () => {
  return (
    <button className="header_button--cartIcon">
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
