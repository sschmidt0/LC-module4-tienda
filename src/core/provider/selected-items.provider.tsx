import * as React from "react";
import { PictureInfo } from "common/types";

type Action = "delete" | "add";

export interface SelectedItemProviderProps {
  selectedItems: PictureInfo[];
  onClick: (action: Action, item: PictureInfo) => void;
  onClearAll: () => void;
}

export const SelectedItemContext =
  React.createContext<SelectedItemProviderProps>({
    onClick: () => {},
    onClearAll: () => {},
    selectedItems: [],
  });

export const SelectedItemsProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [selectedItems, setSelectedItems] = React.useState<PictureInfo[]>([]);

  const handleOnAddSelectedItem = React.useCallback(
    (item: PictureInfo) => {
      const isAlreadyAdded = item.isSelected === true;

      if (!isAlreadyAdded) {
        const items: PictureInfo[] = [
          ...selectedItems,
          { ...item, isSelected: true },
        ];
        setSelectedItems(items);
      }
    },
    [selectedItems]
  );

  const handleOnDeleteSelectedItem = React.useCallback(
    (item: PictureInfo) => {
      const filteredItems = selectedItems.filter(
        (element) => element.id !== item.id
      );

      setSelectedItems(filteredItems);
    },
    [selectedItems]
  );

  const handleClearAll = () => {
    setSelectedItems([]);
  };

  const handleOnClick = React.useCallback(
    (action: Action, item: PictureInfo) => {
      if (action === "add") handleOnAddSelectedItem(item);
      else handleOnDeleteSelectedItem(item);
    },
    [handleOnAddSelectedItem, handleOnDeleteSelectedItem]
  );

  const value = React.useMemo(
    () => ({
      selectedItems,
      onClick: handleOnClick,
      onClearAll: handleClearAll,
    }),
    [selectedItems, handleOnClick]
  );

  return (
    <SelectedItemContext.Provider value={value}>
      {children}
    </SelectedItemContext.Provider>
  );
};
