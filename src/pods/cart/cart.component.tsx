import cx from "classnames";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import styles from "./cart.module.scss";

export interface CartComponentProps {
  className?: string;
}

export const CartComponent = ({ className }: CartComponentProps) => {
  return (
    <div className={cx(styles.container, className)}>
      <div className={styles.container__inner}>
        <div className={styles.container__header}>
          <ShoppingCartIcon color="secondary" />
          <span>Cart</span>
        </div>
        <div className={styles.container__content}>hola</div>
      </div>
    </div>
  );
};
