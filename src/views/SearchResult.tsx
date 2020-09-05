import React, { useEffect } from "react";

import Header from "../components/Header";
import { useSelector } from "react-redux";
import { RootState } from "../stores/rootReducer";

const SearchResult: React.FC = () => {
  const { searchWord } = useSelector((state: RootState) => {
    return state.SearchWord;
  });

  useEffect(() => {
    if (searchWord?.length !== 0) {
      sessionStorage.setItem("user", searchWord as string);
    }
  }, []);

  return (
    <>
      <Header />
      <h1>search result</h1>
      {searchWord ? searchWord : sessionStorage.getItem("user")}
    </>
  );
};

export default SearchResult;
