import {
  Button,
  DarkThemeToggle,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";

import NavLink from "../../app/navlink";

import Link from "next/link";
import { SiGithub, SiUpwork } from "react-icons/si";

import {
  PiArrowUpRightBold,
  PiArrowUpRightFill,
  PiDownloadBold,
} from "react-icons/pi";
import { Bar, Moon, Sun } from "../icons";

export function HeaderNavigation() {
  return (
    <Navbar>
      <NavbarBrand href="/">
        <img
          src="/logo.svg"
          className="mr-3 h-6 sm:h-9 "
          alt="nomad-flowbitenext-starter"
        />

        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Nomad Starter
        </span>
      </NavbarBrand>
      <div className="flex md:order-2 gap-2">
        <DarkThemeToggle iconLight={Moon} iconDark={Sun} />
        <Link href="#" className="hidden md:block">
          <Button size="sm" color="light">
            Browse
            <SiGithub className="ml-2 self-center w-4 h-4" />
            <PiArrowUpRightFill className="ml-1 self-center w-3 h-3" />
          </Button>
        </Link>
        <Link href="#" className="hidden md:block">
          <Button color="dark" size="sm">
            Hire
            <SiUpwork className="ml-2 self-center w-4 h-4" />
            <PiArrowUpRightFill className="ml-1 self-center w-3 h-3" />
          </Button>
        </Link>

        <NavbarToggle barIcon={Bar} />
      </div>
      <NavbarCollapse className="h-screen sm:h-auto items-center">
        <NavLink />

        <div className="md:hidden my-4 ">
          <Link href="#">
            <Button size="sm" color="light" className="w-full mb-2">
              Browse
              <SiGithub className=" self-center w-4 h-4 ml-2" />
              <PiArrowUpRightFill className="self-center w-2 h-2" />
            </Button>
          </Link>
          <Link href="#">
            <Button color="dark" size="sm" className="w-full">
              Hire
              <SiUpwork className=" self-center w-4 h-4 ml-2" />
              <PiArrowUpRightFill className="self-center w-2 h-2" />
            </Button>
          </Link>
        </div>
      </NavbarCollapse>
    </Navbar>
  );
}
