import {
  Bars3Icon,
  GlobeAltIcon,
  HomeIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import {
  GlobeAltIcon as GlobeAltIconSolid,
  HomeIcon as HomeIconSolid,
  UsersIcon as UsersIconSolid,
} from "@heroicons/react/24/solid";
import { ReactElement, memo, useState } from "react";
import { NavLink } from "react-router-dom";
import { twMerge } from "tailwind-merge";

export const Navigation = memo(function Navigation(): ReactElement {
  const [navOpen, setNavOpen] = useState(false);

  const handleClick = () => setNavOpen((state) => !state);

  return (
    <div className="flex h-full w-full items-center">
      {/* Mobile navigation START */}
      <button
        className="flex h-10 w-10 cursor-pointer items-center justify-center rounded hover:bg-fb-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-fb-gray-100 sm:hidden"
        onClick={handleClick}
      >
        <Bars3Icon className="h-7 w-7 text-fb-gray-100" />
      </button>

      <ul
        className={twMerge(
          "fixed bottom-0 left-0 right-0 top-14 bg-fb-gray-700 px-2 py-2 sm:hidden",
          !navOpen && "hidden",
        )}
      >
        {navLinks.map((navLink, i) => (
          <li
            key={i}
            className="flex h-10 items-center px-1 focus-within:bg-fb-gray-500 focus-within:outline focus-within:outline-2 focus-within:outline-fb-gray-100 hover:bg-fb-gray-500"
          >
            <NavLink
              to={navLink.link}
              className={({ isActive }) => {
                const cn =
                  "group flex w-full flex-row items-center focus:outline focus:outline-transparent";
                return isActive ? `active ${cn}` : cn;
              }}
            >
              {navLink.iconActive}
              <span className="w-full pl-2 text-fb-gray-100">
                {navLink.name}
              </span>
            </NavLink>
          </li>
        ))}
      </ul>
      {/* Mobile navigation END */}

      {/* Desktop navigation START*/}
      <ul className="hidden h-full w-full flex-row justify-center gap-x-4 py-1 sm:flex">
        {navLinks.map((navLink, i) => (
          <li key={i} className="relative h-full w-16">
            <NavLink
              to={navLink.link}
              aria-label={navLink.name}
              className={({ isActive }) => {
                const cn =
                  "group flex h-full w-full items-center justify-center rounded hover:bg-fb-gray-500 focus:outline focus:outline-transparent focus-visible:bg-fb-gray-500 focus-visible:outline-2 focus-visible:outline-fb-gray-100";
                return isActive ? `active ${cn}` : cn;
              }}
            >
              {({ isActive }) => (isActive ? navLink.iconActive : navLink.icon)}
            </NavLink>

            {/* Hover tooltip with nav link name */}
          </li>
        ))}
      </ul>
      {/* Desktop navigation END */}
    </div>
  );
});

const navStyles = "h-7 w-7 text-fb-gray-100 group-[.active]:text-fb-blue";

const navLinks = [
  {
    icon: <HomeIcon className={navStyles} />,
    iconActive: <HomeIconSolid className={navStyles} />,
    name: "Główna",
    link: "/",
  },
  {
    icon: <UsersIcon className={navStyles} />,
    iconActive: <UsersIconSolid className={navStyles} />,
    name: "Znajomi",
    link: "/friends",
  },
  {
    icon: <GlobeAltIcon className={navStyles} />,
    iconActive: <GlobeAltIconSolid className={navStyles} />,
    name: "Społeczność",
    link: "/community",
  },
];
