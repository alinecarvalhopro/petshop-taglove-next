import "./userControllerIcon.scss";
import Image from "next/image";

export const UserControllerIcon = () => {
  return (
    <button className="header_button--userControllerIcon">
      <Image
        src="/imageApp/user.svg"
        alt="logo"
        width={30}
        height={30}
        priority
      />
    </button>
  );
};
