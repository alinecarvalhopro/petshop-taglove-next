import "./button.scss";

interface IButtonProps {
  text?: string;
}

export const Button = ({ text }: IButtonProps) => {
  return <button>{text}</button>;
};
