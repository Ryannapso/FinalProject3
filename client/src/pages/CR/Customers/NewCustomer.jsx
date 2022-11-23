import React, { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const NewCustomer = () => {
  const navigate = useNavigate();

  //post
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, SetPhone] = useState("");
  const [address, setAddress] = useState("");
  const [timestamps] = useState("");

  const addToList = () => {
    Axios.post("http://localhost:3001/api/customers", {
      name: name,
      email: email,
      address: address,
      timestamps: timestamps,
      phone: phone,
    })
      .then((res) => {
        toast.success(res.data);
      })
      .catch((err) => {
        if (err.response) {
          toast.error(err.response.data.message);
        }
      });
    navigate("/customersList");
  };
  //end of post

  return (
    <div>
      <section id="contact">
        <div className="container my-5 py-5">
          <div className="row mb-5">
            <div className="col-12">
              <h3 className="fs-5 text-center mb-0">Service call</h3>
              <h1 className="display-6 text-center mb-4">
                new <b>Customer</b>
              </h1>
              <hr className="w-25 mx-auto" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <img src="/assets/contact.jpg" alt="Contact" className="w-75" />
            </div>
            <div className="col-md-6">
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Customer Name
                  </label>
                  <input
                    required
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Name"
                    name="name"
                    onChange={(event) => {
                      setName(event.target.value);
                    }}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Customer phone
                  </label>
                  <input
                    required
                    type="phone"
                    className="form-control"
                    id="phone"
                    placeholder="Phone Number"
                    name="phone"
                    onChange={(event) => {
                      SetPhone(event.target.value);
                    }}
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    Email address
                  </label>
                  <input
                    required
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                    name="email"
                    onChange={(event) => {
                      setEmail(event.target.value);
                    }}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    address
                  </label>
                  <input
                    required
                    type="text"
                    className="form-control"
                    id="address"
                    placeholder="address"
                    name="address"
                    onChange={(event) => {
                      setAddress(event.target.value);
                    }}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-outline-primary rounded-pill px-4"
                  onClick={addToList}
                >
                  Open New Customer <i className="fa fa-paper-plane ms-2"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewCustomer;
