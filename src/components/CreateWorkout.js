
import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import WorkoutPage from './WorkoutPage'

export class CreateWorkout extends Component {

  state = {
    workoutDate: '',
    workoutLength: ''
  }

  editForm = (event) => {
    
    this.setState({
      workoutDate: event.target.value,
      workoutLength: event.target.value
    })
  }
  
  
  
  handleSubmit = (event) => {
    event.preventDefault()
// fetch(`http://localhost:3000/users`, {
//   method:'POST',
//   headers: { 
//      'Content-type': 'application/json'
//     },
//     body: JSON.stringify({
 
//     })
//   })
}



    render() {
        return (
            <div>
                <Form onSubmit={(event) => this.handleSubmit(event)} > 
  <Form.Group controlId="formWorkout" >
    <Form.Label>Date</Form.Label>
    <Form.Control type="text" placeholder="01.01.2020" onChange={(event) => this.editForm(event)}/>
    <Form.Text className="text-muted">
     date of workout
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>length of workout</Form.Label>
    <Form.Control type="workout-length" placeholder="minutes" onChange={(event) => this.editForm(event)} />
  </Form.Group>
  <Button variant="dark" type="submit" >
    Submit
  </Button>
</Form>

<WorkoutPage />
            </div>
        )
    }
}

export default CreateWorkout
