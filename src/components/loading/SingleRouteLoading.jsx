import React, { memo } from "react";

const SingleRouteLoading = () => {
  return (
    <section className="single__route__loading container">
      <div className="single__route__content">
        <div className="main">
          <div className="prod">
            <div className="product___img skeleton__anime"></div>
            <div className="images">
              <div className="im skeleton__anime"></div>
              <div className="im skeleton__anime"></div>
              <div className="im skeleton__anime"></div>
              <div className="im skeleton__anime"></div>
            </div>
          </div>
          <div className="about">
            <div className="title skeleton__anime"></div>
            <div className="title title-1 skeleton__anime "></div>
            <div className="description description3 skeleton__anime"></div>
            <div className="line"></div>
            <div className="price__card">
              <div className="price skeleton__anime"></div>
              <div className="price skeleton__anime"></div>
            </div>
            <div className="price__card">
              <div className="price skeleton__anime"></div>
              <div className="price skeleton__anime"></div>
            </div>
            <div className="price__card">
              <div className="price skeleton__anime"></div>
              <div className="price skeleton__anime"></div>
            </div>
            <div className="line"></div>
            <div className="description description2 skeleton__anime"></div>
            <div className="description description1 skeleton__anime"></div>
            <div className="line"></div>
            <div className="price__card">
              <div className="basket skeleton__anime"></div>
              <div className="heart skeleton__anime"></div>
            </div>
            <div className="line"></div>
            <div className="price__card">
              <div className="but skeleton__anime"></div>
              <div className="but skeleton__anime"></div>
            </div>
          </div>
        </div>
        <div className="card skeleton__anime"></div>
      </div>
    </section>
  );
};

export default memo(SingleRouteLoading);
