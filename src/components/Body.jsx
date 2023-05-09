import React from 'react'
import Container from 'react-bootstrap/Container';
import List from './List';
import AddHabit from './AddHabit';
import AddForm from './AddForm';
import DetailView from './DetailView';

function Body(props) {
    const {addform,toggle,addHabit,habits,deleteHabit} = props;
  return (
    <>
    {addform ? <AddForm addHabit={addHabit} toggle={toggle} /> : ""}
    <Container className='w-75 border main-body'>
        <AddHabit toggle={toggle}/>
        <hr />
        <List habits={habits} deleteHabit={deleteHabit}/>
        <br />
        <DetailView habits={habits}/> 
        <br />
    </Container>
    </>
  )
}

export default Body