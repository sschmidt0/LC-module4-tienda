import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { PictureInfo } from "common/types";
import styles from "./select-picture-item.module.scss";

const LITERALS = {
  buy: "Buy",
};

export interface SelectPictureItemProps {
  item: PictureInfo;
}

export const SelectPictureItem = ({
  item: picture,
}: SelectPictureItemProps) => {
  const [selectedCat, setSelectedCat] = React.useState<PictureInfo>();

  const handleOnSelect = (picture: PictureInfo) => {
    setSelectedCat(picture);
  };

  return (
    <Card className={styles.card}>
      <CardContent>
        <div className={styles.card__image}>
          <img src={picture.picUrl} alt={picture.title} />
        </div>
        <Typography variant="h6">{picture.title}</Typography>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                color="secondary"
                value={selectedCat?.id}
                onChange={() => handleOnSelect(picture)}
              />
            }
            label={LITERALS.buy}
          ></FormControlLabel>
        </FormGroup>
      </CardContent>
    </Card>
  );
};
