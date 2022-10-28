import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Table, Button, Form } from "react-bootstrap";


const MessageList2 = () => {
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
            {/* <th>id</th> */}
            <th>name</th>
            <th>email</th>
            <th>message</th>
            <th>action</th>
           
          </tr>
        </thead>
        <tbody>
          {messageSchema.map((msg) => {
            return (
              <tr>
                {/* <td>{msg._id}</td> */}
                <td>{msg.name}</td>
                <td>{msg.email}</td>
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

export default MessageList2;
