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

const BuildPc = () => {
  const [ticketsSchema, setTickets] = useState([]);

  const dateFormatter = (data, row) => {
    return new Date(data).toLocaleDateString("he-IL");
  };
  const idFormatter = (data, row) => {
    return (
      <Link to={`/serviceCall/updateTicket/${data}`}>
        <Button variant="primary">Edit Ticket</Button>
      </Link>
    );
  };

  const columns = [
    { dataField: "_id", text: "Id", formatter: idFormatter },
    {
      dataField: "date",
      text: "date",
      sort: true,
      filter: textFilter(),
      formatter: dateFormatter,
    },
    { dataField: "status", text: "status", sort: true, filter: textFilter() },
    {
      dataField: "problem",
      text: "problem",
      sort: true,
      filter: textFilter(),
    },
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
      <BootstrapTable
        bootstrap4
        keyField="id"
        columns={columns}
        data={ticketsSchema}
        pagination={pagination}
        filter={filterFactory()}
      />
    </div>
  );
};

export default BuildPc;
