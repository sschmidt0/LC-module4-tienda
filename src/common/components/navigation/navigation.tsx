import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { NavigationItem } from "./components";
import { links } from "./navigation.mock";
import styles from "./navigation.module.scss";

export const Navigation = () => {
  return (
    <AppBar color="secondary" position="sticky">
      <Toolbar className={styles.links}>
        {links.map((link) => {
          return <NavigationItem key={link.label} link={link} />;
        })}
      </Toolbar>
    </AppBar>
  );
};
