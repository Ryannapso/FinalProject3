import React, { useState } from "react";
import Axios from "axios";

const NewCustomer = () => {
  //post
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, SetPhone] = useState("");
  const [location, setLocation] = useState("");
  const [Lname, SetLname] = useState("");
  const [role, SetRole] = useState("");
  const [password, SetPassword] = useState("");
  // const [problem, setProblem] = useState("");
  // const [assignedTo, setAssignedTo] = useState("");
  // const [status, setStatus] = useState("");

  const addToList = () => {
    Axios.post("http://localhost:3001/api/users/register/admin", {
      name: name,
      email: email,
      password: password,
      Lname: Lname,
      phone: phone,
      location: location,
      role: role,
    });
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
                    First Name
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
                    Last Name
                  </label>
                  <input
                    required
                    type="text"
                    className="form-control"
                    id="Lname"
                    placeholder="Lname"
                    name="Lname"
                    onChange={(event) => {
                      SetLname(event.target.value);
                    }}
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
                      setLocation(event.target.value);
                    }}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    role
                  </label>
                  <select
                    required
                    type="text"
                    className="form-control"
                    id="role"
                    placeholder="role"
                    name="role"
                    onChange={(event) => {
                      SetRole(event.target.value);
                    }}
                  >
                    <option value=""></option>
                    <option value="user">user</option>
                    <option value="cr">cr</option>
                    <option value="tech">tech</option>
                    <option value="admin">admin</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    password
                  </label>
                  <input
                    required
                    type="text"
                    className="form-control"
                    id="password"
                    placeholder="password"
                    name="password"
                    onChange={(event) => {
                      SetPassword(event.target.value);
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
