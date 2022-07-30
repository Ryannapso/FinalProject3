import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useLinkClickHandler } from "react-router-dom";
import { Table, Button, Form } from "react-bootstrap";


const CustomerList = () => {
  const [customersSchema, setCustomers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/customers")
      .then((response) => setCustomers(response.data));
  }, []);

  return (
    <div>
      <h2> there are {customersSchema.length} post in the Database </h2>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>name</th>
            <th>email</th>
            <th>phone</th>
            <th>address</th>
            <th>UserDate</th>
            <th>problem</th>
            <th>assignedTo</th>
            <th>status</th>
            
           
          </tr>
        </thead>
        <tbody>
          {customersSchema.map((customer) => {
            return (
              <tr>
                <td>{customer.name}</td>
                <td>{customer.email}</td>
                <td>{customer.phone}</td>
                <td>{customer.address}</td>
                <td>{customer.UserDate}</td>
                <td>{customer.problem}</td>
                <td>{customer.assignedTo}</td>
                <td>{customer.status}</td>
                <Link key={customer._id} to={`/updateMsg2/${customer._id}`}>
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

export default CustomerList;
