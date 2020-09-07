import React, { useEffect } from "react";
import ResultImageList from "../components/resultPage/resultImageList";

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
      <ResultImageList />
    </>
  );
};

export default SearchResult;
