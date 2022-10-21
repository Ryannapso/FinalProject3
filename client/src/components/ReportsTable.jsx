import React from 'react'
import { Table } from "react-bootstrap";

function ReportsTable(props) {
  return (
    <div>
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
          {props.tableData.map((item) => {
            return (
              <tr>
                <td>{item._id}</td>
                <td>{new Date(item.createdAt).toLocaleDateString("he-IL")}</td>
                <td>{new Date(item.updatedAt).toLocaleDateString("he-IL")}</td>
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

export default ReportsTable