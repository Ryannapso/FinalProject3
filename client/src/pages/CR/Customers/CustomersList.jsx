import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Table, Button } from "react-bootstrap";
import SingleCustomer from "./SingleCustomer";
import BootstrapTable from "react-bootstrap-table-next";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import paginationFactory from "react-bootstrap-table2-paginator";
import "react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css";

function CustomerList() {
  let counter = 0;

  const [customersSchema, setCustomers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/customers")
      .then((response) => setCustomers(response.data));
  }, []);

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/customers")
      .then((res) => setData(res.data));
  });
  const idFormatter = (data, row) => {
    return <Link to={`/serviceCall/updateTicket/${data}`}>{data}</Link>;
  };
  const rowStyle = (row, rowIndex) => {
    if (row === "open") {
      return { backgroundColor: "red", text: "bold" };
    }
  };
  const SingleCustomerFormatter = (data, row) => {
    return <Link to={`/serviceCall/updateTicket/${data}`}>{data}</Link>;
  };

  //make table using
  const columns = [
    {
      dataField: "_id",
      text: "Id",
      formatter: idFormatter,
      style: { backgroundColor: "yellow" },
    },
    { dataField: "date", text: "date", sort: true, filter: textFilter() },
    {
      dataField: "name",
      text: "name",
      sort: true,
      filter: textFilter(),
      style: rowStyle,
      // formatter:SingleCustomerFormatter
    },
    { dataField: "address", text: "address", sort: true, filter: textFilter() },
    {
      dataField: "phone",
      text: "phone",
      sort: true,
      filter: textFilter(),
    },
    {
      dataField: "assignedTo",
      text: "assignedTo",
      sort: true,
      // filter: textFilter({ defaultValue: "Phone" }),
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

  return (
    <>
      <div>
        <BootstrapTable
          bootstrap4
          keyField="id"
          columns={columns}
          data={data}
          pagination={pagination}
          filter={filterFactory()}
        />
        <h2> there are {customersSchema.length} post in the Database </h2>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>name</th>
              <th>email</th>
              <th>phone</th>
              <th>address</th>
              <th>tickets Open</th>
            </tr>
          </thead>
          <tbody>
            {customersSchema.map((item) => {
              return (
                <tr>
                  <td>
                    <SingleCustomer customer={item}></SingleCustomer>
                  </td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                  <td>{item.address}</td>
                  {item.tickets.forEach((element) => {
                    if (element.status === "open") {
                      counter++;
                    }
                  })}
                  <td>{counter}</td>
                  {(counter = 0)}
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default CustomerList;
