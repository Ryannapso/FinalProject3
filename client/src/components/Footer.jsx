import React from "react";


const Footer = () => {
  return (
    <div>
      <footer className=" footer text-white" >
        <div className="container">
          <footer className="py-5">
            <div className="row">
              <div className="col-2">
                <h5>Section</h5>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2">
                    <a
                      to="#https://wa.me/0508536383"
                      className="nav-link p-0 text-white"
                    >
                      Home
                      </a>
                  </li>

                  <li className="nav-item mb-2">
                    <a to="#" className="nav-link p-0 text-white">
                      Services
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a to="#" className="nav-link p-0 text-white">
                      contact
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a to="/about" className="nav-link p-0 text-white">
                      About
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-5 offset-5">
                <form>
                  
                  <i className="fa fa-whatsapp  fa-4x mb-2 fa-align-center"></i>
                  <h5>Subscribe to our whatsapp</h5>
                  <p>Monthly digest of whats new and exciting from us.</p>
                  <div className="d-flex w-150 gap-1">
                    <label
                      htmlFor="newsletter1"
                      className="visually-hidden"
                    ></label>
                    <input
                      id="newsletter1"
                      type="text"
                      className="form-control"
                      placeholder="Name"
                    />
                    <input
                      id="newsletter1"
                      type="phone"
                      className="form-control"
                      placeholder="phone"
                    />
                    <button
                      className="btn btn-primary rounded-pill px-4"
                      type="button"
                    >
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div className="d-flex justify-content-between pt-4 mt-4 border-top">
              <p>Moshe Maman KAKI</p>
              <ul className="list-unstated d-flex">
                <li className="ms-3">
                  <a className="link-light" to="#">
                    <i className="fa fa-facebook fa-2x"></i>
                  </a>
                </li>
                <li className="ms-3">
                  <a className="link-light" to="#">
                    <i className="fa fa-instagram fa-2x"></i>
                  </a>
                </li>
                <li className="ms-3">
                  <a className="link-light" to="#">
                    <i className="fa fa-twitter fa-2x"></i>
                  </a>
                </li>
              </ul>
            </div>
          </footer>
        </div>
     
      </footer>
    </div>
  );
};

export default Footer;
