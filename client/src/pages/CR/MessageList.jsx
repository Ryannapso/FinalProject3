import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

import BootstrapTable from "react-bootstrap-table-next";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import paginationFactory from "react-bootstrap-table2-paginator";
import "react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css";

const MessageList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/message")
      .then((res) => setData(res.data));
  });

  const idFormatter = (data, row) => {
    return (
      <Link to={`/updateMsg2/${data}`}>
        <Button variant="primary">Edit Message</Button>
      </Link>
    );
  };

  const rowStyle = (row, rowIndex) => {
    if (row === "open") {
      return { backgroundColor: "red", text: "bold" };
    }
  };

  const columns = [
    {
      dataField: "_id",
      text: "Id",
      formatter: idFormatter,
    },
    {
      dataField: "createdAt",
      text: "Created At",
      sort: true,
      filter: textFilter(),
    },
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
    </div>
  );
};

export default MessageList;
