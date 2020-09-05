import React, { Fragment, useContext, useEffect, useState } from "react";

import {
  Button,
  Container,
  FormControl,
  Grid,
  Link,
  TextField,
  Typography,
} from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core/styles";

import { AuthContext } from "../Auth";
import { auth } from "../firebase";

import catPenki from "../assets/images/catPenki.png";

const useStyles = makeStyles(() =>
  createStyles({
    background: {
      backgroundImage: `url(${catPenki})`,
      backgroundColor: "white",
      backgroundSize: "cover",
      height: "100vh",
    },
    loginWrap: {
      position: "relative",
      marginRight: "auto",
      marginLeft: "auto",
      top: "33%",
      width: "45%",
    },
  })
);

const Login: React.FC = (props: any) => {
  const classes = useStyles();
  const { currentUser } = useContext(AuthContext);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  useEffect(() => {
    // if logged in, redirect to home
    currentUser && props.history.push("/");
  }, [currentUser]);

  return (
    <>
      <div className={classes.background}>
        <Container className={classes.loginWrap}>
          <Grid container>
            <Grid item md={4}></Grid>
            <Grid item md={4}>
              <FormControl margin="normal" fullWidth>
                <TextField
                  style={{ marginTop: "0.5em", marginBottom: "0.5em" }}
                  name="email"
                  label="E-mail"
                  fullWidth
                  variant="outlined"
                  value={email}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setEmail(event.target.value);
                  }}
                />
              </FormControl>
              <FormControl fullWidth>
                <TextField
                  style={{ marginTop: "0.5em", marginBottom: "0.5em" }}
                  name="password"
                  label="Password"
                  fullWidth
                  variant="outlined"
                  type="password"
                  value={password}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setPassword(event.target.value);
                  }}
                />
              </FormControl>
              <FormControl fullWidth>
                <Button
                  fullWidth
                  onClick={async () => {
                    try {
                      await auth.signInWithEmailAndPassword(email, password);
                      props.history.push("/");
                    } catch (error) {
                      alert(error.message);
                    }
                  }}
                  style={{ marginTop: "0.5em", marginBottom: "0.5em" }}
                >
                  Login
                </Button>
              </FormControl>
              <Typography align="center">
                <Link href="/signup">to signup</Link>
              </Typography>
            </Grid>
            <Grid item md={4}></Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default Login;
