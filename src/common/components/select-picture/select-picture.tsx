import * as React from "react";
import { PictureInfo } from "common/types";
import styles from "./select-picture.module.scss";

const LITERALS = {
  buy: "Buy",
};

export interface SelectPictureProps {
  picture: PictureInfo;
}

export const SelectPicture = ({ picture }: SelectPictureProps) => {
  const [selectedCat, setSelectedCat] = React.useState<PictureInfo>();

  const handleOnSelect = (picture: PictureInfo) => {
    setSelectedCat(picture);
  };

  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img src={picture.picUrl} alt={picture.title} />
      </div>
      <label>{picture.title}</label>
      <div className={styles.input}>
        <input
          type="checkbox"
          value={selectedCat?.id}
          onChange={() => handleOnSelect(picture)}
        />
        <span>{LITERALS.buy}</span>
      </div>
    </div>
  );
};
