import React from "react";
import { Link } from "react-router-dom";
function Hero() {
  return (
    <div className="container">
      <div className="row mb-5 mt-5 text-center p-5 border-bottom">
        <h1 className="fs-4 text-muted">
          We pioneered the discount broking model in India.
        </h1>
        <h1 className="fs-4 text-muted">
          Now, we are breaking ground with our technology.
        </h1>
      </div>
      <div className="row mt-5 mb-5 p-5">
        <div className="col-2"></div>
        <div className="col-4 about-page-hero-left ">
          <p className="">
            We kick-started operations on the 15th of August, 2010 with the goal
            of breaking all barriers that traders and investors face in India in
            terms of cost, support, and technology. We named the company
            Zerodha, a combination of Zero and "Rodha", the Sanskrit word for
            barrier.
          </p>
          <p className="mt-4">
            Today, our disruptive pricing models and in-house technology have
            made us the biggest stock broker in India.
          </p>
          <p className="mt-4">
            Over 1.6+ crore clients place billions of orders every year through
            our powerful ecosystem of investment platforms, contributing over
            15% of all Indian retail trading volumes.
          </p>
        </div>
        <div className="col-4  about-page-hero-right">
          <p>
            In addition, we run a number of popular open online educational and
            community initiatives to empower retail traders and investors.
          </p>
          <p className="mt-4">
            <Link part="#" to={"#"} style={{ textDecoration: "none" }}>
              {" "}
              Rainmatter
            </Link>
            , our fintech fund and incubator, has invested in several fintech
            startups with the goal of growing the Indian capital markets.
          </p>
          <p className="mt-4">
            And yet, we are always up to something new every day. Catch up on
            the latest updates on our blog or see what the media is saying about
            us or learn more about our business and product philosophies.
          </p>
        </div>
        <div className="col-2"></div>
        <p className="border-bottom mt-5"></p>
      </div>
    </div>
  );
}

export default Hero;
