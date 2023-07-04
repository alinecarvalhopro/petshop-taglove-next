import "./header.scss";
import Image from "next/image";
import { CartIcon } from "./CartIcon/CartIcon";
import { UserControllerIcon } from "./UserControllerIcon/UserControllerIcon";
import { SearchWord } from "./SearchWord/SearchWord";

export const Header = () => {
  return (
    <header>
      <div className="header__div--containerLogoButtonIcons">
        <Image
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
      <SearchWord/>
    </header>
  );
};
