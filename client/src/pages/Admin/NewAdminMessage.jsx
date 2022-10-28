import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

import BootstrapTable from "react-bootstrap-table-next";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import paginationFactory from "react-bootstrap-table2-paginator";
import "react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css";

const NewAdminMessage = () => {
 
  const [title, setTitle] = useState("");
  const [msg, setMsg] = useState("");
  const [type, SetType] = useState("");
 

  const addToList = () => {
    Axios.post("http://localhost:3001/api/AdminMessage", {
      title: title,
      msg: msg,
      type: type,
      
    });
  };


  const [data, setData] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:3001/api/AdminMessage").then((res) =>
      setData(res.data)
    );
  });

  const idFormatter = (data, row) => {
    return <Link to={`/admin/updateAdminMessage/${data}`}>{data}</Link>;
  };
  const rowStyle = (row, rowIndex) => {
    if (row === "open") {
      return { backgroundColor: "red", text: "bold" };
    }
  };
  const columns = [
    {
      dataField: "_id",
      text: "id",
      formatter: idFormatter,
      style: { backgroundColor: "yellow" },
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
      dataField: "date",
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
      <section id="contact">
        <div className="container my-5 py-5">
          <div className="row mb-5">
            <div className="col-12">
              <h3 className="fs-5 text-center mb-0">Contact Us</h3>
              <h1 className="display-6 text-center mb-4">
                enter new <b>Message?</b>
              </h1>
              <hr className="w-25 mx-auto" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <img src="/assets/contact.jpg" alt="Contact" className="w-75" />
            </div>
            <div className="col-md-6">
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Title
                  </label>
                  <input
                    required
                    type="text"
                    className="form-control"
                    id="Title"
                    placeholder="Title"
                    name="Title"
                    onChange={(event) => {
                      setTitle(event.target.value);
                    }}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    MSG
                  </label>
                  <textarea
                    required
                    type="text"
                    className="form-control"
                    id="msg"
                    placeholder="msg"
                    name="msg"
                    onChange={(event) => {
                      setMsg(event.target.value);
                    }}
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    Type
                  </label>
                  <select
                    required
                    type="text"
                    className="form-control"
                    id="type"
                    placeholder="type"
                    name="type"
                    onChange={(event) => {
                      SetType(event.target.value);
                    }}
                  >
                    <option value="success">success-green</option>
                    <option value="danger">danger-red</option>
                    <option value="warning">warning-yellow</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="btn btn-outline-primary rounded-pill px-4"
                  onClick={addToList}
                >
                  Add New Message <i className="fa fa-paper-plane ms-2"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
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

export default NewAdminMessage;
