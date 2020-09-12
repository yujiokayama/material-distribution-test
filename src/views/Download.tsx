import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import firebase from "../firebase";
import { TileData } from "../types/types";

import { Button } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(() =>
  createStyles({
    tileImage: {
      display: "block",
      width: "436px",
      height: "436px",
      margin: "20px auto",
      objectFit: "cover",
    },
    mainContainer: {
      textAlign: "center",
    },
  })
);

const DownLoad: React.FC = () => {
  const classes = useStyles();
  const { searchWord } = useParams();

  const [imageList, setImageList] = useState<TileData[]>([]);

  const displayImage = () => {
    return (
      <div>
        {imageList.map((tile) => (
          <img
            key={tile.title}
            src={tile.image}
            alt={tile.title}
            className={classes.tileImage}
          />
        ))}
      </div>
    );
  };

  const downloadButton = () => {
    return (
      <div className={classes.mainContainer}>
        {imageList.map((tile) => (
          <Button variant="contained" href={tile.downloadUrl}>
            ダウンロード
          </Button>
        ))}
      </div>
    );
  };

  const fetchData = async (searchWord: string | undefined) => {
    const db = firebase.firestore();
    const titleDataRef = db.collection("tileData");
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

  useEffect(() => {
    fetchData(searchWord);
  }, []);

  return (
    <>
      <div>
        {displayImage()}
        {downloadButton()}
      </div>
    </>
  );
};

export default DownLoad;
