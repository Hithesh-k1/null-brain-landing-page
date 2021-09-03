import React from "react";

export default function Footer() {
  return (
    <div>
      <div className="container">
        <footer className="py-3 my-4">
          <ul className="nav justify-content-center ali">
            <li className="nav-item">
              <a href="/#" className="nav-link px-2 text-muted text-decoration-none">
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="/#" className="nav-link px-2 text-muted text-decoration-none">
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a href="/#" className="nav-link px-2 text-muted text-decoration-none">
                Team
              </a>
            </li>
            <li className="nav-item">
              <a href="/#" className="nav-link px-2 text-muted text-decoration-none">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a href="/#" className="nav-link px-2 text-muted text-decoration-none">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a href="/#" className="nav-link px-2 text-muted text-decoration-none">
                Terms
              </a>
            </li>
          </ul>
          <ul className="nav justify-content-center pb-2 mb-2">
            <li className="nav-item">
              <a href="/#" className="nav-link px-2 text-muted text-decoration-none">
                <i className="bi bi-facebook"></i>{" "}
              </a>
            </li>
            <li className="nav-item">
              <a href="/#" className="nav-link px-2 text-muted text-decoration-none">
                <i className="bi bi-instagram"></i>{" "}
              </a>
            </li>
            <li className="nav-item">
              <a href="/#" className="nav-link px-2 text-muted text-decoration-none">
                <i className="bi bi-twitter"></i>{" "}
              </a>
            </li>
            <li className="nav-item">
              <a href="/#" className="nav-link px-2 text-muted text-decoration-none">
                <i className="bi bi-github"></i>
              </a>
            </li>
            
          </ul>
          <p className="text-center text-muted text-decoration-none">&copy; 2021 Company, Inc</p>
        </footer>
      </div>
    </div>
  );
}
