import React from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useState } from "react";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navigate, NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

function SingleCustomer(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="dark" onClick={handleShow}>
        {props.customer.name}
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{props.customer.name}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <p>Mobile: {props.customer.phone}</p>
          <p>Address: {props.customer.address}</p>
          <p>Tickets: </p>
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>problem</th>
                <th>status</th>
                <th>assignedTo</th>
                <th>Open Ticket</th>
              </tr>
            </thead>
            <tbody>
              {props.customer.tickets.map((test) => {
                return (
                  <tr>
                    <td>{test.problem}</td>
                    <td>{test.status}</td>
                    <td>{test.assignedTo}</td>
                    
                    <td>
                      <Link
                        key={test._id}
                        to={`/serviceCall/updateTicket/${test._id}`}
                      >
                        Open Ticket
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default SingleCustomer;
