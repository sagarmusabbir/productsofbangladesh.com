import {
  PiArrowDown,
  PiArrowDownFill,
  PiArrowDownRight,
  PiArrowUpRight,
  PiArrowUpRightFill,
  PiArticle,
  PiHouse,
  PiHouseBold,
  PiLightbulbFilament,
  PiUser,
  PiUsers,
  PiUserSound,
} from "react-icons/pi";
import { LinkItem } from "./lib/types";
import { SiGithub } from "react-icons/si";

export const links: LinkItem[] = [
  {
    id: 0,
    name: "About Us",
    to: "/#",
    icon: PiUsers,
  },
  { id: 1, name: "Solutions", to: "/#", icon: PiLightbulbFilament },
  { id: 2, name: "Blog", to: "/#", icon: PiArticle, external: PiArrowUpRight },

  {
    id: 3,
    name: "Contact",
    icon: PiUserSound,

    to: "/#",
  },
];
