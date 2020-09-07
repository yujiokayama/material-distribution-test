import React, { useContext, useEffect } from "react";

import { useHistory } from "react-router-dom";

import { AuthContext } from "../Auth";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { RootState } from "../stores/rootReducer";
import { setSearchWord } from "../stores/modules/SearchWord";

import Header from "../components/Header";
import {
  Container,
  Grid,
  Typography,
  Paper,
  IconButton,
  InputBase,
} from "@material-ui/core";

import { createStyles, makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";

import catBG from "../assets/images/cat_bg.png";

const useStyles = makeStyles(() =>
  createStyles({
    background: {
      backgroundImage: `url(${catBG})`,
      backgroundColor: "white",
      backgroundSize: "cover",
      height: "100vh",
    },
    paper: {
      position: "relative",
      marginRight: "auto",
      marginLeft: "auto",
      top: "33%",
      width: "45%",
    },
  })
);

const Home: React.FC = (props: any) => {
  const { currentUser } = useContext(AuthContext);

  const classes = useStyles();

  const { searchWord } = useSelector((state: RootState) => {
    return state.SearchWord;
  });

  const dispatch = useDispatch();
  const handleSearchWord = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchWord(event.target.value));
  };

  const history = useHistory();
  const handleSubmit = () => {
    if ((searchWord?.length as number) !== 0) {
      history.push(`/search/${searchWord}`);
    } else {
      alert("検索ワードを入力してください");
      return;
    }
  };

  useEffect(() => {
    currentUser === null && props.history.push("/login");
  }, [currentUser]);


  return (
    <>
      <Header userName={currentUser && currentUser.displayName} />
      {searchWord}
      <div className={classes.background}>
        <Paper
          component="form"
          onSubmit={handleSubmit}
          className={classes.paper}
        >
          <IconButton type="submit">
            <SearchIcon />
          </IconButton>
          <InputBase
            placeholder="検索ワードを入力"
            onChange={handleSearchWord}
          />
        </Paper>
        <Container>
          <Grid container style={{ marginTop: "1em" }}>
            <Grid item md={4}></Grid>
            <Grid item md={4}>
              <Typography
                variant="caption"
                style={{
                  textAlign: "center",
                  paddingTop: "2em",
                  paddingBottom: "2em",
                  whiteSpace: "pre",
                }}
              ></Typography>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default Home;
