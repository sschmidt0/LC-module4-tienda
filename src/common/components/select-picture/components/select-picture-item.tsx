import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { PictureInfo } from "common/types";
import styles from "./select-picture-item.module.scss";
import { SelectedItemContext } from "core/provider";

const LITERALS = {
  buy: "Buy",
};

export interface SelectPictureItemProps {
  item: PictureInfo;
  hasCheckedInput: boolean;
}

export const SelectPictureItem = ({
  item,
  hasCheckedInput,
}: SelectPictureItemProps) => {
  const { onClick } = React.useContext(SelectedItemContext);
  const action = hasCheckedInput ? "delete" : "add";

  const handleCheckboxClick = () => {
    onClick(action, item);
  };

  return (
    <Card className={styles.card}>
      <CardContent>
        <div className={styles.card__image}>
          <img src={item.picUrl} alt={item.title} />
        </div>
        <Typography variant="h6">{item.title}</Typography>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                color="secondary"
                value={hasCheckedInput}
                onChange={handleCheckboxClick}
                checked={hasCheckedInput}
              />
            }
            label={LITERALS.buy}
          ></FormControlLabel>
        </FormGroup>
      </CardContent>
    </Card>
  );
};
