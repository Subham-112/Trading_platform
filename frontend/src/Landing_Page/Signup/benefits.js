export default function Benefits() {
  return (
    <div className="container" style={{ marginTop: "7rem" }}>
      <div className="row">
        <div className="col ps-5">
          <span className="h-100 d-flex flex-column justify-content-center align-items-center gap-5">
            <img
              width="350px"
              src="/media/images/acop-benefits.svg"
              alt="Benefit"
            />
            <h3>Benefits of opening a Zerodha demat account</h3>
          </span>
        </div>
        <div className="col">
          <span style={{ display: "block", marginBottom: "3rem" }}>
            <h4 style={{ marginBottom: "1.5rem" }}>Unbeatable pricing</h4>
            <p className="text-muted" style={{ fontSize: "1.1rem", width: '80%' }}>
              Zero charges for equity & mutual fund investments. Flat ₹20 fees
              for intraday and F&O trades.
            </p>
          </span>

          <span style={{ display: "block", marginBottom: "3rem" }}>
            <h4 style={{ marginBottom: "1.5rem" }}>Best investing experience</h4>
            <p className="text-muted" style={{ fontSize: "1.1rem", width: '80%' }}>
              Simple and intuitive trading platform with an easy-to-understand user interface.
            </p>
          </span>

          <span style={{ display: "block", marginBottom: "3rem" }}>
            <h4 style={{ marginBottom: "1.5rem" }}>No spam or gimmicks</h4>
            <p className="text-muted" style={{ fontSize: "1.1rem", width: '80%' }}>
              Committed to transparency — no gimmicks, spam, "gamification", or intrusive push notifications.
            </p>
          </span>

          <span style={{ display: "block", marginBottom: "3rem" }}>
            <h4 style={{ marginBottom: "1.5rem" }}>The Zerodha universe</h4>
            <p className="text-muted" style={{ fontSize: "1.1rem", width: '80%' }}>
              More than just an app — gain free access to the entire ecosystem of our partner products.
            </p>
          </span>
        </div>
      </div>
    </div>
  );
}
