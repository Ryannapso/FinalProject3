import React, { useContext } from "react";
import { UserContext } from "../../App";
import "../../App.css";

const Profile = () => {
  const { userData } = useContext(UserContext);

  return (
    <div>
      <div class="container-xl px-4 mt-4">
        <nav class="nav nav-borders"></nav>
        <hr class="mt-0 mb-4" />
        <div class="row">
          <div class="col-xl-4">
            <div class="card mb-4 mb-xl-0">
              <div class="card-header text-center">Profile Picture</div>
              <div class="card-body text-center">
                <img class="img-account-profile rounded-circle mb-2" alt="" />

                <div class="bold font-italic text-muted mb-4">Role text</div>
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
                        // value={
                        //   userData.user.date.toString().slice(0, 10) +
                        //   " @ " +
                        //   userData.user.date.toString().slice(11, 19)
                        // }
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
