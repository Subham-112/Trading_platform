export default function SignupSec() {
  return (
    <div className="container">
      <div className="row">
        <div
          className="col-6 mt-5"
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <img
            src="media/images/account_open.svg"
            alt="account_open"
            style={{
              width: "500px",
            }}
          />
        </div>
        <div className="col-6 mt-5 p-3">
          <div className="row">
            <h2 style={{ marginLeft: "5.2rem" }}>Signup now</h2>
            <p style={{ marginLeft: "5.2rem" }}>
              Or track your existing application
            </p>

            <form className="d-flex flex-column justify-content-center gap-2">
              <label
                className="fs-4"
                htmlFor="email"
                style={{ marginLeft: "5.2rem" }}
              >
                Email
              </label>
              <input
                className="w-75 fs-5 mb-3 align-self-center text-center border border-black rounded"
                name="email"
                placeholder="Enter your Email"
                style={{ height: "45px" }}
              />

              <label
                className="fs-4"
                htmlFor="password"
                style={{ marginLeft: "5.2rem" }}
              >
                Password
              </label>
              <input
                className="w-75 fs-5 mb-3 align-self-center text-center border border-black rounded"
                name="password"
                placeholder="Enter your Password"
                style={{ height: "45px" }}
              />

              <span className="d-flex justify-content-center">
                <button className="btn btn-primary w-25 fs-4">Signup</button>
              </span>
            </form>
            <p className="mt-4 text-muted" style={{ fontSize: '0.85rem',marginLeft: "5.2rem" }}>
              By proceeding, you agree to the Zerodha <a style={{textDecoration: 'none'}} href="#">terms</a> &{" "}
              <a style={{textDecoration: 'none'}} href="#">privacy policy</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
