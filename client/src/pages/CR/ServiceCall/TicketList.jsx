import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useLinkClickHandler } from "react-router-dom";
import { Table, Button, Form } from "react-bootstrap";


const TicketList = () => {
  const [ticketsSchema, setTicketss] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/tickets")
      .then((response) => setTicketss(response.data));
  }, []);

  return (
    <div>
      <h2> there are {ticketsSchema.length} post in the Database </h2>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>date</th>
            <th>status</th>
            <th>problem</th>
            <th>assignedTo</th>
           
           
          </tr>
        </thead>
        <tbody>
          {ticketsSchema.map((ticket) => {
            return (
              <tr>
                <td>{ticket.date}</td>
                <td>{ticket.status}</td>
                <td>{ticket.problem}</td>
                <td>{ticket.assignedTo}</td>
                
                <Link key={ticket._id} to={`/updateMsg2/${ticket._id}`}>
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

export default TicketList;
