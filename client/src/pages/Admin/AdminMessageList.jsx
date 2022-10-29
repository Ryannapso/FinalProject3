import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

import BootstrapTable from "react-bootstrap-table-next";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import paginationFactory from "react-bootstrap-table2-paginator";
import "react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css";

const AdminMessageList = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:3001/api/AdminMessage").then((res) =>
      setData(res.data)
    );
  });

  const idFormatter = (data, row) => {
    return (
      <Link to={`/admin/updateAdminMessage/${data}`}>
        <Button variant="primary">Edit</Button>
      </Link>
    );
  };

  const columns = [
    {
      dataField: "_id",
      text: "Edit",
      formatter: idFormatter,
    },
    { dataField: "title", text: "title", sort: true, filter: textFilter() },
    {
      dataField: "msg",
      text: "msg",
      sort: true,
      filter: textFilter(),
    },
    {
      dataField: "type",
      text: "type",
      sort: true,
      filter: textFilter(),
    },
    {
      dataField: "createdAt",
      text: "date",
      sort: true,
      filter: textFilter(),
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
      {" "}
      <h1>Message List</h1>
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

export default AdminMessageList;
