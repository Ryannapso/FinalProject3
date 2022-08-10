import React, { useContext } from "react";
import MainPageMessages from ".././pages/Admin/MainPageMessages";
import "../App.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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
  FaListAlt,
  CgUserList,
} from "react-icons/fa";

import { UserContext } from "../App";

const Dashboard = () => {
  const { userData, setUserData } = useContext(UserContext);
  return (
    <div id="sidebar">
      {/* <h2 className="text-center">
        {" "}
        <h3>Welcome {userData.user.name} </h3>
      </h2> */}
      <div>
        <Row>
          <Col sm={5}>
            <ProSidebar className="fixed-left" >
              <Menu iconShape="square">
                {userData.user.role === "admin" ||
                userData.user.role === "cr" ? (
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

                      {/* <MenuItem icon={<FaSearch />}>
                  Search Customer <Link to="/searchCustomer" />
                </MenuItem> */}
                    </SubMenu>

                    <SubMenu title="Service Call" icon={<FaCalendarAlt />}>
                      <MenuItem icon={<FaListAlt />}>
                        Ticket lists <Link to="/serviceCall/ticketList" />
                      </MenuItem>

                      <MenuItem icon={<FaCalendarPlus />}>
                        new Ticket
                        <Link to="/serviceCall/newTicket" />{" "}
                      </MenuItem>

                      {/* <MenuItem icon={<FaCalendarCheck />}>
                  Update Ticket <Link to="/serviceCall/updateTicket" />
                </MenuItem> */}

                      {/* <MenuItem icon={<FaCalendarTimes />}>
                  Close Ticket <Link to="/serviceCall/closeTicket" />
                </MenuItem> */}
                    </SubMenu>
                  </div>
                ) : (
                  console.log("only admin or cr")
                )}

                {userData.user.role === "admin" ||
                userData.user.role === "tech" ? (
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
                      <MenuItem icon={<FaRegEdit />}>
                        Main Page Messages <Link to="/admin/newAdminMessages" />
                      </MenuItem>
                      <MenuItem icon={<FaPoll />}>
                        Reports <Link to="/admin/reports" />
                      </MenuItem>
                      <MenuItem icon={<FaListAlt />}>
                        User List <Link to="/admin/userList" />
                      </MenuItem>
                    </SubMenu>
                  </>
                ) : (
                  console.log("Only Admin")
                )}
              </Menu>
            </ProSidebar>
            ;
          </Col>
          <Col sm={3}>
            <MainPageMessages />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Dashboard;
