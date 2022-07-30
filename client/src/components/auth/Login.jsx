import React, { useState, useContext } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import { UserContext } from "../../App";
import { NavLink } from "react-router-dom";

function Login() {
  const { userData, setUserData } = useContext(UserContext);

  const [user, setUser] = useState({
    name: "",
    Lname: "",
    phone: "",
    location: "",
    email: "",
    password: "",
    role: "",
  });
  const [errorMsg, setErrorMsg] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const newUser = {
        name: user.name,
        Lname: user.Lname,
        phone: user.phone,
        location: user.location,
        email: user.email,
        password: user.password,
        role: user.role,
      };

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
        Lname: "",
        phone: "",
        location: "",
        email: "",
        password: "",
        role: "",
        
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
        <div className="row">
          <div className="col-md-5 d-flex flex-column align-items-center text-white  justify-content-center form">
            <h1 className="display-4">Welcome Back</h1>
            <p className="lead text-center"> Enter your Credential to Login</p>
            <h5 className="mb-4">OR</h5>
            <NavLink
              to="/register"
              className="btn btn-outline-light 
            rounded-pill pb-2 w-50"
            >
              Register
            </NavLink>
          </div>
          <div className="col-md-6 p-5">
            <h1 className="display-6 fw-bolder mb-5">Login</h1>
            <form onSubmit={handleSubmit}>
              {/* <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  name
                </label>
                <input
                  type="name"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  name="name"
                  value={user.name}
                  onChange={handleChange}
                />
              </div> */}
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  email
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputPassword1"
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                />
              </div>

              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  Password
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  name="password"
                  value={user.password}
                  onChange={handleChange}
                />
              </div>

              <button
                type="submit"
                class="btn btn-primary w-100 mt-4 rounded-pill"
              >
                login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
