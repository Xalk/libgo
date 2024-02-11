import { FaCompass } from "react-icons/fa";
import { FaChartBar } from "react-icons/fa6";
import { ImPencil2 } from "react-icons/im";

export const headerNavLinks = [
  { href: "/", title: "Home", icon: <FaCompass /> },
  { href: "/browse", title: "Browse", icon: <FaCompass /> },
  { href: "/ranking", title: "Ranking", icon: <FaChartBar /> },
  { href: "/create", title: "Create", icon: <ImPencil2 /> }
];
