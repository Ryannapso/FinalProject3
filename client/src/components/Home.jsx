import React from "react";
import About from "./About";
import Contact from "./Contact";
import Services from "./Services";
import { NavLink } from "react-router-dom";

function home() {
  return (
    <div>
      <section id="home">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <h1 className="display-4 fw-bolder mb-4 text-center text-white">
                PC shop
              </h1>
              <p className="lead text-center fs-4 mb-5 text-white">
                we specialize in computers , Mobile phones and gaming consoles, sales and repair.
              </p>
              <div className="buttons d-flex justify-content-center">
                <NavLink
                  to="/contact"
                  className="btn btn-light me-2 rounded-pill px-4 py-2"
                >
                  Contact Us
                </NavLink>
                <NavLink
                  to="/service"
                  className="btn btn-outline-light rounded-pill px-4 py-2"
                >
                  Our Services
                </NavLink>
              </div>
              <div className=" d-flex justify-content-center">
              <div className="col-md-6">
                <img
                  src="/assets/gameingpc1.webp"
                  alt="About"
                  className="w-75 mt-5"
                />
              </div>
              <div className="col-md-6">
                <img
                  src="/assets/apple2.png"
                  alt="About"
                  className="w-75 mt-5"
                />
              </div>
              <div className="col-md-6">
                <img
                  src="/assets/xbox5.png"
                  alt="About"
                  className="w-75 mt-5"
                />
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <About />
      <Services />
      <Contact />
    </div>
  );
}

export default home;
