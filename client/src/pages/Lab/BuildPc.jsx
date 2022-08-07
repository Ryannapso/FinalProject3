import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useLinkClickHandler } from "react-router-dom";
import { Table, Button, Form } from "react-bootstrap";
import BootstrapTable from "react-bootstrap-table-next";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import paginationFactory from "react-bootstrap-table2-paginator";
import "react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css";

const BuildPc = () => {
  const [ticketsSchema, setTickets] = useState([]);
  // const [customersSchema, setCustomers] = useState([]);

  //make table using
  const columns = [
    { dataField: "_id", text: "Id" },
    { dataField: "date", text: "date", sort: true, filter: textFilter() },
    { dataField: "status", text: "status", sort: true, filter: textFilter() },
    { dataField: "problem", text: "problem", sort: true, filter: textFilter() },
    {
      dataField: "customerPhone",
      text: "customerPhone",
      sort: true,
      filter: textFilter(),
    },
    {
      dataField: "assignedTo",
      text: "assignedTo",
      sort: true,
      filter: textFilter({ defaultValue: "BuildPc" }),
    },
  ];
  //set pages
  const pagination = paginationFactory({
    page: 1,
    sizePerPage: 10,
    lastPageText: ">>",
    firstPageText: "<<",
    nextPageText: ">",
    prePageText: "<",
    showTotal: true,
    alwaysShowAllBtns: true,
    onPageChange: function (page, sizePerPage) {
      console.log("page", page);
      console.log("sizePerPage", sizePerPage);
    },
    onSizePerPageChange: function (page, sizePerPage) {
      console.log("page", page);
      console.log("sizePerPage", sizePerPage);
    },
  });

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/tickets")
      .then((response) => setTickets(response.data));
  }, []);

  return (
    <div>
      {/* <h2> there are {ticketsSchema.length} post in the Database </h2> */}
      <BootstrapTable
        bootstrap4
        keyField="id"
        columns={columns}
        data={ticketsSchema}
        pagination={pagination}
        filter={filterFactory()}
      />
      {/* <Table striped bordered hover size="sm"  keyField='id' columns={columns} data={ticketsSchema}>
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
      </Table> */}
    </div>
  );
};



export default BuildPc