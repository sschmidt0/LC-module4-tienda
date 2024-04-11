import * as React from "react";
import { SelectedItemContext } from "core/provider";
import { useKitties } from "./kitties.hook";
import { SelectPictures } from "common/components";

export const KittiesComponent = () => {
  const { selectedItems } = React.useContext(SelectedItemContext);
  const kitties = useKitties();

  return <SelectPictures items={kitties} selectedItems={selectedItems} />;
};
