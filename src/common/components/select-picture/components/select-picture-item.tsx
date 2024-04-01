import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
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
        <div className={styles.card__input}>
          <input
            type="checkbox"
            value={selectedCat?.id}
            onChange={() => handleOnSelect(picture)}
          />
          <span>{LITERALS.buy}</span>
        </div>
      </CardContent>
    </Card>
  );
};
