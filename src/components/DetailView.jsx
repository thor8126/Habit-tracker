import React from "react";
import Day from "./Day";

// weekview , create 7 cards
function DetailView(props) {
  const { habits } = props;

  const days = habits.map((habit) => {
    return habit.count;
  });

  return (
    <>
      <div className="detail-view ">
        <Day day="Monday" days={days} /> 
        <Day day="Tuesday" days={days} />
        <Day day="Wednesday" days={days} />
        <Day day="Thursday" days={days} />
        <Day day="Friday" days={days} />
        <Day day="Saturday" days={days} />
        <Day day="Sunday" days={days} />      
      </div>
    </>
  );
}

export default DetailView;
