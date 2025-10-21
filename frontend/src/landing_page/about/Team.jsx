import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row text-center ">
        <h1 className="fs-4 ">People</h1>
      </div>
      <div className="row">
        <div className="col-2"></div>
        <div className="col-4 mt-5">
          <img
            src=".\media\images\nithinKamath.jpg"
            className=" rounded-circle"
            alt="CEO Nithin Kamath"
            style={{ width: "70%", marginLeft: "3rem" }}
          />
          <h5 className="mt-3 text-center">Nithin Kamath</h5>
          <p className="text-center text-muted">Founder & CEO</p>
        </div>
        <div className="col-5 mt-5">
          <p className="lh-lg">
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on{" "}
            <a href="" className="text-decoration-none">
              Homepage
            </a>{" "}
            /{" "}
            <a href="" className="text-decoration-none">
              TradingQnA
            </a>{" "}
            /{" "}
            <a href="" className="text-decoration-none">
              Twitter
            </a>
          </p>
        </div>
        <div className="col-1"></div>
      </div>
    </div>
  );
}

export default Team;
