import React, { useEffect, useState, useRef } from "react";
import { Table, Button } from "react-bootstrap";
import Axios from "axios";


function MessageList(props) {
  const [messageList, SetMsgList] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:3001/messages").then((response) => {
      SetMsgList(response.data);
    });
  }, []);

  //put/update
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, SetMessage] = useState("");

  const updateName = (id) => {
    Axios.put("http://localhost:3001/messages", {
      id: id,
      name: name,
      email: email,
      message: message,
    });
  };

  //put update

  if (messageList.length === 0) {
    return <h1>loading data</h1>;
  } else {
    return (
      <form>
        <div className="App">
          <h2> there are {messageList.length} post in the Database </h2>
          <Table striped bordered hover variant="">
            <thead>
              <tr>
                <th>new name</th>
                <th>email</th>
                <th>Message</th>
                <th>action</th>
              </tr>
            </thead>
            <tbody>
              {messageList.map((item, key) => {
                return (
                  <tr>
                    <td>
                      <input
                        id="name"
                        required
                        onChange={(event) => {
                          setName(event.target.value);
                        }}
                        placeholder={item.name}
                        type="text"
                      ></input>
                    </td>

                    <td>
                      {" "}
                      <input
                        type="text"
                        placeholder={item.email}
                        onChange={(event) => {
                          setEmail(event.target.value);
                        }}
                      ></input>{" "}
                    </td>

                    <td>
                      <input
                        type="text"
                        placeholder={item.message}
                        onChange={(event) => {
                          SetMessage(event.target.value);
                        }}
                      ></input>
                    </td>
                    <td>
                      <Button
                        type="submit"
                        onClick={() => {
                          updateName(item._id);
                        }}
                        variant="primary"
                      >
                        Update
                      </Button>

                      <Button variant="danger">Delete</Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </form>
    );
  }
}

export default MessageList;
