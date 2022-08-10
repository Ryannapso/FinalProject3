import "./App.css";
import axios from "axios";
import { createContext, useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Dashboard from "./components/Dashboard";
import UpdateMsg2 from "./components/UpdateMsg2";
import MessageList2 from "./components/MessageList2";

import Profile from "./components/auth/Profile";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";

import UpdateUser from "./components/UpdateUser";

//cr
import MessageList from "./pages/CR/MessageList";
import NewCustomer from "./pages/CR/Customers/NewCustomer";
import CustomersList from "./pages/CR/Customers/CustomersList";
import SearchCustomer from "./pages/CR/Customers/SearchCustomer";
import SearchCustomer2 from "./pages/CR/Customers/SearchCustomer2";
import CloseTicket from "./pages/CR/ServiceCall/CloseTicket";
import NewTicket from "./pages/CR/ServiceCall/NewTicket";
import UpdateTicket from "./pages/CR/ServiceCall/UpdateTicket";
import TicketList from "./pages/CR/ServiceCall/TicketList";
//lab
import BuildPc from "./pages/Lab/BuildPc";
import Pc from "./pages/Lab/Pc";
import Phone from "./pages/Lab/Phone";
//admin

import NewEmployees from "./pages/Admin/NewEmployees.jsx";
import MainPageMessages from "./pages/Admin/MainPageMessages";
import NewAdminMessage from "./pages/Admin/NewAdminMessage";
import Reports from "./pages/Admin/Reports";
import UserList from "./pages/Admin/UserList";

//import Header from "./test/Header";

//like global var
export const UserContext = createContext();

function App() {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });
  //every time user send a request token will
  useEffect(() => {
    const isLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");
      if (token == null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }

      const tokenResponse = await axios.post(
        "http://localhost:3001/api/users/tokenIsValid",
        null,
        { headers: { "auth-token": token } }
      );

      console.log(tokenResponse.data);
      if (tokenResponse.data) {
        const userResponse = await axios.get(
          "http://localhost:3001/api/users/profile",
          { headers: { "auth-token": token } }
        );
        setUserData({
          token: token,
          user: userResponse.data,
        });
      }
    };
    isLoggedIn();
  }, []);

  return (
    <>
      <UserContext.Provider value={{ userData, setUserData }}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/messageList2" element={<MessageList2 />} />
          {/* <Route path="/userList" element={<UserList />} /> */}
          <Route path="/updateUser/:id" element={<UpdateUser />} />
          <Route path="/updateMsg2/:id" element={<UpdateMsg2 />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />

          {/* cr */}
          <Route path="/messageList" element={<MessageList />} />
          <Route path="/newCustomer" element={<NewCustomer />} />
          <Route path="/customersList" element={<CustomersList />} />
          <Route path="/searchCustomer" element={<SearchCustomer />} />
          <Route path="/searchCustomer2" element={<SearchCustomer2 />} />
          <Route path="/serviceCall/closeTicket" element={<CloseTicket />} />
          <Route path="/serviceCall/newTicket" element={<NewTicket />} />
          <Route
            path="/serviceCall/updateTicket/:id"
            element={<UpdateTicket />}
          />
          <Route path="/serviceCall/ticketList" element={<TicketList />} />
          {/* Lab */}
          <Route path="/lab/buildPc" element={<BuildPc />} />
          <Route path="/lab/pc" element={<Pc />} />
          <Route path="/lab/phone" element={<Phone />} />

          {/* Admin */}
          <Route path="/admin/userList" element={<UserList />} />
          <Route
            path="/admin/mainPageMessages"
            element={<MainPageMessages />}
          />
          <Route path="/admin/newAdminMessages" element={<NewAdminMessage />} />
          <Route path="/admin/reports" element={<Reports />} />
          <Route path="/admin/NewEmployees" element={<NewEmployees />} />
        </Routes>
        <Footer />
      </UserContext.Provider>
    </>
  );
}

export default App;
