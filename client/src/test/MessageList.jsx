import React, { useEffect, useState } from "react";
import { Table, Button, Form } from "react-bootstrap";
import Axios from "axios";
import { Link } from 'react-router-dom'


function MessageList(props) {
  const [messageList, SetMsgList] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:3001/messages").then((response) => {
      SetMsgList(response.data);
    });
  }, []);



  if (messageList.length === 0) {
    return <h1>loading data</h1>;
  } else {
    return (
      <div>
        <div>
            <h1>List of Fruits</h1>
            <ul style={{listStyleType:"none"}}>
                {messageList.map(messageList => {
                    return (<li key={messageList._id}><Link to={`/updateMsg2/${messageList._id}`}>{messageList.name}</Link> ({messageList.email}) - {messageList.message}</li>)
                })}
            </ul>
        </div>
        <h2> there are {messageList.length} post in the Database </h2>
        <Table striped bordered hover variant="">
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>Email</th>
              <th>message</th>
              <th>action</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            {messageList.map((item) => {
              

              return (
                
                <tr>
                  <td>{item._id}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.message}</td>
                  <td><Link to={`/updateMsg2/:id${item._id}`}></Link></td>
                  <td>
                 
                    <Button variant="primary" >
                      Update
                    </Button>

                    <Button variant="danger">Delete</Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default MessageList;
