import React from 'react'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

export class LogIn extends React.Component {


    state = {
        logIn: true,
        username: '',
        password: '',
        errors: []
    }

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value 
        })
    }
    
    logInSubmitted = (event) => {
        event.preventDefault()
        fetch(`http://localhost:3000/login`, {
          method:'POST',
          headers: { 
             'Content-type': 'application/json'
         },
         body: JSON.stringify({
             username: this.state.username,
             password: this.state.password 
          })
        })
        .then(r => r.json())
        .then(data => {
            console.log(data)
            if (data.errors) {
                this.setState({
                    errors: data.errors
                })
             } else {
                this.props.setToken(data)
            }   
        })
      }
  

    render() {
        return <>

                <Form onSubmit={ this.logInSubmitted }>
  <Form.Group as={Row} controlId="username">
    <Form.Label column sm={2}>
      Username
    </Form.Label>
    <Col sm={10}>
      <Form.Control onChange={this.onChange} value={this.state.username} type="text" placeholder="username" name="username"/>
    </Col>
  </Form.Group>

  <Form.Group as={Row} controlId="password" >
    <Form.Label column sm={2}>
      Password
    </Form.Label>
    <Col sm={10}>
      <Form.Control onChange={this.onChange} value={this.state.password} type="password" placeholder="password" name="password"/>
    </Col>
  </Form.Group>

  <Form.Group as={Row}>
    <Col sm={{ span: 10, offset: 2 }}>
      <Button onClick={() => this.setState({ logIn: false})} variant="dark" type="submit">Time To Register</Button>
    </Col>
  </Form.Group>
</Form> 


 </>
    }

    }



export default LogIn
