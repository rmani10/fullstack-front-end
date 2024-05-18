import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Assessment Portal
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <Link to="/">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
              </Link>

              <Link to="/createAssessment">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    Create Assessment
                  </a>
                </li>
              </Link>

              <Link to="/viewAssessment">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    View Assessment
                  </a>
                </li>
              </Link>
            </ul>
          </div>

          <Link className="btn btn-outline-light" to="/addQuestion">
            Add question
          </Link>
        </div>
      </nav>
    </div>
  );
}
