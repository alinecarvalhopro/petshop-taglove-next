"use client";

import "./header.scss";
import Image from "next/image";
import { useShowcaseContext } from "@/app/providers/ShowcaseContext";
import { CartIcon } from "./CartIcon/CartIcon";

interface IHeaderProps {
  children: React.ReactNode;
}

export const Header = ({ children }: IHeaderProps) => {
  const { reload } = useShowcaseContext();
  return (
    <header>
      <div className="header__div--containerLogoButtonIcons">
        <Image
          className="header__logo"
          onClick={() => reload()}
          src="/imageApp/logo.png"
          alt="logo"
          width={80}
          height={80}
          priority
        />
        <div className="header__div--containerIcons">
          <CartIcon />
        </div>
      </div>
      {children}
    </header>
  );
};
