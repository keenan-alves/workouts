import React, { Component } from 'react'
import Table from 'react-bootstrap/Table'
import WorkoutTable from './WorkoutTable'
import ExerciseForm from './ExerciseForm'
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBRow } from 'mdbreact';

export class WorkoutIndex extends Component {
   
    state = {
        showExercises: false,
        clickedWorkout: []
    }


   showExercises = (workout) => {
    let workoutState = [...this.state.clickedWorkout]
    let index = workoutState.indexOf(workout)
    workoutState.splice(index, 1)
       this.setState({
           showExercises: !this.state.showExercises,
           clickedWorkout: [workout, ...workoutState]
       })
   }

   
    render() {
         console.log(this.props.workouts.map(workout => workout.exercises.map(exercise => exercise.workout_id)))
        return (
            <div>
                <br/>
                <Table striped bordered hover variant="dark">
                <tbody>
                    <tr>
                    <MDBCol>
                        <MDBRow>
                         {this.props.workouts.map(workout => <th onClick={() => this.showExercises(workout)}>workout: {workout.date} <MDBBtn color="light">view</MDBBtn></th>)}
                        </MDBRow>
                    </MDBCol>   
                    </tr>
                </tbody>
                </Table>
                {this.state.showExercises ? <WorkoutTable workout={this.state.clickedWorkout} /> : null }
                {/* {this.state.showExercises ? this.props.workouts.map(workout => workout.exercises.map(exercise => <WorkoutTable key={exercise.workout_id} exercises={exercise}/>)) : null } */}
            </div>
        )
    }
}

export default WorkoutIndex