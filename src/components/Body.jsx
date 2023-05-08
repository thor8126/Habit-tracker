import React from 'react'
import Container from 'react-bootstrap/Container';
import List from './List';
import AddHabit from './AddHabit';
import AddForm from './AddForm';

function Body(props) {
    const {addform,toggle,addHabit,habits} = props;
  return (
    <>
    {addform ? <AddForm addHabit={addHabit} toggle={toggle} /> : ""}
    <Container className='w-75 border main-body'>
        <AddHabit toggle={toggle}/>
        <hr />
        <List habits={habits}/>
    </Container>
    </>
  )
}

export default Body