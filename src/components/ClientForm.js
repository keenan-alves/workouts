import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

export class ClientForm extends Component {


    state = {
        name: '',
        age: '',
        height: '',
        weight: '',
        bodyfat: '',
        date: '',
        length: '',
        exercise1: '',
        exercise2: '',
        exercise3: ''  
    }

    
    handleSubmit = (event) => {
        event.preventDefault()
        fetch(`http://localhost:3000/users`, {
          method:'POST',
         headers: { 
             'Content-type': 'application/json'
         },
         body: JSON.stringify({

                "name": this.state.name,
                "age": this.state.age,
                "height": this.state.height,
                "weight": this.state.weight,
                "bodyfat": this.state.bodyfat,
                "workouts": [
                  {
                    "date": this.state.date,
                    "length": this.state.length,
                    "exercises": [
                      {
                        "weight_used": this.state.weight,
                        "reps": 10,
                        "sets": 3,
                        "name": this.state.exercise1,
                       
                      },
                      {
                        "id": 2,
                        "weight_used": this.state.weight,
                        "reps": 8,
                        "sets": 5,
                        "name": this.state.exercise2,
                      },
                      {
                        "id": 3,
                        "weight_used": 135,
                        "reps": 12,
                        "sets": 4,
                        "name": this.state.exercise3
                      }
                    ]
                  },
                ]
            })
         })
     }



    render() {
        return (
            <div>
                  <h1>Add A Client</h1> 
                  <h5>new clients receive a consultation session</h5>
                  <br/>
                        <Container>
                        <Form onSubmit={(event) => this.handleSubmit(event)}>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>name</Form.Label>
                            <Form.Control type="name" placeholder="name" onChange={(event) => this.setState({
                                name: event.target.value 
                            })}/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>age</Form.Label>
                            <Form.Control type="age" placeholder="age" onChange={(event) => this.setState({
                                age: event.target.value 
                            })}/>
                            </Form.Group>
                        </Form.Row>

                        <Form.Group controlId="height">
                            <Form.Label>height</Form.Label>
                            <Form.Control placeholder="height" onChange={(event) => this.setState({
                                height: event.target.value 
                            })} />
                        </Form.Group>

                        <Form.Group controlId="weight">
                            <Form.Label>weight</Form.Label>
                            <Form.Control placeholder="weight" onChange={(event) => this.setState({
                                weight: event.target.value 
                            })} />
                        </Form.Group>

                        <Form.Group controlId="bodyfat">
                            <Form.Label>bodyfat</Form.Label>
                            <Form.Control placeholder="weight" onChange={(event) => this.setState({
                                bodyfat: event.target.value 
                            })} />
                        </Form.Group>

                            <Form.Row>
                                
                            <Form.Group as={Col} controlId="formDate">
                            <Form.Label>date</Form.Label>
                            <Form.Control onChange={(event) => this.setState({
                                date: event.target.value 
                            })}/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formLength">
                            <Form.Label>workout length</Form.Label>
                            <Form.Control onChange={(event) => this.setState({
                                length: event.target.value 
                            })} />
                            </Form.Group>

                            </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formExercise1">
                            <Form.Label>exercise 1</Form.Label>
                            <Form.Control onChange={(event) => this.setState({
                                exercise1: event.target.value 
                            })}/>
                            </Form.Group>
                        
                            <Form.Group as={Col} controlId="formExercise2">
                            <Form.Label>exercise 2</Form.Label>
                            <Form.Control onChange={(event) => this.setState({
                                exercise2: event.target.value 
                            })}/>
                            </Form.Group>


                            <Form.Group as={Col} controlId="formExercise3">
                            <Form.Label>exercise 3</Form.Label>
                            <Form.Control onChange={(event) => this.setState({
                                exercise3: event.target.value 
                            })}/>
                            </Form.Group>

                        </Form.Row>

                        <Button variant="dark" type="submit">
                            Submit
                        </Button>
                        </Form>
                        
                        </Container>
            </div>
        )
    }
}

export default ClientForm
