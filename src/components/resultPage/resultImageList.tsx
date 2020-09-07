import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import firebase from "../../firebase";
import { TileData } from "../../types/types";

const ResultImageList: React.FC = () => {
  const [data, setData] = useState<TileData[]>([]);
  const { searchWord } = useParams();

  const fetchData = async (searchWord: string | undefined) => {
    const db = firebase.firestore();

    const tileDataRef = db.collection("titleData");
    const searchData = tileDataRef.where(
      "keyword",
      "array-contains",
      searchWord
    );
    const snapShot = await searchData.get();
    const temporaryData: object[] = [];

    snapShot.docs.forEach((doc) => {
      temporaryData.push(doc.data());
    });

    setData(temporaryData as TileData[]);
    console.log(data);
  };

  useEffect(() => {
    fetchData(searchWord);
  }, []);

  return (
    <>
      {data.map((tile) => {
        // <img src={tile.image} alt={tile.title} />;
      })}
    </>
  );
};

export default ResultImageList;
