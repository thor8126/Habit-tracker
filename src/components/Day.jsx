import React from "react";
import Card from "react-bootstrap/Card";


function Day(props) {
  const { day, days, toggleDayFunc ,toggleDayFunc2 } = props;

  const toggleDay = (value) => {
    toggleDayFunc(day, value);
  };

  const toggleDay2 = (value) => {
    toggleDayFunc2(day, value);
  };

  return (
    <Card className="child-card">
      <Card.Body className="card-body ">
        <h5>{day}</h5>
        <div className="d-flex align-items-center justify-content-center">
          <button
            onClick={() => toggleDay(true)}
            style={{ fontSize: "1.3rem" }}
            className={`btn mx-1 ${
              days[day] === true ? "btn-success" : "btn-outline-success"
            }`}>
            <i className="fa-solid fa-check"></i>
          </button>

          <button
            onClick={() => toggleDay2(false)}
            style={{ fontSize: "1.3rem" }}
            className={`btn mx-1 ${
              days[day] === false ? "btn-danger" : "btn-outline-danger"
            }`}>
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Day;
