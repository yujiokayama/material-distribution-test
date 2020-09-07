import React from "react";
import { AppBar, Toolbar, IconButton } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import firebase from "../firebase";

type Props = {
  userName?: string | null | undefined;
};

const useStyles = makeStyles(() =>
  createStyles({
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

const Header: React.FC<Props> = (props) => {
  const classes = useStyles();
  return (
    <>
      <AppBar position="static" className={classes.background}>
        <Toolbar>
          にゃんこ画像配布サイト
          <div className={classes.toolbarButtons}>
            {props.userName && (
              <div>
                <span className={classes.userName}>
                  こんにちは {props.userName}
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
