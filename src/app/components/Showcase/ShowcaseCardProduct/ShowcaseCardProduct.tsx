import "./showcaseCardproduct.scss";
import Image from "next/image";
import { IProduct } from "../../../../../database/productsDatabase";

interface IProductProps {
  product: IProduct;
}

export const ShowcaseCardProduct = ({ product }: IProductProps) => {
  return (
    <li className="showcase__li--productCard">
      <Image
        className="showcase__img--productImage"
        src={product.img}
        alt={product.name}
        width={100}
        height={100}
        priority
      />
      <h3 className="showcase__h3--nameProduct">{product.name}</h3>
      <p className="showcase__p--productCategory">{product.category}</p>
      <p className="showcase__p--productPrice">
        {product.price.toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        })}
      </p>
      <button className="showcase__button--AddToCard">Comprar</button>
    </li>
  );
};
