import React from 'react'
import Listitem from './Listitem'
const {useEffect, useState} = React;

function List(props) {
    const {habits} = props;

  return (
    <>
        {habits.map((habit) => {
            return <Listitem key={habit.id} habit={habit.name} count={habit.count}/>
        })
        }
    </>
  )
}

export default List