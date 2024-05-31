import React, { memo } from "react";
import img1 from "@/assets/images/home-banner-1.png";
import img2 from "@/assets/images/home-banner-2.png";
import img3 from "@/assets/images/home-banner-3.png";
import Image from "next/image";

const Banners = () => {
  return (
    <div className="banners">
      <div className="container">
        <div className="banners__wrapper">
          <div className="banners__card">
            <Image alt="Banner-image" width={417} height={358} src={img1} />
            <div className="banner__outline"></div>
            <div className="banner__item__text">
              <h4 className="banner__item__title">
                FS - QUILTED MAXI CROSS BAG
              </h4>
              <div className="banner__item__price">
                <s>$534,33</s>
                <span>24% Off</span>
                <h5>$299,43</h5>
              </div>
            </div>
          </div>
          <div className="banners__card">
            <Image alt="Banner-image" width={417} height={358} src={img2} />
            <div className="banner__outline"></div>
            <div className="banner__item__text">
              <h4 className="banner__item__title">
                FS - Nike Air Max 270 React...
              </h4>
              <div className="banner__item__price">
                <s>$534,33</s>
                <span>24% Off</span>
                <h5>$299,43</h5>
              </div>
            </div>
          </div>
          <div className="banners__card">
            <Image alt="Banner-image" width={417} height={358} src={img3} />
            <div className="banner__outline"></div>
            <div className="banner__item__text">
              <h4 className="banner__item__title">
                FS - Nike Air Max 270 React...
              </h4>
              <div className="banner__item__price">
                <s>$534,33</s>
                <span>24% Off</span>
                <h5>$299,43</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Banners);
