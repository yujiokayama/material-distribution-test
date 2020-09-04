import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";

const Header: React.FC = (props: any) => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>会員サイト</Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
