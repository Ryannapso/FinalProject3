import React, { useContext } from "react";

import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { SidebarHeader } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import {
  FaCalendarAlt,
  FaCalendarCheck,
  FaCalendarPlus,
  FaCalendarTimes,
  FaEnvelope,
  FaLaptop,
  FaLaptopMedical,
  FaMobileAlt,
  FaPoll,
  FaRegEdit,
  FaRegSun,
  FaSearch,
  FaUser,
  FaUserPlus,
  FaUsers,
  FaUserTie,
} from "react-icons/fa";

import { UserContext } from "../App";

const Dashboard = () => {
  const { userData, setUserData } = useContext(UserContext);
  return (
    <div>
      {/* <div className="container-fluid mb-5">
        <div className="row">
          <nav
            id="sidebarMenu"
            className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
          >
            <div className="position-sticky pt-3">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <NavLink
                    className="nav-link active"
                    aria-current="page"
                    to="/dashboard"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="feather feather-home"
                      aria-hidden="true"
                    >
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                      <polyline points="9 22 9 12 15 12 15 22"></polyline>
                    </svg>
                    Dashboard
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link" to="/messageList2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="50"
                      height="50"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="feather feather-file"
                      aria-hidden="true"
                    >
                      <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
                      <polyline points="13 2 13 9 20 9"></polyline>
                    </svg>
                    Message List
                  </NavLink>
                </li>

                {userData.user.role === "admin" ? (
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/userList">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="feather feather-users"
                        aria-hidden="true"
                      >
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                      </svg>
                      Users
                    </NavLink>
                  </li>
                ) : (
                  console.log(userData.user.role)
                )}
                <li className="nav-item">
                  <NavLink className="nav-link" to="#">
                    <i
                      class="fa fa-calendar-plus-o me-2 fa-4x"
                      aria-hidden="true"
                    ></i>
                    Ticket
                  </NavLink>
                </li>
              </ul>
            </div>
          </nav>

          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div className="chartjs-size-monitor">
              <div className="chartjs-size-monitor-expand">
                <div className=""></div>
              </div>
              <div className="chartjs-size-monitor-shrink">
                <div className=""></div>
              </div>
            </div>

            <h2 className="text-center">
              {" "}
              <h3>Welcome back {userData.user.name}</h3>
            </h2>
          </main>
        </div>
      </div> */}
      <h2 className="text-center">
        {" "}
        <h3>Welcome {userData.user.name} </h3>
      </h2>
      <ProSidebar>
        <Menu iconShape="square">
          {userData.user.role === "admin" || userData.user.role === "cr" ? (
            <div>
              <SidebarHeader> CR</SidebarHeader>

              <MenuItem icon={<FaEnvelope />}>Message List</MenuItem>
              <Link to="/messageList" />

              <SubMenu title="Customers" icon={<FaUser />}>
                <MenuItem icon={<FaUserPlus />}>
                  new Customer <Link to="/newCustomer" />
                </MenuItem>
                <MenuItem icon={<FaUserPlus />}>
                  Customers Lists <Link to="/customersList" />
                </MenuItem>

                <MenuItem icon={<FaSearch />}>
                  Search Customer <Link to="/searchCustomer" />
                </MenuItem>
              </SubMenu>

              <SubMenu title="Service Call" icon={<FaCalendarAlt />}>
              <MenuItem icon={<FaCalendarTimes />}>
                 Ticket lists <Link to="/serviceCall/ticketList" />
                </MenuItem>

                <MenuItem icon={<FaCalendarPlus />}>
                  new Ticket
                  <Link to="/serviceCall/newTicket" />{" "}
                </MenuItem>

                <MenuItem icon={<FaCalendarCheck />}>
                  Update Ticket <Link to="/serviceCall/updateTicket" />
                </MenuItem>

                <MenuItem icon={<FaCalendarTimes />}>
                  Close Ticket <Link to="/serviceCall/closeTicket" />
                </MenuItem>
              </SubMenu>
            </div>
          ) : (
            console.log("only admin or cr")
          )}

          {userData.user.role === "admin" || userData.user.role === "tech" ? (
            <>
              <SidebarHeader> LAB</SidebarHeader>
              <SubMenu title="lab" icon={<FaRegSun />}>
                <MenuItem icon={<FaLaptop />}>
                  PC <Link to="/lab/pc" />
                </MenuItem>
                <MenuItem icon={<FaMobileAlt />}>
                  Phone <Link to="/lab/phone" />
                </MenuItem>
                <MenuItem icon={<FaLaptopMedical />}>
                  Build PC <Link to="/lab/buildPc" />
                </MenuItem>
              </SubMenu>
            </>
          ) : (
            console.log("only admin or tech")
          )}

          {userData.user.role === "admin" ? (
            <>
              <SidebarHeader> Admin</SidebarHeader>
              <SubMenu title="Admin" icon={<FaUserTie />}>
                <MenuItem icon={<FaUsers />}>
                  Employees List <Link to="/admin/employeesList" />
                </MenuItem>
                <MenuItem icon={<FaRegEdit />}>
                  Main Page Messages <Link to="/admin/mainPageMessages" />
                </MenuItem>
                <MenuItem icon={<FaPoll />}>
                  Reports <Link to="/admin/reports" />
                </MenuItem>
                <MenuItem icon={<FaPoll />}>
                  User List <Link to="/userList" />
                </MenuItem>
              </SubMenu>
            </>
          ) : (
            console.log("Only Admin")
          )}
        </Menu>
      </ProSidebar>
      ;
    </div>
  );
};

export default Dashboard;
