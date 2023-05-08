import React from 'react'
import Container from 'react-bootstrap/Container';

function AddHabit(props) {
    const {toggle} = props;

    const toggleForm = () => {
        toggle();
    }
  return (
    <>
        <Container className='mt-4 d-flex align-items-center justify-content-end'>
                <button onClick={toggleForm} className="btn btn-primary">Add Habit</button>
        </Container>
    </>
  )
}

export default AddHabit