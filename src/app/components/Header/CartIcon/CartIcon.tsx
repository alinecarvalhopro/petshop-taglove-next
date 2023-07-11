import "./cartIcon.scss";
import Image from "next/image";
import Link from "next/link";
import { CartIconCounter } from "./CartIconCounter/CartIconCounter";

export const CartIcon = () => {
  return (
      <Link className="header_button--cartIcon" href="/cart">
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
      </Link>

  );
};
