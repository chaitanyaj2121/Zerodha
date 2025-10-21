import React from "react";

function Pricing() {
  return (
    <>
      <div className="container p-5">
        <div className="row">
          <div className="col-4">
            <h1>Unbeatable pricing</h1>
            <p>
              We pioneered the concept of discount broking and price
              transparency in India. Flat fees and no hidden charges.
            </p>
            <a href="" style={{ textDecoration: "none" }}>
              See Pricing <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
          <div className="col-1"></div>
          <div className="col-2">
            <img src=".\media\images\pricing0.svg" alt="zero imagage" />
            <p>Free account opening</p>
          </div>
          <div className="col-2">
            <img src=".\media\images\pricing0.svg" alt="zero imagage" />
            <p>Free equity delivery and direct mutual funds</p>
          </div>
          <div className="col-2">
            <img
              src="https://zerodha.com/static/images/other-trades.svg"
              alt="20 image"
            />
            <p>intraday and F&O</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pricing;
