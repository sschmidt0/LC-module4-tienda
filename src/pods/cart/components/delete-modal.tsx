import cx from "classnames";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import styles from "./delete-modal.module.scss";

const LITERALS = {
  text: "Are you sure you want to delete",
  cart: "from your cart",
  cancel: "Cancel",
  delete: "Delete",
};

export interface DeleteModal {
  isOpen: boolean;
  title: string;
  onClose: () => void;
  onDelete: () => void;
}

export const DeleteModal = ({
  isOpen,
  title,
  onClose,
  onDelete,
}: DeleteModal) => {
  return (
    <div className={cx(styles.overlay, { [styles.hide]: !isOpen })}>
      <Paper elevation={3} className={styles.modal}>
        <div>
          <Typography>{`${LITERALS.text} ${title} ${LITERALS.cart}?`}</Typography>
          <div className={styles.modal__buttongroup}>
            <Button variant="outlined" color="secondary" onClick={onClose}>
              {LITERALS.cancel}
            </Button>
            <Button variant="contained" color="secondary" onClick={onDelete}>
              {LITERALS.delete}
            </Button>
          </div>
        </div>
      </Paper>
    </div>
  );
};
