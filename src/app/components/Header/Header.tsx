"use client";

import "./header.scss";
import Image from "next/image";
import { CartIcon } from "./CartIcon/CartIcon";
import { UserControllerIcon } from "./UserControllerIcon/UserControllerIcon";
import { Search } from "./Search/Search";
import { useShowcaseContext } from "@/app/providers/ShowcaseContext";

export const Header = () => {
  const { reload } = useShowcaseContext();
  return (
    <header>
      <div className="header__div--containerLogoButtonIcons">
        <Image
          onClick={() => reload()}
          src="/imageApp/logo.png"
          alt="logo"
          width={80}
          height={80}
          priority
        />
        <div className="header__div--containerIcons">
          <UserControllerIcon />
          <CartIcon />
        </div>
      </div>
      <Search />
    </header>
  );
};
