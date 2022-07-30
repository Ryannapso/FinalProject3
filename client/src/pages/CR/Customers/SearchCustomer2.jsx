
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const SearchCustomer = ({ match }) => {
  const navigate = useNavigate();
  const { key } = useParams();

 

  const [user, setUser] = useState({
    name: "",
    email: "",
    date: "",
    role: "",
    //image:""
  });

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/customers/" + key)
      .then((response) => setUser(response.data));
  }, []);

  const UserUpdate = () => {
    axios
      .put("http://localhost:3001/api/users/update/" + key, user)
      .then((user) => console.log(user));
    alert("user updated");
    navigate("/userList");
  };

  const userDelete = () => {
    axios
      .delete("http://localhost:3001/api/users/" + key)
      .then((res) => console.log(res.status));
    alert("user deleted");
    navigate("/userList");
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
                <b>Update </b> or <b>Delete</b>
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
                    Your Name
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
                  <label htmlFor="name" className="form-label">
                    Role
                  </label>
                  <input
                    required
                    type="text"
                    className="form-control"
                    id="role"
                    placeholder="John Smith"
                    name="role"
                    value={user.role}
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
                {/* <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    Email address
                  </label>
                  <FileBase64 
                 
                    required
                    type="file"
                    multiple={false}
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                    name="img"
                    value={user.image}
                   // onChange={handleChange}
                   
                  
                  />
                </div> */}
                {/* <FileBase64
          type="file"
          multiple={false}
          onDone={({ base64 }) => handleChange({ image: base64 })}
        /> */}
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

export default SearchCustomer
