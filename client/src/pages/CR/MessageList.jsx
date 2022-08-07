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

//fruits=msgs  //setFruits = setMsgs
const MessageList = () => {
  // const [messageSchema, setMsgs] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:3001/api/message")
  //     .then((response) => setMsgs(response.data));
  // }, []);


  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/message")
      .then((res) => setData(res.data));
  });

  const idFormatter = (data, row) => {
    return <Link to={`/updateMsg2/${data}`}>{data}</Link>;

  };
  const rowStyle = (row, rowIndex) => {
    if (row === "open") {
      return { backgroundColor: "red", text: "bold" };
    }
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
      dataField: "status",
      text: "status",
      sort: true,
      filter: textFilter(),
      style: rowStyle,
    },
    { dataField: "name", text: "name", sort: true, filter: textFilter() },
    {
      dataField: "phone",
      text: "phone",
      sort: true,
      filter: textFilter(),
    },
    {
      dataField: "email",
      text: "email",
      sort: true,
      filter: textFilter({ defaultValue: "" }),
    },
    {
      dataField: "message",
      text: "message",
      sort: true,
      filter: textFilter({ defaultValue: "" }),
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
    <div>
          <BootstrapTable
        bootstrap4
        keyField="id"
        columns={columns}
        data={data}
        pagination={pagination}
        filter={filterFactory()}
      />
      {/* <h2> there are {messageSchema.length} post in the Database </h2>
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
      </Table> */}
    </div>
  );
};

export default MessageList;
