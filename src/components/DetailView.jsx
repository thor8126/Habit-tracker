import React from "react";
import Day from "./Day";

// weekview , create 7 cards
function DetailView(props) {
  const { habits, toggleDetail, activeHabit, toggleDayFunc, toggleDayFunc2 } = props;

  const habit = habits.filter((habit) => habit.id === activeHabit)[0];

  const days = habit.count;

  return (
    <>
      <h3 className="text-center">{habit.name}</h3>
      <div className="detail-view">
        <Day
          day="Monday"
          days={days}
          toggleDayFunc={() => toggleDayFunc(habit.id, "Monday")}
          toggleDayFunc2={() => toggleDayFunc2(habit.id, "Monday")}
        />
        <Day
          day="Tuesday"
          days={days}
          toggleDayFunc={() => toggleDayFunc(habit.id, "Tuesday")}
          toggleDayFunc2={() => toggleDayFunc2(habit.id, "Tuesday")}
        />
        <Day
          day="Wednesday"
          days={days}
          toggleDayFunc={() => toggleDayFunc(habit.id, "Wednesday")}
          toggleDayFunc2={() => toggleDayFunc2(habit.id, "Wednesday")}
        />
        <Day
          day="Thursday"
          days={days}
          toggleDayFunc={() => toggleDayFunc(habit.id, "Thursday")}
          toggleDayFunc2={() => toggleDayFunc2(habit.id, "Thursday")}
        />
        <Day
          day="Friday"
          days={days}
          toggleDayFunc={() => toggleDayFunc(habit.id, "Friday")}
          toggleDayFunc2={() => toggleDayFunc2(habit.id, "Friday")}
        />
        <Day
          day="Saturday"
          days={days}
          toggleDayFunc={() => toggleDayFunc(habit.id, "Saturday")}
          toggleDayFunc2={() => toggleDayFunc2(habit.id, "Saturday")}
        />
        <Day
          day="Sunday"
          days={days}
          toggleDayFunc={() => toggleDayFunc(habit.id, "Sunday")}
          toggleDayFunc2={() => toggleDayFunc2(habit.id, "Sunday")}
        />
      </div>
      <br />

      <div className="d-flex justify-content-end">
        <button onClick={toggleDetail} className="btn btn-primary">
          Back to List
        </button>
      </div>

      <br />
      <p className="d-flex justify-content-center align-items-center">
        <button className="btn btn-success">&nbsp; &nbsp;</button> &nbsp;:&nbsp;{" "}
        <span>For Completion on that particular day.</span>
        <br />
        <button className="btn btn-danger">
          &nbsp; &nbsp;
        </button> &nbsp;:&nbsp;{" "}
        <span>For Not Completion on that particular day.</span>
      </p>
    </>
  );
}

export default DetailView;
