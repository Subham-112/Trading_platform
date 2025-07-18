import React from "react";
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav class="navbar navbar-expand-lg border-bottom" style={{backgroundColor: "white", position: 'sticky'}}>
      <div class="container p-2">
        <Link class="navbar-brand" to="/">
          <img style={{width: '23%', marginLeft: '6.6rem'}} src="media/images/logo.svg" />
        </Link>
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
        <div class="collapse navbar-collapse" style={{marginLeft: '-6.4rem'}} id="navbarSupportedContent">
          <form class="d-flex" role="search">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/signup">
                    Signup
                </Link>
                </li>
                <li class="nav-item">
                <Link class="nav-link active" to="/about">
                    About
                </Link>
                </li>
                <li class="nav-item">
                <Link class="nav-link active" to="/product">
                    Product
                </Link>
                </li>
                <li class="nav-item">
                <Link class="nav-link active" to="/pricing">
                    Pricing
                </Link>
                </li>
                <li class="nav-item">
                <Link class="nav-link active" to="/support">
                    Support
                </Link>
                </li>
                <li class="nav-item">
                <Link class="nav-link active" to="#">
                    <i class="fs-5 mt-1 fa-solid fa-bars"></i>
                </Link>
                </li>
            </ul>
          </form>
        </div>
      </div>
    </nav>
  );
}