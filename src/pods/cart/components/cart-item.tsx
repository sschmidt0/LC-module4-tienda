import * as React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import Typography from "@mui/material/Typography";
import { PictureInfo } from "common/types";
import { DeleteModal } from "./delete-modal";
import styles from "./cart-item.module.scss";

export interface CartItemProps {
  item: PictureInfo;
  onDelete: (id: string) => void;
}

export const CartItem = ({ item, onDelete }: CartItemProps) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleIconClick = () => {
    setIsOpen(true);
  };

  const handleCancelClick = () => {
    setIsOpen(false);
  };

  const handleDeleteClick = (id: string) => {
    onDelete(id);
    setIsOpen(false);
  };

  return (
    <>
      <div className={styles.item}>
        <div className={styles.item__image}>
          <img src={item.picUrl} alt={item.title} />
        </div>
        <Typography className={styles.item__text} variant="body1">
          {item.title}
        </Typography>
        <DeleteIcon
          color="secondary"
          onClick={handleIconClick}
          className={styles.item__icon}
        />
      </div>
      <DeleteModal
        isOpen={isOpen}
        title={item.title}
        onClose={handleCancelClick}
        onDelete={() => handleDeleteClick(item.id)}
      />
    </>
  );
};
