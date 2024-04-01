import { SelectPictures } from "common/components";
import { PictureInfo } from "common/types";

export interface DoggiesComponentProps {
  doggies: PictureInfo[];
}

export const DoggiesComponent = ({ doggies }: DoggiesComponentProps) => {
  return <SelectPictures items={doggies} />;
};
