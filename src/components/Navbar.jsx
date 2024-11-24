import React, { useState, useEffect } from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
  Switch,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { AddService } from "./AddService";
import { useTheme } from "../ThemeContext.jsx";

function NavList() {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a
          href="#"
          className="flex items-center hover:text-yellow-700 transition-colors"
        >
          LogIn
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a
          href="#"
          className="flex items-center hover:text-yellow-700 transition-colors"
        >
          SignUp
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a
          href="#"
          className="flex items-center hover:text-yellow-700 transition-colors"
        >
          <AddService />
        </a>
      </Typography>
    </ul>
  );
}

export function NavbarSimple() {
  const { darkMode, toggleTheme } = useTheme();
  const [openNav, setOpenNav] = useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    // Apply the dark mode class based on the state
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [darkMode]);

  return (
    <Navbar className="bg-[#f6f6f6] border-none w-full px-6 py-3 shadow-sm rounded-sm dark:bg-[#135D66]">
      <div className="flex items-center justify-between text-blue-gray-900 dark:text-gray-200">
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5"
        >
          LOGO
        </Typography>
        <div className="hidden lg:flex items-center">
          <NavList />
          {/* Dark Mode Toggle */}
          <div className="ml-6 flex items-center">
            <Typography variant="small" className="mr-2">
              {darkMode ? "Dark" : "Light"}
            </Typography>
            <Switch color="yellow" onChange={toggleTheme} checked={darkMode} />
          </div>
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
        {/* Dark Mode Toggle for Mobile */}
        <div className="flex items-center justify-between px-4 mt-4 lg:hidden">
          <Typography variant="small" className="mr-2">
            {darkMode ? "Dark" : "Light"}
          </Typography>
          <Switch color="yellow" onChange={toggleTheme} checked={darkMode} />
        </div>
      </Collapse>
    </Navbar>
  );
}
