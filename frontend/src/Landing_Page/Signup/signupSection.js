import { useState } from "react";

export default function SignupSec() {
  let [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3002/signup", {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        }, body: JSON.stringify(user)
      });

      const data = await response.json();
      const { message, success, email } = data;

      if(success) {
        localStorage.setItem('Email', email);
        console.log(message);
      }
    } catch (err) {
      console.error({ err: err.message })
    }
  };

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
                type="email"
                name="email"
                placeholder="Enter your Email"
                style={{ height: "45px" }}
                onChange={handleChange}
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
                type="password"
                name="password"
                placeholder="Enter your Password"
                style={{ height: "45px" }}
                onChange={handleChange}
              />

              <span className="d-flex justify-content-center">
                <button
                  className="btn btn-primary w-25 fs-4"
                  type="submit"
                  onClick={(e) => handleSubmit(e)}
                >
                  Signup
                </button>
              </span>
            </form>
            <p
              className="mt-4 text-muted"
              style={{ fontSize: "0.85rem", marginLeft: "5.2rem" }}
            >
              By proceeding, you agree to the Zerodha{" "}
              <a style={{ textDecoration: "none" }} href="#">
                terms
              </a>{" "}
              &{" "}
              <a style={{ textDecoration: "none" }} href="#">
                privacy policy
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
