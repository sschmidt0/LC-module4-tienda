import * as React from "react";
import cx from "classnames";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { SelectedItemContext } from "core/provider";
import { CartItem } from "./components";
import styles from "./cart.module.scss";

export interface CartComponentProps {
  className?: string;
}

export const CartComponent = ({ className }: CartComponentProps) => {
  const { selectedItems, onClick } = React.useContext(SelectedItemContext);

  return (
    <div className={cx(styles.container, className)}>
      <div className={styles.container__inner}>
        <div className={styles.container__header}>
          <ShoppingCartIcon color="secondary" />
          <span>Cart</span>
        </div>
        <div className={styles.container__content}>
          {selectedItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onDelete={() => onClick("delete", item)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
