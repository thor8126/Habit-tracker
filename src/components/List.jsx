import React from 'react';
import Listitem from './Listitem';
import { useState } from 'react';
import { useEffect } from 'react';

function List(props) {
  const { habits, deleteHabit, setActiveHabitHandler } = props;
  
  return (
    <>
      {habits.map((habit) => {
        return (
          <Listitem
            name={habit.name}
            key={habit.id}
            id={habit.id}
            count={habit.count}
            setActiveHabitHandler={setActiveHabitHandler}
            deleteHabit={deleteHabit}
          />
        );
      })}
    </>
  );
}

export default List;
