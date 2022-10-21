import React, { useEffect, useState } from "react";
import { Table, Button, Form } from "react-bootstrap";
import Axios from "axios";
import { Link } from "react-router-dom";

const Reports = () => {
  const [messageList, SetMsgList] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:3001/api/tickets").then((response) => {
      SetMsgList(response.data);
    });
  }, []);

  if (messageList.length === 0) {
    return <h1>loading data</h1>;
  } else {
    return (
      <div>
        <h2> there are {messageList.length} post in the Database </h2>
        <Table striped bordered hover variant="">
          <thead>
            <tr>
              <th>id</th>
              <th>create date</th>
              <th>update date</th>
              <th>problem</th>
              <th>assignedTo</th>
              <th>status</th>
              <th>customerPhone</th>
              
            </tr>
          </thead>
          <tbody>
            {messageList.map((item) => {
              return (
                <tr>
                  <td>{item._id}</td>
                  <td>
                    {new Date(item.createdAt).toLocaleDateString("he-IL")}
                  </td>
                  <td>
                    {new Date(item.updatedAt).toLocaleDateString("he-IL")}
                  </td>
                  <td>{item.problem}</td>
                  <td>{item.assignedTo}</td>
                  <td>{item.status}</td>
                  <td>{item.customerPhone}</td>

                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    );
  }
};

export default Reports;
