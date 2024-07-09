import {
  PiArrowDown,
  PiArrowDownFill,
  PiArrowDownRight,
  PiArrowUpRight,
  PiArrowUpRightFill,
  PiHouse,
  PiHouseBold,
} from "react-icons/pi";
import { LinkItem } from "./lib/types";
import { SiGithub } from "react-icons/si";

export const links: LinkItem[] = [
  { id: 0, name: "Home", to: "/", icon: PiHouse },
  {
    id: 1,
    name: "About",
    to: "/#",
    icon: PiArrowDown,
  },
  { id: 2, name: "Company", to: "/#", icon: PiArrowDown },
  { id: 3, name: "Products", to: "/#", icon: PiArrowDown },

  {
    id: 4,
    name: "Projects",
    icon: PiArrowUpRight,
    to: "https://github.com/sagarmusabbir?tab=repositories",
  },
  {
    id: 5,
    name: "Contact",
    icon: PiArrowUpRight,
    to: "https://github.com/sagarmusabbir",
  },
];
