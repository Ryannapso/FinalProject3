import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useLinkClickHandler } from "react-router-dom";
import { Table, Button, Form } from "react-bootstrap";
import SearchBar from "./SearchBar";

const filterUsers = searchValue=>{
  if(searchValue===''){return
  }
}


const UserList = () => {
  const [userSchema, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/users")
      .then((response) => setUsers(response.data));
  }, []);

  //search bar

  const [searchValue, setSearchValue] = useState("");
  //console.log('searchValue', searchValue)
  useEffect(() => {
    console.log('searchValue was changed')
  }, [searchValue]);

  return (
    <div>
      <h2> there are {userSchema.length} post in the Database </h2>
      <SearchBar callback={(searchValue) => setSearchValue(searchValue)} />

      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            {/* <th>id</th> */}
            <th>id</th>
            <th>name</th>
            <th>email</th>
            <th>date</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {userSchema.map((msg) => {
            return (
              <tr>
                <td>{msg._id}</td>
                <td>{msg.name}</td>
                <td>{msg.email}</td>
                <td>{msg.date}</td>
                <Link key={msg._id} to={`/updateUser/${msg._id}`}>
                  <Button> Update</Button>
                </Link>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default UserList;
