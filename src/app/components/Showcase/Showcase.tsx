"use client"

import "./showcase.scss";
import { ShowcaseListProducts } from "./ShowcaseListProducts/ShowcaseListProducts";
import { SearchFieldResult } from "./SearchFieldResult/SearchFieldResult";

export const Showcase = () => {
  return (
    <section className="showcase__section">
      <SearchFieldResult />
      <ShowcaseListProducts />
    </section>
  );
};
