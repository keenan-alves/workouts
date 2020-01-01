import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import WorkoutTable from './WorkoutTable'
import Form from 'react-bootstrap/Form'


export class ExerciseForm extends Component {


  state = {
    exercise: '',
    weight_used: '',
    reps: '',
    sets: ''
  }


  handleSubmit = (event) => {
    event.preventDefault()
    let workId = this.props.ids.find(id => id === id)
    // all exercises that belong to a specific workout have the same workout id based on backend 
    console.log(this.state)
    fetch(`http://localhost:3000/workouts/${workId}`, {
      method:'POST',
     headers: { 
         'Content-type': 'application/json'
     },
     body: JSON.stringify({
      exercises: [
        {
          weight_used: this.state.weight_used,
          reps: this.state.reps,
          sets: this.state.sets,
          name: this.state.exercise
        },
      ],
      })
    })
  }
  
  render() {
   

    return (
      <div>
  <h1>Add Another Exercise</h1> 
<Container>
<Form onSubmit={this.handleSubmit}>
  <Form.Row>
    <Form.Group as={Col} controlId="formExercise">
      <Form.Label>Exercise</Form.Label>
      <Form.Control type="text" placeholder="Exercise Name" onChange={(event) => this.setState({
        exercise: event.target.value
      })}/>
    </Form.Group>

    <Form.Group as={Col} controlId="formWeight">
      <Form.Label>Weight Used</Form.Label>
      <Form.Control type="text" placeholder="Weight In lbs" onChange={(event) => this.setState({
        weight_used: event.target.value 
      })} />
    </Form.Group>
  </Form.Row>

  <Form.Group controlId="formReps">
    <Form.Label>Reps</Form.Label>
    <Form.Control placeholder="#" onChange={(event) => this.setState({
      reps: event.target.value 
    })}/>
  </Form.Group>

  <Form.Group controlId="formSets">
    <Form.Label>Sets</Form.Label>
    <Form.Control placeholder="#" onChange={(event) => this.setState({
      sets: event.target.value
    })}/>
  </Form.Group>

  <Button variant="dark" type="submit" >
    Submit
  </Button>
</Form>
 
</Container>


        
      </div>
    )
  }
}

export default ExerciseForm
