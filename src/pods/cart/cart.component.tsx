import * as React from "react";
import cx from "classnames";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Button from "@mui/material/Button";
import { SelectedItemContext } from "core/provider";
import { CartItem, DeleteModal } from "./components";
import styles from "./cart.module.scss";

const LITERALS = {
  clearCart: "Clear cart",
  infoModalText: "Are you sure you want to delete all the items in the cart?",
};

export interface CartComponentProps {
  className?: string;
}

export const CartComponent = ({ className }: CartComponentProps) => {
  const { selectedItems, onClick, onClearAll } =
    React.useContext(SelectedItemContext);
  const [isOpenDeleteAllModal, setIsOpenDeleteAllModal] = React.useState(false);

  const handleCloseDeleteAllClick = () => {
    setIsOpenDeleteAllModal(true);
  };

  const handleCancel = () => {
    setIsOpenDeleteAllModal(false);
  };

  const handleConfirmDeleteAll = () => {
    onClearAll();
    setIsOpenDeleteAllModal(false);
  };

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
      <div className={styles.container__button}>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleCloseDeleteAllClick}
        >
          {LITERALS.clearCart}
        </Button>
        <DeleteModal
          isOpen={isOpenDeleteAllModal}
          title={LITERALS.infoModalText}
          onClose={handleCancel}
          onDelete={handleConfirmDeleteAll}
        />
      </div>
    </div>
  );
};
