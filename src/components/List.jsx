import React from 'react'
import Listitem from './Listitem'
const {useEffect, useState} = React;

function List(props) {
    const {habits,deleteHabit} = props;

  return (
    <>
        {habits.map((habit) => {
            return <Listitem key={habit.id} habit={habit.name} count={habit.count} deleteHabit={deleteHabit} id={habit.id}/>
        })
        }
    </>
  )
}

export default List