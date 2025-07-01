import React from "react";

export default function Education() {
  return (
    <div className="container" style={{ marginBottom: 50, marginTop: 200 }}>
      <div className="row">
        <div className="col-6">
          <img src="media/images/education.svg" style={{ width: "75%" }} />
        </div>
        <div className="col-6 p-3">
          <h3 className="fs-4 mb-4">Free and open market education</h3>
          <p className="text-muted mb-3" style={{ width: "80%" }}>
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advance trading.
          </p>
          <a style={{ textDecoration: "none" }} href="">
            Varsity <i class="fa-solid fa-arrow-right-long"></i>
          </a>

          <p className="text-muted mt-5" style={{ width: "80%" }}>
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a style={{ textDecoration: "none" }} href="">
            TradingQ&A <i class="fa-solid fa-arrow-right-long"></i>
          </a>
        </div>
      </div>
    </div>
  );
}