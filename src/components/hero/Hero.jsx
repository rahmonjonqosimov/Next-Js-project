import React, { memo, useState } from "react";

const Hero = () => {
  const [isLoading, setIsLoading] = useState(true);
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
