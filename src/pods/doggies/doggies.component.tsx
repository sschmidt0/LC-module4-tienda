import * as React from "react";
import { SelectedItemContext } from "core/provider";
import { useDoggies } from "./doggies.hook";
import { SelectPictures } from "common/components";

export const DoggiesComponent = () => {
  const { selectedItems } = React.useContext(SelectedItemContext);
  const doggies = useDoggies();

  return <SelectPictures items={doggies} selectedItems={selectedItems} />;
};
