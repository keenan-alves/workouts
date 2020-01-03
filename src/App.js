import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Profile from './components/Profile'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'




export class App extends React.Component {

  state = {
    users: [],
    showUsers: [],
    searchTerm: ''
  }

  
  componentDidMount(){
    fetch(`http://localhost:3000/users`)
    .then(r => r.json())
    .then((allUsers) => {
        this.setState({
          users: allUsers,
          showUsers: allUsers
        })
      })
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
       .then(r => r.json())
       .then((r) => {
         this.setState({
           users: [...this.state.users, r],
           showUsers: [...this.state.showUsers, r]
         })
       })
               
   }

      
   filterSearch = () => {
     let filteredUsers = this.state.users.filter(user => user.name.startsWith(this.state.searchTerm.toUpperCase()) || user.name.startsWith(this.state.searchTerm.toLowerCase()))
     if(this.state.searchTerm === ''){
       this.setState({
         showUsers: this.state.users
       })
     } else {
     
     this.setState({
       showUsers: filteredUsers
     })
    }
    
    // handleChange, set the event.target.value to the state, then call filterSearch w/ this.state.watever you named it
    this.handleChange = (event) => {
      this.setState({
        searchTerm: event.target.value
      })
    }
    
     
   }

    render() {

      
      return (//<main>
        <div className="App">
      <link
   rel="stylesheet"
   href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
   integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
   crossorigin="anonymous"
   />
                     <Form.Group as={Col} controlId="matchLetter" >
                                      <Form.Label></Form.Label>
                                      <Form.Control type="text" value={this.state.searchTerm} onChange={(event) => this.filterSearch(event)}/>
                                      </Form.Group>
   <Profile users={this.state.showUsers}  />
   

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

export default App


// componentDidMount(){
  //   this.setState({
    //     token: localStorage.token,
    //     loggedInUserId: localStorage.userId
    //   })
    // }
    
    // setToken = ({ token, user_id }) => {
      
      //   localStorage.token = token 
      //   localStorage.userId = user_id 
      
      //   this.setState({
        //     token: token,
        //     loggedInUserId: user_id 
        //   })
        
        // }
        
        // logOutClick = () => {
          //   localStorage.userId = undefined
          //   localStorage.token = undefined 
          
          //   this.setState({
            //     loggedInUserId: null,
            //     token: null 
            //   })
            // }


            // <header>{ !!this.state.token 
                      //  ? <button onClick={ this.logOutClick }>Log out</button>
                    //    : ""
                   //    } </header>
                   // { 
              // !!this.state.token 
              // ? <Profile token={this.state.token} loggedInUserId={this.state.loggedInUserId} users={this.state.users}/>
               // : <LogIn setToken={this.setToken} />
               // }
               // </main>);