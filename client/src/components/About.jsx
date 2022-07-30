import React from "react";

const About = () => {
  return (
    <div>
      <section id="about" className="pb-5">
        <div className="container my-5 py-5">
          <div className="row">
            <div className="col-md-6">
              <img
                src="/assets/aboutus.jpg"
                alt="About"
                className="w-75 mt-5"
              />
            </div>
            <div className="col-md-6">
              <h3 className="fs-5 mb-0">About Us</h3>
              <h1 className="display-6 mb-2">
                Who <b>We</b> Are
              </h1>
              <hr className="w-0" />
              <p className="lead mb-4">
                since 1998 our shop exist, we believe in personal relationship
                with our costumers. we are located in : kfar kamma , 33 street.{" "}
              </p>
              <h3 className="px-1 py-2">
                <i className="fa fa-mobile me-2 fa-2x mb-4 text-primary"></i>{" "}
                moshe- 050-4206262
              </h3>
              <h3 className="px-1 py-2 ">
                <i className="fa fa-phone me-2 fa-2x mb-4 text-primary"></i>{" "}
                office-04-1234567
              </h3>

              <h3>
                <a
                  href="https://wa.me/0504206262"
                  class="whatsapp_float"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fa fa-whatsapp whatsapp-icon fa-2x mb-4 fa-align-center"></i>
                </a>
                Click for whatsapp Chat{" "}
              </h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
