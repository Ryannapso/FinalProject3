import React from "react";
import SingleCustomer from "./SingleCustomer";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function CustomerTable(props) {
  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>name</th>
          <th>email</th>
          <th>phone</th>
          <th>address</th>
          <th>Customer Created</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((item) => {
          return (
            <tr>
              <td>
                <SingleCustomer customer={item}></SingleCustomer>
              </td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
              <td>{item.address}</td>
              <td>{new Date(item.createdAt).toLocaleDateString("he-IL")}</td>
              <td>
                <Link to={`/serviceCall/updateCustomer/${item._id}`}>
                  <Button variant="primary">Edit Customer</Button>
                </Link>
                ;
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

export default CustomerTable;
