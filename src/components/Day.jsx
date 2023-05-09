import React from "react";
import Card from "react-bootstrap/Card";

function Day(props) {
    const {day,days} = props;
    console.log(days);
  return (
    <Card className="child">
              <Card.Body className="">
                <h5>{day}</h5>
                <div className="d-flex align-items-center justify-content-center mt-3">
                  <button
                    style={{ color: "", fontSize: "1.3rem" }}
                    className={`btn ${
                      days.Monday ? "btn-success" : "btn-outline-success"
                    }`}>
                    <i className="fa-solid fa-check"></i>
                  </button>

                  <button
                    style={{ color: "", fontSize: "1.3rem" }}
                    className={`btn ${
                      !days.Monday ? "btn-danger" : "btn-outline-danger"
                    }`}>
                    <i className="fa-solid fa-xmark"></i>
                  </button>
                </div>
              </Card.Body>
            </Card>
  )
}

export default Day