import { SelectPictures } from "common/components";
import { PictureInfo } from "common/types";

export interface KittiesComponentProps {
  kitties: PictureInfo[];
}

export const KittiesComponent = ({ kitties }: KittiesComponentProps) => {
  return <SelectPictures items={kitties} />;
};
