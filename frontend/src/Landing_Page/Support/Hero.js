import "../../styles/support.css";

export default function SupportHero() {
  return (
    <div className="supp-hero">
      <div className="hero-ii">
        <div className="col-on">
          <h4 style={{ fontSize: "1.6rem", marginBottom: "3rem" }}>
            Support Portal
          </h4>
          <h4
            style={{ width: "95%", fontSize: "1.6rem", marginBottom: "2rem" }}
          >
            Search for an answer or browse help topics to create a ticket
          </h4>
          <span className="hero-inp">
            <input placeholder="Eg: how do i activate F&O, why is my order getting rejected ..." />
            <i className="fa-solid fa-magnifying-glass"></i>
          </span>
          <div className="link-row-i">
            <a
              style={{
                color: "white",
                fontSize: "1.1rem",
                textDecoration: "none",
                borderBottom: "1px solid white",
                paddingBottom: "5px",
              }}
              href="#"
            >
              Track account opening
            </a>
            <a
              style={{
                color: "white",
                fontSize: "1.1rem",
                textDecoration: "none",
                borderBottom: "1px solid white",
                paddingBottom: "5px",
              }}
              href="#"
            >
              Track segment activation
            </a>
            <a
              style={{
                color: "white",
                fontSize: "1.1rem",
                textDecoration: "none",
                borderBottom: "1px solid white",
                paddingBottom: "5px",
              }}
              href="#"
            >
              Intraday margins
            </a>
          </div>
          <div className="link-row-ii">
            <a
              style={{
                color: "white",
                fontSize: "1.1rem",
                textDecoration: "none",
                borderBottom: "1px solid white",
                paddingBottom: "5px",
              }}
              href="#"
            >
              Kite user manual
            </a>
          </div>
        </div>
        <div className="col-tw">
          <h6>
            <a style={{ color: "white", fontSize: '1.1rem',fontWeight: 400 }} href="#">
              Track Ticket
            </a>
          </h6>
          <h4>Featured</h4>
          <ol>
            <li typeof="number">
              <a style={{ color: "white" }} href="#">
                Quarterly Settlement of Funds - July 2025
              </a>
            </li>
            <li typeof="number">
              <a style={{ color: "white" }} href="#">
                Exclusion of F&O contracts on 8 securities from <br /> August 29, 2025
              </a>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}
