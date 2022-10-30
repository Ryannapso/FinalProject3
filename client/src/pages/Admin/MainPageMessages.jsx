import React, { useState, useEffect } from "react";
import axios from "axios";

import { Button } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";

import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import "react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css";
import "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css";

function MainPageMessages() {

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
          
          <div className="alerts">
     
            <>
              <Alert show={show} variant={item.type}>
                
                <p> <h3>{item.title}</h3>  {item.msg}</p>
                <p>{new Date(item.createdAt).toLocaleDateString
                  ('he-IL')}</p>
                
              </Alert>
            </>
          </div>
        );
      })}

      {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}
    </div>
  );
}

export default MainPageMessages;
