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
import { AiOutlineUser } from "react-icons/ai";
import { GoSearch } from "react-icons/go";
import { IoMdNotificationsOutline } from "react-icons/io";
import { useSelector } from "react-redux";

const Navbar = () => {
  const pathname = usePathname();
  // const [shrink, setShrink] = useState(false);
  const wishes = useSelector((s) => s.heart.value);
  const cart = useSelector((s) => s.cart.value);
  const token = useSelector((state) => state.token.value);

  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     if (window.scrollY >= 70.19) {
  //       setShrink(true);
  //     } else {
  //       setShrink(false);
  //     }
  //   });
  // }, [window.scrollY]);

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
      <div className={`top__navbar`}>
        <div className="container">
          <div className="header__top">
            <div className="selects">
              <select name="" id="">
                <option value="eng">EN</option>
                <option value="uzb">UZ</option>
                <option value="rus">RU</option>
              </select>
              <select name="" id="">
                <option value="eng">USD</option>
                <option value="uzb">SUM</option>
              </select>
            </div>
            <div className="links">
              <Link href={token ? " /admin" : "/login"}>
                <AiOutlineUser />
              </Link>
              <Link className="count__item" href={"/wishlist"}>
                <IoHeartOutline />
                <sup>{wishes.length}</sup>
              </Link>
              <Link className="count__item" href={"/cart"}>
                <IoCartOutline />
                <sup>{cart.length}</sup>
              </Link>
              <Link href={"/"}>
                <GoSearch />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* ${shrink ? "show" : ""} */}
      <div className={`fixed `}>
        <div className="container ">
          <nav className={`nav  `}>
            <Link href={"/"}>
              <Image alt="Logo" width={134} height={44} src={logo} />
            </Link>
            <ul className={`nav__links`}>{navLinks}</ul>
          </nav>
        </div>
      </div>
      <div className="container">
        <div className={`navbar  `}>
          <div className="serach__input">
            <input type="text" placeholder="Search Product" />
            <IoSearch className="serach__icon" />
          </div>
          <div className="nav__links">
            <Link className="count__item" href={`/wishlist`}>
              <IoHeartOutline />
              <sup>{wishes.length}</sup>
            </Link>
            <Link href={`/notification`}>
              <IoMdNotificationsOutline />
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
          <Link className="count__item" href={"/cart"}>
            <IoCartOutline />
            <span>Cart</span>
            <sup>{cart.length}</sup>
          </Link>
          <Link href={"/offer"}>
            <MdOutlineLocalOffer />
            <span>Offer</span>
          </Link>
          <Link href={token ? " /admin" : "/login"}>
            <FaRegUser />
            <span>Account</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
