import React from 'react'
import Container from 'react-bootstrap/Container';
import List from './List';
import AddHabit from './AddHabit';
import AddForm from './AddForm';
import DetailView from './DetailView';
import {useState} from 'react';

function Body(props) {
    const {addform,toggle,addHabit,habits,deleteHabit,toggleDayFunc,toggleDayFunc2} = props;

    const [detailview,toggleDetailview] = useState(true);

    const toggleDetail = () => {
        toggleDetailview(!detailview);
    }

    const [activeHabit,setActiveHabit] = useState(null);

    const setActiveHabitHandler = (id) => {
        setActiveHabit(id);
        toggleDetail();
    }
  return (
    <>
    {addform ? <AddForm addHabit={addHabit} toggle={toggle} /> : ""}
    <Container className='w-75 border main-body'>
        <hr />
        {detailview ? 
        <>
          <AddHabit toggle={toggle}/>
          <List habits={habits} deleteHabit={deleteHabit} setActiveHabitHandler={setActiveHabitHandler}/>
          <br />
        </>
        :
        <DetailView toggleDayFunc2={toggleDayFunc2} toggleDayFunc={toggleDayFunc} habits={habits} activeHabit={activeHabit} toggleDetail={toggleDetail}/>}
        <br />
    </Container>
    </>
  )
}

export default Body