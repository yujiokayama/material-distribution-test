import React, { useContext, useEffect } from "react";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { RootState } from "../stores/rootReducer";

import { setSearchWord } from "../stores/modules/SearchWord";

import {
  Button,
  Container,
  Grid,
  Typography,
  Paper,
  IconButton,
  InputBase,
} from "@material-ui/core";

import { createStyles, makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";

import pencil from "../assets/images/pencil.jpg";

import { AuthContext } from "../Auth";
import auth from "../firebase";

const useStyles = makeStyles(() =>
  createStyles({
    background: {
      backgroundImage: `url(${pencil})`,
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

  useEffect(() => {
    currentUser === null && props.history.push("/login");
  }, [currentUser]);

  return (
    <>
      <div className={classes.background}>
        <Paper className={classes.paper}>
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
              >
                <h1>Hello: {currentUser && currentUser.displayName}!!</h1>
              </Typography>

              <Button
                fullWidth
                onClick={async () => {
                  try {
                    await auth.signOut();
                    props.history.push("/login");
                  } catch (error) {
                    alert(error.message);
                  }
                }}
                style={{ marginTop: "0.5em", marginBottom: "0.5em" }}
              >
                Logout
              </Button>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default Home;
