import { PictureInfo } from "common/types";
import { SelectPictureItem } from "./components";
import styles from "./select-picture.module.scss";

export interface SelectPictureProps {
  items: PictureInfo[];
}

export const SelectPictures = ({ items }: SelectPictureProps) => {
  return Array.isArray(items) ? (
    <div className={styles.container}>
      {items.map((item) => (
        <SelectPictureItem item={item} />
      ))}
    </div>
  ) : null;
};
