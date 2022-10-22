import React, { useState, useContext } from "react";
import Axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../App";

const NewTicket = () => {
  const navigate = useNavigate();
  //post
  const [problem, setProblem] = useState("");
  const [status, setStatus] = useState("");
  const [assignedTo, SetAssignedTo] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [employee, setEmployee] = useState("");
  const { userData, setUserData } = useContext(UserContext);

  const onSubmit = (e) => {
    e.preventDefault();
    const x = userData.user.phone;

    Axios.post("http://localhost:3001/api/tickets", {
      problem: problem,
      status: status,
      assignedTo: assignedTo,
      customerPhone: customerPhone,
      employeePhone: x,
    })
      .then((res) => {
        if (res.status === 201) {
          toast.success("Ticket has been created");
          navigate("/serviceCall/ticketList");
        }
      })
      .catch((err) => {
        if (err.response) {
          toast.error(
            "Customer does not exists, close message to create a customer",
            {
              onClose: () => navigate("/newCustomer"),
            }
          );
        }
      });
  };

  //end of post

  return (
    <div>
      <section id="contact">
        <div className="container my-5 py-5">
          <div className="row mb-5">
            <div className="col-12">
              <h3 className="fs-5 text-center mb-0">Contact Us</h3>
              <h1 className="display-6 text-center mb-4">
                new <b>Ticket?</b>
              </h1>
              <hr className="w-25 mx-auto" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <img src="/assets/contact.jpg" alt="Contact" className="w-75" />
            </div>
            <div className="col-md-6">
              <form onSubmit={onSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    assignedTo{" "}
                  </label>
                  <select
                    required
                    type="text"
                    className="form-control"
                    id="assignedTo"
                    //placeholder="assignedTo"
                    name="assignedTo"
                    onChange={(event) => {
                      SetAssignedTo(event.target.value);
                    }}
                  >
                    <option value=""></option>
                    <option value="cr">cr</option>
                    <option value="Phone">Phone</option>
                    <option value="PC">PC</option>
                    <option value="BuildPc">BuildPc</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlTextarea1"
                    className="form-label"
                  >
                    phone number:
                  </label>
                  <input
                    required
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    name="phone number"
                    onChange={(event) => {
                      setCustomerPhone(event.target.value);
                    }}
                  ></input>
                </div>

                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlTextarea1"
                    className="form-label"
                  >
                    problem:
                  </label>
                  <textarea
                    required
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="5"
                    name="problem"
                    onChange={(event) => {
                      setProblem(event.target.value);
                    }}
                  ></textarea>
                </div>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    status
                  </label>
                  <select
                    required
                    type="text"
                    className="form-control"
                    id="status"
                    //placeholder="status"
                    name="status"
                    onChange={(event) => {
                      setStatus(event.target.value);
                    }}
                  >
                    <option value=""></option>
                    <option value="open">open</option>
                    <option value="Updated">Updated</option>
                    <option value="Answered">Answered</option>
                    <option value="Closed">Closed</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="btn btn-outline-primary rounded-pill px-4"
                  onClick={onSubmit}
                >
                  Open New Ticket <i className="fa fa-paper-plane ms-2"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewTicket;
