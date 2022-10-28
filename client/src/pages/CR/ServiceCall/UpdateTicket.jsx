import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const UpdateTicket = ({ match }) => {
  const navigate = useNavigate();

  const { id } = useParams();

  const [ticket, setTicket] = useState({
    problem: "",
    assignedTo: "",
    status: "",
    customerPhone: "",
    id: "",
  });

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/tickets/" + id)
      .then((response) => setTicket(response.data));
  }, []);

  const ticketUpdate = () => {
    axios
      .put("http://localhost:3001/api/tickets/" + id, ticket)
      .then((ticket) => console.log(ticket));
    alert("ticket updated");
    navigate("/serviceCall/ticketList");
  };

  const ticketDelete = () => {
    axios
      .delete("http://localhost:3001/api/tickets/" + id)
      .then((res) => console.log(res.status));
    alert("ticket deleted");
    navigate("/serviceCall/ticketList");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTicket((oldticket) => {
      return {
        ...oldticket,
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
                <b>Update Ticket </b>
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
                    value={ticket._id}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    problem
                  </label>
                  <input
                    required
                    type="text"
                    className="form-control"
                    id="problem"
                    name="problem"
                    value={ticket.problem}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    assignedTo
                  </label>
                  <input
                    required
                    type="text"
                    className="form-control"
                    id="assignedTo"
                    placeholder="John Smith"
                    name="assignedTo"
                    value={ticket.assignedTo}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    customerPhone
                  </label>
                  <input
                    required
                    type="text"
                    className="form-control"
                    id="customerPhone"
                    placeholder="John Smith"
                    name="customerPhone"
                    value={ticket.customerPhone}
                    onChange={handleChange}
                  />
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
                    value={ticket.status}
                    onChange={handleChange}
                  >
                    <option value="Updated">Updated</option>
                    <option value="Answered">Answered</option>
                    <option value="Closed">Closed</option>
                    <option value="open">open</option>
                  </select>
                </div>
                <div className="buttons d-flex justify-content-center p-1">
                  <button
                    type="submit"
                    className="btn btn-outline-primary rounded-pill px-4"
                    onClick={ticketUpdate}
                  >
                    Update Ticket <i className="fa fa-pencil-square-o ms-6"></i>
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

export default UpdateTicket;
