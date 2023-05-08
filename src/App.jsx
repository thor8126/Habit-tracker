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
      count: 0,
    },
    {
      id: 2,
      name: "Running",
      count: 0,
    }
  ];

  const [form, toggleForm] = useState(false);
  const [habits, setHabits] = useState(Habits);


  const addHabit = (habit) => {
    setHabits([...habits, habit]);
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
      />
    </>
  )
}

export default App
