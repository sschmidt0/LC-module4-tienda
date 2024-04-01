import { KittiesComponent } from "./kitties.component";
import { useKitties } from "./kitties.hook";

export const KittiesContainer = () => {
  const kitties = useKitties();
  return <KittiesComponent kitties={kitties} />;
};
