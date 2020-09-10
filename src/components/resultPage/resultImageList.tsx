import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import firebase from "../../firebase";
import { TileData } from "../../types/types";

import { Button } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
      width: "80%",
      textAlign: "center",
      marginTop: "2%",
    },
    imageStyle: {
      width: "300px",
      height: "300px",
      objectFit: "cover",
    },
  })
);

const ResultImageList: React.FC = () => {
  const { searchWord } = useParams();
  const classes = useStyles();
  const [imageList, setImageList] = useState<TileData[]>([]);
  const history = useHistory();

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

    // titleDataRef.get().then((querySnapshot) => {
    //   querySnapshot.forEach((doc) => {
    //     console.log(doc);
    //   });
    // });
    setImageList(temporaryData as TileData[]);
  };

  useEffect(() => {
    fetchData(searchWord);
  }, []);

  return (
    <>
      <h1>search result</h1>
      {searchWord ? searchWord : sessionStorage.getItem("user")}
      <div className={classes.root}>
        {imageList.map((tile) => (
          <Button
            onClick={() => {
              history.push(`/download/${tile.title}`);
            }}
          >
            <img
              className={classes.imageStyle}
              src={tile.image}
              alt={tile.title}
            />
          </Button>
        ))}
      </div>
    </>
  );
};

export default ResultImageList;
