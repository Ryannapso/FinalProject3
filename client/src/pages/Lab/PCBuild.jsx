import React, { useState, useEffect } from "react";
import axios from "axios";
import BootstrapTable from "react-bootstrap-table-next";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import paginationFactory from "react-bootstrap-table2-paginator";
import "react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const PCBuild = () => {
  const [PCBuildsSchema, setPCBuilds] = useState([]);

  // const dateFormatter = (data, row) => {
  //   return new Date(data).toLocaleDateString("he-IL");
  // };

  const customerFormatter = (data, row) => {
    return data.customer;
  };
  const idFormatter = (data, row) => {
    return (
      <Link to={`/serviceCall/updatePCBuild/${data}`}>
        <Button variant="primary">Edit PCBuild</Button>
      </Link>
    );
  };

  const columns = [
    { dataField: "_id", text: "ID", formatter: idFormatter },
    // {
    //   dataField: "date",
    //   text: "date",
    //   sort: true,
    //   filter: textFilter(),
    //   formatter: dateFormatter,
    // },
    { dataField: "status", text: "status", sort: true, filter: textFilter() },
    {
      dataField: "customer",
      text: "Customer",
      sort: true,
      filter: textFilter(),
      formatter: customerFormatter,
    },
    {
      dataField: "customerPhone",
      text: "customerPhone",
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

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/pcBuilds")
      .then((response) => setPCBuilds(response.data));
  }, []);

  return (
    <div>
      <BootstrapTable
        bootstrap4
        keyField="id"
        columns={columns}
        data={PCBuildsSchema}
        pagination={pagination}
        filter={filterFactory()}
      />
    </div>
  );
};

export default PCBuild;
