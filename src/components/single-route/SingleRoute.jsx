"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import star from "@/assets/images/star.svg";
import color1 from "@/assets/images/color-1.svg";
import color2 from "@/assets/images/color-2.svg";
import color3 from "@/assets/images/color-3.svg";
import color4 from "@/assets/images/color-4.svg";
import { IoCartOutline, IoHeartOutline } from "react-icons/io5";
import { FaFacebookF, FaTwitter } from "react-icons/fa";

const SingleRoute = ({ data }) => {
  return (
    <>
      <section className="detail">
        <div className="path">
          <div className="url">
            <Link href={"/"}>Home / </Link>
            <Link href={`/product/${data?.id}`}>Hot Deal / </Link>
            <p>{data?.title}</p>
          </div>
        </div>
        <div className="container">
          <div className="detail__content">
            <div className="detali___left">
              <div className="detail__top">
                <div className="detail__images">
                  <div className="product__image">
                    <Image
                      alt={data?.title}
                      width={375}
                      height={270}
                      src={data.image}
                    />
                  </div>
                  <div className="images__wrapper">
                    {Array(4)
                      .fill("")
                      .map((_, inx) => (
                        <div key={inx} className="image__card">
                          <Image
                            alt={data?.title}
                            width={70}
                            height={70}
                            src={data.image}
                          />
                        </div>
                      ))}
                  </div>
                </div>
                <div className="detail__about">
                  <h4 className="product__title">{data?.title}</h4>
                  <div className="product__rating">
                    <Image
                      alt="Star"
                      width={"100%"}
                      height={"100%"}
                      src={star}
                    />
                    <span>{data?.rating?.count} reviews</span>
                    <a href={`product/${data.id}`}>Submit a review</a>
                  </div>
                  <div className="line"></div>
                  <div className="product__price">
                    <h4>${data.price}</h4>
                    <span>${Math.round(data.price * 1.24)}</span>
                    <p>24% Off</p>
                  </div>
                  <div className="row">
                    <p>Availability:</p>
                    <p>In stock</p>
                  </div>
                  <div className="row">
                    <p>Category:</p>
                    <p>{data?.category}</p>
                  </div>
                  <div className="row">
                    <p>Free shipping</p>
                  </div>
                  <div className="line"></div>
                  <div className="select__color">
                    <p>Select Color:</p>
                    <div className="colors">
                      <Image
                        alt="Color"
                        width={"100%"}
                        height={"100%"}
                        src={color1}
                      />
                      <Image
                        alt="Color"
                        width={"100%"}
                        height={"100%"}
                        src={color2}
                      />
                      <Image
                        alt="Color"
                        width={"100%"}
                        height={"100%"}
                        src={color3}
                      />
                      <Image
                        alt="Color"
                        width={"100%"}
                        height={"100%"}
                        src={color4}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <p>Size</p>
                    <select name="" id="">
                      <option value="xs">XS</option>
                      <option value="sm">SM</option>
                      <option value="lg">LG</option>
                    </select>
                  </div>
                  <div className="line"></div>
                  <div className="add__to__cart">
                    <div className="product__count">
                      <button>-</button>
                      <span>2</span>
                      <button>+</button>
                    </div>
                    <div className="cart__wishes">
                      <button>
                        <IoCartOutline /> Add To Cart
                      </button>
                      <button>
                        <IoHeartOutline />
                      </button>
                    </div>
                  </div>
                  <div className="line"></div>
                  <div className="set">
                    <button style={{ background: "#385C8E" }}>
                      <FaFacebookF />
                      <span>Share on Facebook</span>
                    </button>
                    <button style={{ background: "#03A9F4" }}>
                      <FaTwitter />
                      <span>Share on Twitter</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="detail__bottom">
                <ul>
                  <li>Product Infomation</li>
                  <li>Reviews</li>
                  <li>Another tab</li>
                </ul>
                <div className="line"></div>
                <p>
                  air max are always very comfortable fit, clean and just
                  perfect in every way. just the box was too small and scrunched
                  the sneakers up a little bit, not sure if the box was always
                  this small but the 90s are and will always be one of my
                  favorites.
                </p>
                <p>
                  air max are always very comfortable fit, clean and just
                  perfect in every way. just the box was too small and scrunched
                  the sneakers up a little bit, not sure if the box was always
                  this small but the 90s are and will always be one of my
                  favorites.
                </p>
                <p>
                  air max are always very comfortable fit, clean and just
                  perfect in every way. just the box was too small and scrunched
                  the sneakers up a little bit, not sure if the box was always
                  this small but the 90s are and will always be one of my
                  favorites.
                </p>
              </div>
            </div>
            <div className="detail__right">
              <span className="best">BEST SELLER</span>
              <div className="product__card">
                <div className="product__image">
                  <Image
                    alt={data?.title}
                    width={280}
                    height={240}
                    src={data?.image}
                  />
                </div>
                <Image alt="Star" width={"100%"} height={"100%"} src={star} />
                <div className="price__pro">
                  <h4>{data?.price}</h4>
                  <span>{Math.round(data?.price * 1.24)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleRoute;
