import React, { useState } from "react";
import axios from "axios";

//fruit = msg
const NewMsg = () => {
  const [msg, setMsg] = useState({
    name: "",
    amount: "",
    info: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const newMsg = {
      name: msg.name,
      email: msg.email,
      message: msg.message,
    };

    axios
      .post("http://localhost:3001/api/message", newMsg)
      .then((res) => console.log(res.data));

    setMsg({
      name: "",
      email: "",
      message: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMsg((oldMsg) => {
      return {
        ...oldMsg,
        [name]: value,
      };
    });
  };

  return (
    <div>
      <h1>Add msg here</h1>
      <form onSubmit={handleSubmit}>
        <label> Name: </label>
        <input
          type="text"
          name="name"
          value={msg.name}
          required
          onChange={handleChange}
        />
        <br />
        <label>email: </label>
        <input
          type="text"
          name="email"
          value={msg.email}
          onChange={handleChange}
        />
        <br />
        <label>message </label>
        <input
          type="text"
          name="message"
          value={msg.message}
          onChange={handleChange}
        />
        <br />
        <input type="submit" value="Add msg!" />
      </form>
    </div>
  );
};

export default NewMsg;
