import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useLinkClickHandler } from "react-router-dom";
import { Table, Button, Form } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";

import BootstrapTable from "react-bootstrap-table-next";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import paginationFactory from "react-bootstrap-table2-paginator";
import "react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css";
import NewAdminMessage from "./NewAdminMessage";

function MainPageMessages() {
  //   const alertDangerTitle = "moshe";
  //   const alertDanger = "no more iphone 13 screens";
  //   const alertSuccessTitle = "moshe";
  //   const alertSuccess = "no more iphone 13 screens";
  //   const alertWarningTitle = "moshe";
  //   const alertWarning = "no more iphone 13 screens";

  //   const [show, setShow] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/api/AdminMessage")
      .then((res) => setData(res.data));
  });
  const [show, setShow] = useState(true);
  return (
    <div>
      {data.map((item) => {
        return (
          <div>
            {/* <Alert key={item.type} variant={item.type}>
                {item.msg}
              </Alert> */}

            <>
              <Alert show={show} variant={item.type}>
                <Alert.Heading>{item.title}</Alert.Heading>
                <p>{item.msg}</p>
                <hr />
                <div className="d-flex justify-content-end">
                  <Button
                    onClick={() => setShow(false)}
                    variant="outline-success"
                  >
                    Close
                  </Button>
                </div>
           
              </Alert>
             
            
            </>
          </div>
        );
      })}
     
     {!show && (
                <Button onClick={() => setShow(true)}>Show Alert</Button>
              )}
    </div>
  );
}

export default MainPageMessages;
