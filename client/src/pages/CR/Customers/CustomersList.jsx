import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Table, Button } from "react-bootstrap";
import SingleCustomer from './SingleCustomer'


function CustomerList()  {
  let counter = 0;

  const [customersSchema, setCustomers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/customers")
      .then((response) => setCustomers(response.data));
  }, []);

  return <>
    <div>
      <h2> there are {customersSchema.length} post in the Database </h2>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>name</th>
            <th>email</th>
            <th>phone</th>
            <th>address</th>
            <th>tickets</th>
          </tr>
        </thead>
        <tbody>
          {customersSchema.map((item) => {
            return (
              <tr>
                <td>
                <SingleCustomer
                  customer={item}
                ></SingleCustomer>
              </td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>{item.address}</td>
                {item.tickets.forEach(element => {
                if (element.status === 'open') {
                  counter++
                }
              })}
              <td>{counter}</td>
                {counter = 0}
                <Link key={item._id} to={`/updateMsg2/${item._id}`}>
                  <Button> Update</Button>
                </Link>
              </tr>
            )
          })}
        </tbody>
      </Table>
    </div>
  </>
};

export default CustomerList;
