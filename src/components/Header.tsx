import React from "react";
import { AppBar, Toolbar, IconButton } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { auth } from "../firebase";

type Props = {
  userName?: any;
  history?: any;
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
            <span className={classes.userName}>
              こんにちは {props.userName}
            </span>
            <IconButton>
              <ExitToAppIcon
                className={classes.iconLogOut}
                onClick={async () => {
                  try {
                    await auth.signOut();
                  } catch (error) {
                    console.log(error.message);
                  }
                }}
              />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
