import React from "react";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light container ">
      <div className="container-fluid">
        <h3 className="navbar-brand mr-2" >
          nullBrains.
        </h3>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="bi bi-list"></i>{" "}
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active text-decoration-none" aria-current="page" href="/#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-decoration-none" href="/#">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-decoration-none" href="/#">
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-decoration-none" href="/#">
                Contract
              </a>
            </li>
            <li className="nav-item">
              <input
                className="form-control me-2 border"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </li>
          </ul>
          <form className="m-3">
            <button className="btn btn-outline" type="submit">
              Sign In
            </button>
            <button className="btn btn-default" type="submit">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
