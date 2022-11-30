import React, { useState } from "react";
import "../Styles/style.css";

function Test() {
  const [data, setData] = useState();
  const [pop, setPop] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setData((pValue) => {
      return {
        ...pValue,
        [name]: value,
      };
    });
    console.log(data);
  }

  function handleSubmit() {
    setPop(true);
  }

  function handleClose() {
    setData();
    setPop(false);
  }

  return (
    <>
      {pop && (
        <div className="popup-bg">
          <div className="popup">
            <button onClick={handleClose} className="popup-close">
              X
            </button>
            {data && data.name.length > 0 && data.email.length > 0 ? (
              <>
                <h1>Meeting Successfully Scheduled!</h1>
                <h4>Name: {data.name}</h4>
                <h4>Email: {data.email}</h4>
                {data.notes.length > 0 && <h4>Extra Notes: {data.notes}</h4>}
              </>
            ) : (
              <h1>Required fields are Empty</h1>
            )}
          </div>
        </div>
      )}
      <div className="container">
        <div className="details">
          <h4>Vishal Kumar</h4>
          <h2 className="black-font">15 Minutes Meeting</h2>
          <h4 className="details-row">
            <img className="icon" src={require("../images/clock.png")} alt="" />{" "}
            15 min
          </h4>
          <h4 className="details-row">
            <img
              className="icon"
              src={require("../images/calendar.png")}
              alt=""
            />
            9:30AM - 9:45AM, Friday, September 16,2022
          </h4>
          <h4 className="details-row">
            <img
              className="icon"
              src={require("../images/earth3.png")}
              alt=""
            />
            India Standard Time
          </h4>
        </div>

        <div className="form">
          <h2>Enter Details</h2>
          <h4>Name*</h4>{" "}
          <input onChange={handleChange} name="name" type="Name" />
          <h4>Email*</h4>
          <input onChange={handleChange} name="email" type="email" />
          <button className="btn1">Add Guest</button>
          <h4>Please share anything that will help prepare for our meeting</h4>
          <textarea
            onChange={handleChange}
            name="notes"
            cols="30"
            rows="3"
          ></textarea>
          <button onClick={handleSubmit} className="btn2">
            Schedule Event
          </button>
        </div>
      </div>
    </>
  );
}

export default Test;
