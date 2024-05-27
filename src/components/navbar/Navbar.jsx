"use client";
import React, { useEffect, useState } from "react";
import logo from "@/assets/images/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  IoSearch,
  IoHeartOutline,
  IoCartOutline,
  IoHomeOutline,
} from "react-icons/io5";
import { MdOutlineLocalOffer } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";

const Navbar = () => {
  const pathname = usePathname();
  const [menu, setMenu] = useState(false);
  const [shrink, setShrink] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      setShrink(true);
    } else {
      setShrink(false);
    }
  });

  menu
    ? (document.querySelector("body").style.overflow = "hidden")
    : (document.querySelector("body").style.overflow = "auto");

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
        <nav className={`nav ${shrink ? "shrink" : ""} `}>
          <Link href={"/"}>
            <Image alt="Logo" width={134} height={44} src={logo} />
          </Link>
          <ul className={`nav__links ${menu ? "show" : ""}`}>{navLinks}</ul>
          <div
            onClick={() => setMenu((p) => !p)}
            className={`menu ${menu ? "show" : ""}`}
          >
            <div className="menu__item"></div>
            <div className="menu__item"></div>
            <div className="menu__item"></div>
          </div>
        </nav>

        <div className={`navbar ${shrink ? "shrink" : ""} `}>
          <div className="serach__input">
            <input type="text" placeholder="Search Product" />
            <IoSearch className="serach__icon" />
          </div>
          <div className="nav__links">
            <Link href={`/wishes`}>
              <IoHeartOutline />
            </Link>
            <Link href={`/cart`}>
              <IoCartOutline />
            </Link>
          </div>
        </div>
        <div className="bottom__menu">
          <Link href={"/"}>
            <IoHomeOutline />
            <span> Home</span>
          </Link>
          <Link href={"/explore"}>
            <IoSearch />
            <span>Explore</span>
          </Link>
          <Link href={"/cart"}>
            <IoCartOutline />
            <span>Cart</span>
          </Link>
          <Link href={"/offer"}>
            <MdOutlineLocalOffer />
            <span>Cart</span>
          </Link>
          <Link href={"/register"}>
            <FaRegUser />
            <span>Account</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
