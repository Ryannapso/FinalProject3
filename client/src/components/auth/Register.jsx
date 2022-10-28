import React, { useState, useContext } from "react";
import axios from "axios";
import { UserContext } from "../../App";
import { NavLink } from "react-router-dom";

const Register = () => {
  const { userData, setUserData } = useContext(UserContext);

  const [user, setUser] = useState({
    name: "",
    Lname: "",
    phone: "",
    location: "",
    email: "",
    password: "",
    passwordAgin: "",
    role: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newUser = {
        name: user.name,
        Lname: user.Lname,
        phone: user.phone,
        location: user.phone,
        email: user.email,
        password: user.password,
        image: user.image,
        role: user.role,
      };

      if (user.password !== user.passwordAgin) {
        console.log("password did not match");
      } else {
        console.log(newUser);
      }
      await axios.post("http://localhost:3001/api/users/register", newUser);

      const loginResponse = await axios.post(
        "http://localhost:3001/api/users/login",
        newUser
      );
      setUserData({
        token: loginResponse.data.token,
        user: loginResponse.data.user,
      });
      localStorage.setItem("auth-token", loginResponse.data.token);

      setUser({
        name: "",
        email: "",
        Lname: "",
        location: "",
        phone: "",
        password: "",
        passwordAgin: "",
        role: "",
        image: "",
      });
      window.location = "/";
    } catch (err) {
      console.log(err);
    }
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
      <div className="container shadow my-5">
        <div className="row justify-content-end">
          <div className="col-md-5 d-flex flex-column align-items-center text-white justify-content-center form order-2">
            <h1 className="display-4 fw-bolder">Hello</h1>
            <p className="lead text-center">Enter Your Details to Register</p>
            <h5 className="mb-4">OR</h5>
            <NavLink
              to="/login"
              className="btn btn-outline-light rounded-pill pb-2 w-50"
            >
              Login
            </NavLink>
          </div>
          <div className="col-md-6 p-5">
            <form onSubmit={handleSubmit} method="POST">
              <div class="row gx-3 mb-3">
                <div className="col-md-6">
                  <label htmlFor="name" className="form-label">
                    First name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={user.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="name" className="form-label">
                    Last name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="Lname"
                    value={user.Lname}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div class="row gx-3 mb-3">
                <div className="col-md-6">
                  <label htmlFor="name" className="form-label">
                    phone
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="phone"
                    value={user.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="name" className="form-label">
                    Address
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="location"
                    value={user.location}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div class="row gx-3 mb-3">
                <div className="col-md-6">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                  />
                  <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div className="col-md-6">
                  <label htmlFor="name" className="form-label">
                    Role
                  </label>

                  <select
                    className="form-control"
                    name="role"
                    value={user.role}
                    onChange={handleChange}
                  >
                    <option selected value=""></option>
                    <option value="cr">cr</option>
                    <option value="tech">tech</option>
                    <option value="admin">admin</option>
                  </select>
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  name="password"
                  value={user.password}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  name="passwordAgin"
                  value={user.passwordAgin}
                  onChange={handleChange}
                />
              </div>

              <button
                type="submit"
                className="btn btn-outline-primary w-100 mt-4 rounded-pill"
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
