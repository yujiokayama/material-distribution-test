import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import firebase from "../firebase";
import { TileData } from "../types/types";

import { Button } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(() => createStyles({}));

const [imageList, setImageList] = useState<TileData[]>([]);

const fetchData = async (searchWord: string | undefined) => {
  const db = firebase.firestore();
  const titleDataRef = db.collection("titleData");
  const searchData = titleDataRef.where(
    "keyword",
    "array-contains",
    searchWord
  );
  const snapShot = await searchData.get();
  const temporaryData: object[] = [];

  snapShot.docs.map((doc) => {
    temporaryData.push(doc.data());
  });

  setImageList(temporaryData as TileData[]);
};

const displayImage = () => {
  return (
    <div>
      {imageList.map((tile) => (
        <img src={tile.image} alt={tile.title} />
      ))}
    </div>
  );
};

const DownLoad: React.FC = () => {
  const classes = useStyles();
  const { searchWord } = useParams();

  useEffect(() => {
    fetchData(searchWord);
  }, []);

  return <>{displayImage()} </>;
};

export default DownLoad;
