import React, { useState, useEffect } from "react";
import axios from "axios";

import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const UpdateCustomer = ({ match }) => {
  const navigate = useNavigate();
  const { id } = useParams();

  //test pic
  //const [item, setItem] = useState({ title: "", image: "" });

  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/customers/" + id)
      .then((response) => setUser(response.data));
  }, []);

  const UserUpdate = () => {
    axios
      .put("http://localhost:3001/api/customers/" + id, user)
      .then((res) => toast.success(res.data))
      .catch((err) => {
        if (err.response) {
          toast.error(err.response.data.message);
        }
      });
    navigate("/customersList");
  };

  const userDelete = () => {
    axios
      .delete("http://localhost:3001/api/customers/" + id)
      .then((res) => toast.success(res.data))
      .catch((err) => {
        if (err.response) {
          toast.error(err.response.data.message);
        }
      });
    navigate("/customersList");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((oldUser) => {
      return {
        ...oldUser,
        [name]: value,
      };
    });
  };

  return (
    <div>
      <section id="contact">
        <div className="container my-5 py-5">
          <div className="row mb-5">
            <div className="col-12">
              <h1 className="display-6 text-center mb-4">
                <b>Update Customer</b> or <b>Delete</b>
              </h1>
              <hr className="w-25 mx-auto" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <img
                src="/assets/updateUser.png"
                alt="Contact"
                className="w-75"
              />
            </div>
            <div className="col-md-6">
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    required
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="John Smith"
                    name="name"
                    value={user.name}
                    onChange={handleChange}
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
                    value={user.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    phone
                  </label>
                  <input
                    required
                    type="text"
                    className="form-control"
                    id="phone"
                    placeholder="John Smith"
                    name="phone"
                    value={user.phone}
                    onChange={handleChange}
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
                    placeholder="John Smith"
                    name="address"
                    value={user.address}
                    onChange={handleChange}
                  />
                </div>

                <div className="buttons d-flex justify-content-center p-1">
                  <button
                    type="submit"
                    className="btn btn-outline-primary rounded-pill px-4"
                    onClick={UserUpdate}
                  >
                    Update User <i className="fa fa-paper-plane ms-6"></i>
                  </button>
                  <button
                    type="submit"
                    className="btn btn-outline-danger rounded-pill px-5 ms-5"
                    onClick={userDelete}
                  >
                    Delete User
                    <i className="fa fa-trash  aria-hidden=true" ms-4></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UpdateCustomer;
