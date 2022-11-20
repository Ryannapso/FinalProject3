import React from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

function BuildDetails(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="light" onClick={handleShow}>
        {props.build.cpu}
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{props.build.cpu}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <p>Email: {props.build.cpu}</p>
          <p>Mobile: {props.build.phone}</p>
          <p>Address: {props.build.address}</p>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default BuildDetails;
