import "antd/dist/antd.min.css";
import { DatePicker } from "antd";
import React, { useState } from "react";
import moment from "moment";
import Axios from "axios";

const { RangePicker } = DatePicker;

function DatePickerRange() {
  let startDate;
  let endDate;
  let startDate1;
  let endDate1;
  const [dates, setDates] = useState([]);
  //console.log(dates);

  //save date
  // const [startDate1, setStartDate] = useState(dates[0]);
  // const [endDate1, setEndDate] = useState(dates[1]);

  const addToList = () => {
    Axios.get("http://localhost:3001/api/reports", {
      startDate: startDate,
      endDate: endDate,
    });
  };

  return (
    <>
      <div style={{ margin: 20 }}>
        <RangePicker
          onChange={(values) => {
            setDates(
              values.map((item) => {
                return moment(item).format("YYYY-MM-DD");
              })
            );
          }}
        />

        <button onClick={((startDate = dates[0]), (endDate = dates[1]))}>
          SUbmit
        </button>
        <h1>startDate:{startDate}</h1>
        <h1>EndDate:{endDate}</h1>
        <h1>startDate1:{startDate1}</h1>
        <h1>EndDate1:{endDate1}</h1>
      </div>
      <div>
        <section id="contact">
          <div className="container my-5 py-5">
            <div className="row mb-5">
              <div className="col-12">
                <h3 className="fs-5 text-center mb-0">Service call</h3>
                <h1 className="display-6 text-center mb-4">
                  put <b>Date</b>
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
                      Start Date
                    </label>
                    <input
                      // disabled
                      defaultValue={startDate1}
                      required
                      type="text"
                      className="form-control"
                      id={startDate}
                      placeholder={startDate}
                      name={startDate}
                    />
                  </div>

                  <div className="mb-3">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label"
                    >
                      Email address
                    </label>
                    <input
                      defaultValue={endDate1}
                      required
                      type="text"
                      className="form-control"
                      id={endDate}
                      placeholder={endDate}
                      name={endDate}
                      // onChange={(event) => {
                      //   setEmail(event.target.value);
                      // }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-outline-primary rounded-pill px-4"
                    onClick={addToList}
                  >
                    Open New Customer <i className="fa fa-paper-plane ms-2"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default DatePickerRange;
