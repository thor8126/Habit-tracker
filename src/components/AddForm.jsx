import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function AddForm(props) {
  const { toggle, addHabit } = props;

  const [formData, setFormData] = useState({
    name: "",
    count: {
      Monday: null,
      Tuesday: null,
      Wednesday: null,
      Thursday: null,
      Friday: null,
      Saturday: null,
      Sunday: null,
    }
  });

  const toggleForm = () => {
    toggle();
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addHabit(formData);
    toggleForm();
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      id: Math.random(),
      name: e.target.value,
    });
  }

  return (
    <div className='addform-bg'>
      <Container className='mt-4 d-flex align-items-center justify-content-center add-form'>
        <div className='position-absolute top-0 end-0 p-2 cursor-pointer' onClick={toggleForm}>Close</div>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" placeholder="Enter a Habit" onChange={handleChange} />
          </Form.Group>
          <br />
          <Button variant="primary" type="submit">
            Add Habit
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default AddForm;
