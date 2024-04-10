import { SelectPictures } from "common/components";
import { useDoggies } from "./doggies.hook";

export const DoggiesComponent = () => {
  const doggies = useDoggies();

  return <SelectPictures items={doggies} />;
};
