import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Body from './components/Body';
import './App.css';
import React from 'react'
import { useState } from 'react';


function App() {

  const Habits = [
    {
      id: 1,
      name: "Reading",
      count: {
        Monday:true,
        Tuesday:false,
        Wednesday:false,
        Thursday:false,
        Friday:false,
        Saturday:false,
        Sunday:false,
      }
    },
    {
      id: 2,
      name: "Running",
      count: {
        Monday:true,
        Tuesday:false,
        Wednesday:false,
        Thursday:false,
        Friday:false,
        Saturday:false,
        Sunday:true,
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

  return (
    <>
      <Header/>
      <Body 
        addform={form}
        toggle={toggle}
        addHabit={addHabit} 
        habits={habits}
        deleteHabit={deleteHabit}
      />
    </>
  )
}

export default App
