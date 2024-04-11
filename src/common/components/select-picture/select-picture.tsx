import { PictureInfo } from "common/types";
import { SelectPictureItem } from "./components";
import styles from "./select-picture.module.scss";

export interface SelectPictureProps {
  items: PictureInfo[];
  selectedItems: PictureInfo[];
}

export const SelectPictures = ({
  items,
  selectedItems,
}: SelectPictureProps) => {
  return Array.isArray(items) ? (
    <div className={styles.container}>
      {items.map((item) => {
        const hasCheckedInput =
          selectedItems.findIndex(
            (selectedItem) => item.id === selectedItem.id
          ) >= 0;

        return (
          <SelectPictureItem
            key={item.id}
            item={item}
            hasCheckedInput={hasCheckedInput}
          />
        );
      })}
    </div>
  ) : null;
};
