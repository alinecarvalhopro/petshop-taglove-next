"use client"

import { useShowcaseContext } from "@/app/providers/ShowcaseContext";
import "./searchFieldResult.scss";

export const SearchFieldResult = () => {
  const { searchValue, clearSearchWord } = useShowcaseContext();

  return (
    <>
      {searchValue.length > 0 ? (
        <div className="showcase__div--SeachFieldResultContainer">
          <h3 className="showcase__h3--SeachFieldResult">
            Resultados para:{" "}
            <span className="showcase__span--searchValue">{searchValue}</span>
          </h3>
          <button
            className="showcase__button--clearSeach"
            onClick={() => clearSearchWord()}
          >
            Limpar
          </button>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};
