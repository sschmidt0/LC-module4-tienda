import { routes } from "core/router";
import { LinkItem } from "./navigation.model";

export const links: LinkItem[] = [
  {
    label: "Kitties",
    url: routes.kitties,
  },
  {
    label: "Doggies",
    url: routes.doggies,
  },
];
