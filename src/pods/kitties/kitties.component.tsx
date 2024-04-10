import { SelectPictures } from "common/components";
import { useKitties } from "./kitties.hook";

export const KittiesComponent = () => {
  const kitties = useKitties();

  return <SelectPictures items={kitties} />;
};
