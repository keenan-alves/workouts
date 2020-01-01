import React, { Component } from 'react'
import Table from 'react-bootstrap/Table'
import ExerciseForm from './ExerciseForm'

export class WorkoutTable extends Component {

    state = {
        workoutExercises: []
    }




    render() {
        
         //debugger 
        return (
            <div>
                <br/>
                <Table striped bordered hover variant="dark">
                <thead>
                    
                </thead>
                <tbody>
                    <tr>
                    <tr>
                    <th onClick={() => console.log('changing')}>Exercise</th>
                    <th>Weight Used</th>
                    <th>Sets</th>
                    <th>Reps</th>
                    </tr>{
                       
                       this.props.workout[0].exercises.map(exercise => 
                            <tr>
                        <th>{exercise.name}</th>
                        <th>{exercise.weight_used}</th>
                        <th>{exercise.sets}</th>
                        <th>{exercise.reps}</th>
                        </tr>
                        
                        )  
                    }</tr>
                </tbody>
                </Table>
                <ExerciseForm ids={this.props.workout[0].exercises.map(exercise => exercise.workout_id)}/>
                
            </div>
        )
    }
}

export default WorkoutTable
