"use client";
import React from "react";
import logo from "@/assets/images/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const navItems = [
    {
      id: 1,
      title: "Home",
      url: "/",
    },
    {
      id: 2,
      title: "BAGS",
      url: "/bags",
    },
    {
      id: 3,
      title: "SNEAKERS",
      url: "/sneakers",
    },
    {
      id: 4,
      title: "BELT",
      url: "/belt",
    },
    {
      id: 5,
      title: "CONTACT",
      url: "/contact",
    },
  ];
  const navLinks = navItems?.map((el) => (
    <li key={el.id}>
      <Link
        style={{ color: `${pathname === el.url ? "#40bfff" : "#262626"}` }}
        href={el.url}
      >
        {el.title}
      </Link>
      <div
        style={{ transform: `scaleX(${pathname === el.url ? "1" : "0"})` }}
        className="line"
      ></div>
    </li>
  ));
  return (
    <section className="header">
      <div className="container">
        <nav className="nav">
          <Link href={"/"}>
            <Image alt="Logo" width={134} height={44} src={logo} />
          </Link>
          <ul className="nav__links">{navLinks}</ul>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
