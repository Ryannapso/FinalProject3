import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../../App";
import "../../App.css";
//import FileBase64 from "react-file-base64";

const Profile = () => {
  const { userData, setUserData } = useContext(UserContext);
  //const [image, setName] = useState("");

  return (
    <div>
      {/* <h1> User Profile of {userData.user.name}</h1>
      <br />
      <h5>
        <b> User ID: </b>
        {userData.user.id}
      </h5>
      <h5>
        <b> User Name: </b>
        {userData.user.name}
      </h5>
      <h5>
        <b>User Email: </b>
        {userData.user.email}
      </h5>
      <h5>
        <b>Register Date: </b>
        {userData.user.date.toString().slice(0, 10) +
          " @ " +
          userData.user.date.toString().slice(11, 19)}
      </h5>
      <br /> */}
      <div class="container-xl px-4 mt-4">
        <nav class="nav nav-borders">
          {/* <a
            class="nav-link active ms-0"
            href="https://www.bootdey.com/snippets/view/bs5-edit-profile-account-details"
            target="__blank"
          >
            Profile
          </a> */}
          {/* <a
            class="nav-link"
            href="https://www.bootdey.com/snippets/view/bs5-profile-billing-page"
            target="__blank"
          >
            Billing
          </a>
          <a
            class="nav-link"
            href="/"
            target="__blank"
          >
            Security
          </a>
          <a
            class="nav-link"
            href="https://www.bootdey.com/snippets/view/bs5-edit-notifications-page"
            target="__blank"
          >
            Notifications
          </a> */}
        </nav>
        <hr class="mt-0 mb-4" />
        <div class="row">
          <div class="col-xl-4">
            <div class="card mb-4 mb-xl-0">
              <div class="card-header text-center">Profile Picture</div>
              <div class="card-body text-center">
                <img
                  class="img-account-profile rounded-circle mb-2"
                  //src=""
                  alt=""
                />

                <div class="bold font-italic text-muted mb-4">Role text</div>
                {/* 
                <button class="btn btn-primary" type="button">
                  Upload new image
                </button> */}
              </div>
            </div>
          </div>
          <div class="col-xl-8">
            <div class="card mb-4">
              <div class="card-header">Account Details</div>
              <div class="card-body">
                <form>
                <div class="row gx-3 mb-3">
                  <div class="col-md-6">
                    <label class="small mb-1" for="inputUsername">
                      Id
                    </label>
                    <input
                      class="form-control"
                      id="inputUsername"
                      type="text"
                      placeholder="Enter your username"
                      value={userData.user.id}
                    />
                  </div>
                  <div class="col-md-6">
                    <label class="small mb-1" for="inputUsername">
                      Role
                    </label>
                    <input
                      class="form-control"
                      id="role"
                      type="text"
                      placeholder="role"
                      value={userData.user.role}
                    />
                  </div>
                  </div>
                  <div class="row gx-3 mb-3">
                    <div class="col-md-6">
                      <label class="small mb-1" for="inputFirstName">
                        First name
                      </label>
                      <input
                        class="form-control"
                        id="inputFirstName"
                        type="text"
                        placeholder="Enter your first name"
                        value={userData.user.name}
                      />
                    </div>

                    <div class="col-md-6">
                      <label class="small mb-1" for="inputLastName">
                        Last name
                      </label>
                      <input
                        class="form-control"
                        id="inputLastName"
                        type="text"
                        placeholder="Enter your last name"
                        value={userData.user.Lname}
                      />
                    </div>
                  </div>

                  <div class="row gx-3 mb-3">
                    <div class="col-md-6">
                      <label class="small mb-1" for="inputOrgName">
                        Organization name
                      </label>
                      <input
                        class="form-control"
                        id="inputOrgName"
                        type="text"
                        placeholder="Enter your organization name"
                        value="PC SHOP"
                      />
                    </div>

                    <div class="col-md-6">
                      <label class="small mb-1" for="inputLocation">
                        Location
                      </label>
                      <input
                        class="form-control"
                        id="inputLocation"
                        type="text"
                        placeholder="Enter your location"
                        value={userData.user.location}
                      />
                    </div>
                  </div>

                  <div class="mb-3">
                    <label class="small mb-1" for="inputEmailAddress">
                      Email address
                    </label>
                    <input
                      class="form-control"
                      id="inputEmailAddress"
                      type="email"
                      placeholder="Enter your email address"
                      value={userData.user.email}
                    />
                  </div>

                  <div class="row gx-3 mb-3">
                    <div class="col-md-6">
                      <label class="small mb-1" for="inputPhone">
                        Phone number
                      </label>
                      <input
                        class="form-control"
                        id="inputPhone"
                        type="tel"
                        placeholder="Enter your phone number"
                        value={userData.user.phone}
                      />
                    </div>

                    <div class="col-md-6">
                      <label class="small mb-1" for="inputBirthday">
                        Register Date
                      </label>
                      <input
                        class="form-control"
                        id="inputBirthday"
                        type="text"
                        name="birthday"
                        placeholder="Enter your birthday"
                        value={
                          userData.user.date.toString().slice(0, 10) +
                          " @ " +
                          userData.user.date.toString().slice(11, 19)
                        }
                      />
                    </div>
                  </div>

                  {/* <button class="btn btn-primary" type="button">Save changes</button> */}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <form action="">
        <FileBase64
          type="file"
          multiple={false}
          onDone={({ base64 }) => setItem({ ...item, image: base64 })}
        />
        <div className="right-align">
          <button className="btn">submit</button>
        </div>
      </form> */}
    </div>
  );
};

export default Profile;
