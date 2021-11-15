import React from "react";
import "./Header.css";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
function Header() {
  return (
    <div>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h5" className="title">
            To-Do-List
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
