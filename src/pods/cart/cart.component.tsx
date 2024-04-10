import cx from "classnames";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import styles from "./cart.module.scss";
import { CartItem } from "./components";
import { doggies } from "pods/doggies/doggies.mock";

export interface CartComponentProps {
  className?: string;
  onDelete: (id: string) => void;
}

export const CartComponent = ({ className, onDelete }: CartComponentProps) => {
  return (
    <div className={cx(styles.container, className)}>
      <div className={styles.container__inner}>
        <div className={styles.container__header}>
          <ShoppingCartIcon color="secondary" />
          <span>Cart</span>
        </div>
        <div className={styles.container__content}>
          {doggies.map((item) => (
            <CartItem key={item.id} item={item} onDelete={onDelete} />
          ))}
        </div>
      </div>
    </div>
  );
};
