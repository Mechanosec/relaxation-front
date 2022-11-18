import React from "react";
import logo from "../../img/logo.png";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header>
      <div className={classes.logo}>
        <div className={classes.logo_title}>
          <img src={logo} alt="logo" />
        </div>
        <span>farmgame</span>
      </div>
    </header>
  );
};

export default Header;
