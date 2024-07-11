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
import { SiGithub, SiUpwork, SiWhatsapp } from "react-icons/si";

import {
  PiArrowUpRight,
  PiArrowUpRightBold,
  PiArrowUpRightFill,
  PiDownloadBold,
} from "react-icons/pi";
import { Bar, Logo, Moon, Sun } from "../icons";
import Image from "next/image";

export function HeaderNavigation() {
  return (
    <Navbar>
      <NavbarBrand href="/">
        {/* <Image
          src="/drawing.svg"
          className="mr-2"
          alt="products-of-bangladesh"
          width={129}
          height={32}
        /> */}
        <Logo className="mr-2" />

        {/* <pre className="self-center whitespace-nowrap text-lg/3 font-semibold dark:text-white tracking-wider ">
          PRODUCTS
          <br />
          <span className="text-[0.5rem] font-thin  italic leading-none  tracking-tighter">
            of&nbsp;
          </span>
          <span className="text-sm/none  font-light bg-gradient-to-r from-green-600 from-30% via-red-600 via-50% to-green-600 to-70% text-transparent bg-clip-text tracking-tight">
            BANGLADESH
          </span>
        </pre> */}
      </NavbarBrand>
      <div className="flex md:order-2 gap-2">
        <DarkThemeToggle iconLight={Moon} iconDark={Sun} />

        <Link href="https://wa.me/8801765692886" className="hidden md:block">
          <Button color="dark" size="sm">
            Chat
            <SiWhatsapp className="ml-2 self-center w-4 h-4" />
            <PiArrowUpRight className="ml-1 self-start w-2 h-2" />
          </Button>
        </Link>

        <NavbarToggle barIcon={Bar} />
      </div>
      <NavbarCollapse className="h-screen sm:h-auto items-center">
        <NavLink />

        <div className="md:hidden my-4 ">
          <Link href="https://wa.me/8801765692886">
            <Button color="dark" size="sm" className="w-full">
              Chat
              <SiWhatsapp className=" self-center w-4 h-4 ml-2" />
              <PiArrowUpRight className="self-start w-2 h-2 ml-1" />
            </Button>
          </Link>
        </div>
      </NavbarCollapse>
    </Navbar>
  );
}
