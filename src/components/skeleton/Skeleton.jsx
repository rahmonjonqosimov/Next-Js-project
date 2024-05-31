import React, { memo } from "react";

const Skeleton = () => {
  return (
    <div className="product__wrapper">
      {Array(8)
        .fill("")
        .map((_, inx) => (
          <div key={inx} className="product__card">
            <div className="product__img__skeleton  skeleton__anime"></div>
            <div className="product__title__skeleton skeleton__anime"></div>
            <div className="product__rating__skeleton skeleton__anime"></div>
            <div className="product__price__skeleton skeleton__anime"></div>
            <div className="product__price__skeleton product__price__skeleton-1 skeleton__anime"></div>
          </div>
        ))}
    </div>
  );
};

export default memo(Skeleton);
