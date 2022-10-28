import React, { useState, useEffect } from "react";
import axios from "axios";

import { useParams } from "react-router-dom";

const UpdateMsg2 = ({ match }) => {
  const { id } = useParams();

  const [msg, setMsg] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    status: "",
    date: "",
    id: "",
  });

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/message/" + id)
      .then((response) => setMsg(response.data));
  }, []);

  const MsgUpdate = () => {
    axios
      .put("http://localhost:3001/api/message/" + id, msg)
      .then((msg) => console.log(msg));
    window.location = "/messageList";
  };

  const msgDelete = () => {
    axios
      .delete("http://localhost:3001/api/message/" + id)
      .then((res) => console.log(res.status));
    alert("msg deleted");
    window.location = "/messageList";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMsg((oldMsg) => {
      return {
        ...oldMsg,
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
              <img src="/assets/contact.jpg" alt="Contact" className="w-75" />
            </div>
            <div className="col-md-6">
              <form>
              <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    id
                  </label>
                  <input
                    required
                    type="text"
                    className="form-control"
                    id="id"
                    name="id"
                    value={msg._id}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Date open
                  </label>
                  <input
                    required
                    type="text"
                    className="form-control"
                    id="date"
                    name="date"
                    value={msg.date}
                  />
                </div>
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
                    value={msg.name}
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
                    value={msg.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Phone
                  </label>
                  <input
                    required
                    type="text"
                    className="form-control"
                    id="phone"
                    placeholder="John Smith"
                    name="phone"
                    value={msg.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlTextarea1"
                    className="form-label"
                  >
                    Your Message
                  </label>
                  <textarea
                    required
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="5"
                    name="message"
                    value={msg.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Ticket Status
                  </label>
                  <select
                    required
                    type="text"
                    className="form-control"
                    id="status"
                    placeholder="John Smith"
                    name="status"
                    value={msg.status}
                    onChange={handleChange}
                  >
                    <option value="Updated">Updated</option>
                    <option value="Answered">Answered</option>
                    <option value="Closed">Closed</option>
                    <option value="Open">open</option>
                  </select>
                </div>
                <div className="buttons d-flex justify-content-center p-1">
                  <button
                    type="submit"
                    className="btn btn-outline-primary rounded-pill px-4"
                    onClick={MsgUpdate}
                  >
                    Update Message <i className="fa fa-paper-plane ms-6"></i>
                  </button>
                  <button
                    type="submit"
                    className="btn btn-outline-danger rounded-pill px-5 ms-5"
                    onClick={msgDelete}
                  >
                    Delete Message
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

export default UpdateMsg2;
