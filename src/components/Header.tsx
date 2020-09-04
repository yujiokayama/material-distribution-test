import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";

const Header: React.FC = () => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>素材配布サイト</Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
