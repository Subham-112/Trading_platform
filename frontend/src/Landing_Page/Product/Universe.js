export default function Universe() {
  return (
    <div className="container">
      <div className="col text-center">
        <p style={{ marginBottom: "7rem", fontSize: "1.4rem" }}>
          Want to know more about our technology stack? Check out the&nbsp;
          <a href="#">Zerodha.tech</a>
          &nbsp;blog.
        </p>
        <h1 style={{ margin: "2rem 0", fontSize: "2.2rem" }}>
          The Zerodha Universe
        </h1>
        <p style={{ fontSize: "1.1rem", marginBottom: "4rem" }}>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="row mb-5">
          <div
            className="col-4 bx"
            style={{ paddingLeft: "8rem", marginTop: "-0.5rem" }}
          >
            <a href="#">
              <img
                src="media/images/zerodhaFundhouse.png"
                alt="Zerodha Fundhouse"
                style={{ width: "200px" }}
              />
              <p style={{ width: "300px" }}>
                Our asset management venture <br /> that is creating simple and
                transparent index funds to help you save for your goals.
              </p>
            </a>

            <a href="#">
              <img
                src="media/images/streakLogo.png"
                alt="Zerodha Fundhouse"
                style={{ width: "200px" }}
              />
              <p style={{ width: "300px" }}>
                Systematic trading platform <br /> that allows you to create and
                backtest strategies without coding.
              </p>
            </a>
          </div>

          <div className="col-4 bx" style={{ marginTop: "1rem" }}>
            <a href="#">
              <img
                src="media/images/sensibullLogo.svg"
                alt="Zerodha Fundhouse"
                style={{ width: "220px" }}
              />
              <p style={{ width: "350px" }}>
                Options trading platform that lets you <br /> create strategies,
                analyze positions, and examine data points like open interest,
                FII/DII, and more.
              </p>
            </a>

            <a href="#">
              <img
                src="media/images/smallcaseLogo.png"
                alt="Zerodha Fundhouse"
                style={{ width: "220px" }}
              />
              <p style={{ width: "300px", marginTop: "1rem" }}>
                Thematic investing platform <br /> that helps you invest in
                diversified <br /> baskets of stocks on ETFs.
              </p>
            </a>
          </div>

          <div
            className="col-4 bx"
            style={{ paddingRight: "8rem", marginTop: "-0.5rem" }}
          >
            <a href="#">
              <img
                src="media/images/tijori.svg"
                alt="Zerodha Fundhouse"
                style={{ width: "150px" }}
              />
              <p style={{ width: "300px" }}>
                Investment research platform <br /> that offers detailed
                insights on stocks, sectors, supply chains, and more.
              </p>
            </a>

            <a href="#">
              <img
                src="media/images/dittoLogo.png"
                alt="Zerodha Fundhouse"
                style={{ width: "130px" }}
              />
              <p style={{ width: "300px" }}>
                Personalized advice on life <br /> and health insurance. No spam{" "}
                <br /> and no mis-selling.
              </p>
            </a>
          </div>
        </div>

        <button
          className="fs-5 btn btn-primary mt-3 mb-5"
          style={{
            width: "20%",
            height: 50,
            margin: "0 auto",
            borderRadius: 5,
            border: "none",
            fontWeight: 600,
            color: "white",
          }}
        >
          Sign Up for free
        </button>
      </div>
    </div>
  );
}
