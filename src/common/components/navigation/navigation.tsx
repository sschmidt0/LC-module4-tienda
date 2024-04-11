import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { ToggleCartContext } from "core/provider";
import { NavigationItem } from "./components";
import { links } from "./navigation.mock";
import styles from "./navigation.module.scss";

export const Navigation = () => {
  const { isOpen, toggleCart } = React.useContext(ToggleCartContext);

  return (
    <AppBar color="secondary" position="sticky" className={styles.container}>
      <Toolbar className={styles.links}>
        <div className={styles.links}>
          {links.map((link) => {
            return <NavigationItem key={link.label} link={link} />;
          })}
        </div>
        <div className={styles.toggle} onClick={toggleCart}>
          {isOpen ? <ArrowForwardIosIcon /> : <ArrowBackIosIcon />}
          <ShoppingCartIcon />
        </div>
      </Toolbar>
    </AppBar>
  );
};
