import "./showcaseListProducts.scss";
import {
  productsDatabase,
} from "../../../../../database/productsDatabase";
import { ShowcaseCardProduct } from "../ShowcaseCardProduct/ShowcaseCardProduct";

export const ShowcaseListProducts = () => {
  return (
    <ul className="showcase__ul--listProducts">
      {productsDatabase.map((product) => {
        return <ShowcaseCardProduct key={product.id} product={product} />;
      })}
    </ul>
  );
};
