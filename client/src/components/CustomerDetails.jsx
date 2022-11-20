import React from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";

function CustomerDetails(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="light" onClick={handleShow}>
        {props.customer.name}
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{props.customer.name}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <p>Email: {props.customer.email}</p>
          <p>Mobile: {props.customer.phone}</p>
          <p>Address: {props.customer.address}</p>

        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default CustomerDetails;
