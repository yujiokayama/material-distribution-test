import React, { useEffect, useContext } from "react";
import { AuthContext } from "../Auth";

import { Link } from "react-router-dom";
import { AppBar, Toolbar, IconButton } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import firebase from "../firebase";

type Props = {
  userName?: string | null | undefined;
};

const useStyles = makeStyles(() =>
  createStyles({
    link: {
      color: "white",
      textDecoration: "none",
    },
    background: {
      backgroundColor: "#8bc43f",
    },
    toolbarButtons: {
      marginLeft: "auto",
    },
    userName: {
      marginRight: "10px",
    },
    iconLogOut: {
      fill: "white",
    },
  })
);

const Header: React.FC<Props> = () => {
  const { currentUser } = useContext(AuthContext);

  const classes = useStyles();
  return (
    <>
      <AppBar position="static" className={classes.background}>
        <Toolbar>
          <Link to="/" className={classes.link}>
            にゃんこ画像配布サイト
          </Link>
          <div className={classes.toolbarButtons}>
            {currentUser && (
              <div>
                <span className={classes.userName}>
                  こんにちは {currentUser.displayName}
                </span>
                <IconButton
                  onClick={async () => {
                    try {
                      await firebase.auth().signOut();
                    } catch (error) {
                      console.log(error.message);
                    }
                  }}
                >
                  <ExitToAppIcon className={classes.iconLogOut} />
                </IconButton>
              </div>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
