import React, { useState, useEffect } from "react";
import axios from "axios";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import "react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css";
import "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css";
import CustomerTable from "../../../components/CustomerTable";

function CustomerList() {

  const [customersSchema, setCustomers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/customers")
      .then((response) => setCustomers(response.data));
  }, []);

  const [search, setSearch] = useState('');

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const data = customersSchema.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
  
  return (
    <>
      <div>
        <input id="search" type="text" placeholder="Search" onChange={handleSearch} />
        <CustomerTable data={data}/>
      </div>
    </>
  );
}

export default CustomerList;
