import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useLinkClickHandler } from "react-router-dom";
import { Table, Button, Form } from "react-bootstrap";

//fruits=msgs  //setFruits = setMsgs
const MessageList = () => {
  const [messageSchema, setMsgs] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/message")
      .then((response) => setMsgs(response.data));
  }, []);

  return (
    <div>
      <h2> there are {messageSchema.length} post in the Database </h2>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>date</th>
            <th>status</th>
            <th>name</th>
            <th>email</th>
            <th>phone</th>
            <th>message</th>
            <th>action</th>
           
          </tr>
        </thead>
        <tbody>
          {messageSchema.map((msg) => {
            return (
              <tr>
                <td>{msg.date}</td>
                <td>{msg.status}</td>
                <td>{msg.name}</td>
                <td>{msg.email}</td>
                <td>{msg.phone}</td>
                <td>{msg.message}</td>
                <Link key={msg._id} to={`/updateMsg2/${msg._id}`}>
                  <Button> Update</Button>
                </Link>
             
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default MessageList;
