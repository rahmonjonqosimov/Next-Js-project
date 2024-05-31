import React, { memo } from "react";

const Hero = () => {
  return (
    <section className="home__hero">
      <div className="container">
        <div className="hero__content">
          <h1 className="hero__title">Super Flash Sale 50% Offs</h1>
        </div>
      </div>
    </section>
  );
};

export default memo(Hero);
