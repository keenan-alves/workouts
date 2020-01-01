import React, { Component } from 'react'
import InputGroup from 'react-bootstrap/InputGroup'
import ExerciseForm from './ExerciseForm'
import WorkoutTable from './WorkoutTable'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table'

export class WorkoutPage extends Component {

    state = {
        exercise: '',
        weight: '',
        reps: '',
        sets: '',
        date: ''
    }

    
    handleExercise = (evt) => {
        console.log('exercise change')
        this.setState({
            exercise: evt.target.value
        })
    }
    
    handleWeight = (evt) => {
        console.log('weight used')
        this.setState({
            weight: evt.target.value
        })
    }
    
    handleReps = (evt) => {
        console.log('reps done')
        this.setState({
            reps: evt.target.value 
        })
    }
    
    handleSets = (evt) => {
        console.log('sets done')
        this.setState({
            sets: evt.target.value
        })
    }
    
    handleDate = (evt) => {
        console.log('workout date')
        this.setState({
            date: evt.target.value 
        })
    }
    
    
        handleSubmit = (event) => {
           // console.log('add exercise to table', this.state) 
            event.preventDefault(event.target)
    

            fetch(`http://localhost:3000/exercises`, {
              method:'POST',
             headers: { 
                 'Content-type': 'application/json'
             },
             body: JSON.stringify({
   
                            
                            weight_used: this.state.weight,
                            reps: this.state.reps,
                            sets: this.state.sets,
                            name: this.state.exercise,
                            workout_id: 1
  
              })
            })
        }
    


    render() {
        return (
            <div>
                <h1>Current Workout</h1>

                

                <Container>
                    <Form onSubmit={(event) => this.handleSubmit(event)}>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formExercise" value={this.state.exercise} onChange={(evt) => this.handleExercise(evt)} >
                        <Form.Label>Exercise</Form.Label>
                        <Form.Control type="text" placeholder="Exercise Name" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formWeight" value={this.state.weight} onChange={(evt) => this.handleWeight(evt)} >
                        <Form.Label>Weight Used</Form.Label>
                        <Form.Control type="text" placeholder="Weight In lbs" />
                        </Form.Group>
                    </Form.Row>

                    <Form.Group controlId="formReps" value={this.state.reps} onChange={(evt) => this.handleReps(evt)}>
                        <Form.Label>Reps</Form.Label>
                        <Form.Control placeholder="#" />
                    </Form.Group>

                    <Form.Group controlId="formSets" value={this.state.sets} onChange={(evt) => this.handleSets(evt)}>
                        <Form.Label>Sets</Form.Label>
                        <Form.Control placeholder="#" />
                    </Form.Group>

                    <Form.Group controlId="formDate" value={this.state.date} onChange={(evt) => this.handleDate(evt)}>
                        <Form.Label>Date</Form.Label>
                        <Form.Control placeholder="01.01.2020" />
                    </Form.Group>

                    <Button variant="dark" type="submit" value="Submit">
                        Submit
                    </Button>
                    </Form>

                    {/* <WorkoutTable exercise={this.state.exercise} weight={this.state.weight} reps={this.state.reps} sets={this.state.sets} date={this.state.date}/> */}
                    
                </Container>

                
            </div>
        )
    }
}

export default WorkoutPage
