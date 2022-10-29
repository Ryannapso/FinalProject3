import React, { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

const NewAdminMessage = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [msg, setMsg] = useState("");
  const [type, SetType] = useState("");

  const addToList = () => {
    Axios.post("http://localhost:3001/api/AdminMessage", {
      title: title,
      msg: msg,
      type: type,
    }).then();
    alert("New Message Added");
    navigate("/dashboard");
  };

  return (
    <div>
      <section id="contact">
        <div className="container my-5 py-5">
          <div className="row mb-5">
            <div className="col-12">
              <h3 className="fs-5 text-center mb-0">Contact Us</h3>
              <h1 className="display-6 text-center mb-4">
                enter new <b>Message?</b>
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
                    Title
                  </label>
                  <input
                    required
                    type="text"
                    className="form-control"
                    id="Title"
                    placeholder="Title"
                    name="Title"
                    onChange={(event) => {
                      setTitle(event.target.value);
                    }}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    MSG
                  </label>
                  <textarea
                    required
                    type="text"
                    className="form-control"
                    id="msg"
                    placeholder="msg"
                    name="msg"
                    onChange={(event) => {
                      setMsg(event.target.value);
                    }}
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    Type
                  </label>
                  <select
                    required
                    type="text"
                    className="form-control"
                    id="type"
                    placeholder="type"
                    name="type"
                    onChange={(event) => {
                      SetType(event.target.value);
                    }}
                  >
                    <option value="success">success-green</option>
                    <option value="danger">danger-red</option>
                    <option value="warning">warning-yellow</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="btn btn-outline-primary rounded-pill px-4"
                  onClick={addToList}
                >
                  Add New Message <i className="fa fa-paper-plane ms-2"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewAdminMessage;
