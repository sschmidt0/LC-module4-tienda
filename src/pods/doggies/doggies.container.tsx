import { DoggiesComponent } from "./doggies.component";
import { useDoggies } from "./doggies.hook";

export const DoggiesContainer = () => {
  const doggies = useDoggies();
  return <DoggiesComponent doggies={doggies} />;
};
