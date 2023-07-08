"use client"

import "./showcaseListProducts.scss";
import { ShowcaseCardProduct } from "../ShowcaseCardProduct/ShowcaseCardProduct";
import { useShowcaseContext } from "@/app/providers/ShowcaseContext";
import { useEffect } from "react";

export const ShowcaseListProducts = () => {
  const { productsList, renderShowcase } = useShowcaseContext();

  useEffect(() => {
    renderShowcase()
  }, []);

  return (
    <ul className="showcase__ul--listProducts">
      {productsList.map((product) => {
        return <ShowcaseCardProduct key={product.id} product={product} />;
      })}
    </ul>
  );
};
