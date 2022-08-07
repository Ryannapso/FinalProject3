import React, { useState } from "react";

import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";

function MainPageMessages() {
  const alertDangerTitle = "moshe";
  const alertDanger = "no more iphone 13 screens";
  const alertSuccessTitle = "moshe";
  const alertSuccess = "no more iphone 13 screens";
  const alertWarningTitle = "moshe";
  const alertWarning = "no more iphone 13 screens";

  const [show, setShow] = useState(true);


  if (show) {
    return (
      <div>
      <Alert variant="danger" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>{alertDangerTitle}</Alert.Heading>
        <p>{alertDanger}</p>
      </Alert>
        <Alert variant="success" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>{alertSuccessTitle}</Alert.Heading>
        <p>{alertSuccess}</p>
      </Alert>
      <Alert variant="warning" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>{alertWarningTitle}</Alert.Heading>
        <p>{alertWarning}</p>
      </Alert>
      </div>
    );
    
  }
  return <Button onClick={() => setShow(true)}>Show Alert</Button>;
  
}


export default MainPageMessages;
