import Container from "./Container";
import sabiclogo from "../images/sabic-logo.png";
import DateTimePicker from "react-datetime-picker";
import React, { useEffect, useState } from "react";
const Header = () => {
  // const [value, setChange] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  //const [showEnable, setShowEnable] = useState(true);
  const dateFilterList = ["1D", "1W", "1M", "3M", "1Y", "5Y", "CUS"]; // filters

  const [fromDate, setFromDate] = useState(new Date()); // from date State
  const [isDisabled, setDisabled] = useState(true); // disabled state
  const onDateChange = (date) => {
    const dateString = new Date(date).toLocaleString();
    console.log(dateString);
    setFromDate(date);
  };

  const onDateSetChange = (date) => {
    const dateString = new Date(date).toLocaleString();
    console.log(dateString);
    setEndDate(date);
  };
  const onClickDate = (event) => {
    const currentdate = new Date();
    let updatedDate = "";
    let disable = true;
    const dayFilter = event.target.textContent;
    if (dayFilter === "1D") {
      console.log("Clicked 1D");
      updatedDate = new Date(currentdate.setDate(currentdate.getDate() - 1));
    } else if (dayFilter === "1W") {
      console.log("Clicked 1W");
      updatedDate = new Date(currentdate.getTime() - 6 * 24 * 60 * 60 * 1000);
    } else if (dayFilter === "1M") {
      console.log("Clicked 1M");
      updatedDate = new Date(currentdate.setMonth(currentdate.getMonth() - 1));
    } else if (dayFilter === "3M") {
      console.log("Clicked 3M");
      updatedDate = new Date(currentdate.setMonth(currentdate.getMonth() - 3));
    } else if (dayFilter === "1Y") {
      console.log("Clicked 1Y");
      updatedDate = new Date(
        currentdate.setFullYear(currentdate.getFullYear() - 1)
      );
    } else if (dayFilter === "5Y") {
      console.log("Clicked 5Y");
      updatedDate = new Date(
        currentdate.setFullYear(currentdate.getFullYear() - 5)
      );
    } else if (dayFilter === "CUS") {
      //console.log("Clicked CUS");
      disable = false;
      updatedDate = new Date();
    }
    console.log(updatedDate);
    // console.log(disable);
    setDisabled(disable);
    setFromDate(updatedDate);
  };
  return (
    <>
      <div id="header">
        <div class="logo">
          <h3>AHC DASHBOARD</h3>
        </div>
        <div class="middle-h">
          <div id="calendar">
            <div class="c-row1">
              <a href="#" class="data2">
                <DateTimePicker
                  format="dd/M/yyyy HH:mm:ss "
                  onChange={onDateChange}
                  value={fromDate}
                  clearIcon=""
                  disabled={isDisabled}
                  calendarIcon={false}
                />
              </a>
              <div class="slider"></div>
              <a href="#" class="data2">
                <DateTimePicker
                  onChange={(date) => onDateSetChange(date)}
                  format="d/M/yyyy h:mm:ss "
                  value={endDate}
                  clearIcon=""
                  disabled={isDisabled}
                  // minDate={new Date()}
                  //  disabled={showEnable}
                  // disableCalendar="true"
                  calendarIcon={false}
                />
              </a>
            </div>
            <div class="c-row2">
              {dateFilterList &&
                dateFilterList.map((item, index) => (
                  <a href="#" key={index} onClick={onClickDate}>
                    {item}
                  </a>
                ))}
              ;
            </div>
          </div>
        </div>
        <div class="logo-img">
          <img src={sabiclogo} />
        </div>
      </div>
      <div class="header-border"></div>
    </>
  );
};

export default Header;

// import Container from "./Container";
// const Header = () => {
//   return (
//     <Container variant="header">
//       <div class="logo">AHC DECISION SUPPORT SYSTEM PLATFORM</div>
//     </Container>
//   );
// };

// export default Header;
