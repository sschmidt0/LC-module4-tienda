import Link from "@mui/material/Link";
import { useNavigate } from "react-router-dom";
import { LinkItem } from "../navigation.model";
import styles from "./navigation-item.module.scss";

export interface NavigationItemProps {
  link: LinkItem;
}

export const NavigationItem = ({ link }: NavigationItemProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(link.url);
  };

  return (
    <Link underline="none" className={styles.link} onClick={handleClick}>
      <span className={styles.link__text}>{link.label}</span>
    </Link>
  );
};
