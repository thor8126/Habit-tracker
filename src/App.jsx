import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Body from './components/Body';
import './App.css';
import React from 'react'
import { useState } from 'react';


function App() {

  const Habits = [
    {
      id: 0,
      name: "Code Everyday before 12am",
      count: {
        Monday:true,
        Tuesday:true,
        Wednesday:false,
        Thursday:null,
        Friday:null,
        Saturday:null,
        Sunday:null,
      }
    },
    {
      id: 1,
      name: "Exercise Everyday",
      count: {
        Monday:true,
        Tuesday:null,
        Wednesday:null,
        Thursday:null,
        Friday:null,
        Saturday:null,
        Sunday:null,
      }
    }
  ];

  const [form, toggleForm] = useState(false);
  const [habits, setHabits] = useState(Habits);


  const addHabit = (habit) => {
    setHabits([...habits, habit]);
  };

  const deleteHabit = (id) => {
    setHabits(habits.filter((habit) => habit.id !== id));
  };

  const toggle = () => {
      toggleForm(!form);
  }


  const toggleDayFunc = (habitId, day) => {
    setHabits((prevState) => {
      return prevState.map((habit) => {
        if (habit.id === habitId) {
          habit.count[day] = true;
        }
        return habit;
      });
    });
  };

  const toggleDayFunc2 = (habitId, day) => {
    setHabits((prevState) => {
      return prevState.map((habit) => {
        if (habit.id === habitId) {
          habit.count[day] = false;
        }
        return habit;
      });
    });
  };
  


  return (
    <>
      <Header/>
      <Body 
        addform={form}
        toggle={toggle}
        addHabit={addHabit} 
        habits={habits}
        deleteHabit={deleteHabit}
        toggleDayFunc={toggleDayFunc}
        toggleDayFunc2={toggleDayFunc2}
      />
    </>
  )
}

export default App
