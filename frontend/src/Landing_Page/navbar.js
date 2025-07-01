import React from "react";

export default function NavBar() {
  return (
    <nav class="navbar navbar-expand-lg border-bottom" style={{backgroundColor: "white"}}>
      <div class="container p-2">
        <a class="navbar-brand" to="/">
          <img style={{width: '30%'}} src="media/images/logo.svg" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <form class="d-flex" role="search">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                <a class="nav-link active" aria-current="page" to="/signup">
                    Signup
                </a>
                </li>
                <li class="nav-item">
                <a class="nav-link active" to="/about">
                    About
                </a>
                </li>
                <li class="nav-item">
                <a class="nav-link active" to="/product">
                    Product
                </a>
                </li>
                <li class="nav-item">
                <a class="nav-link active" to="/pricing">
                    Pricing
                </a>
                </li>
                <li class="nav-item">
                <a class="nav-link active" to="/support">
                    Support
                </a>
                </li>
                <li class="nav-item">
                <a class="nav-link active" to="#">
                    <i class="fs-5 mt-1 fa-solid fa-bars"></i>
                </a>
                </li>
            </ul>
          </form>
        </div>
      </div>
    </nav>
  );
}