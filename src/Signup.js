import React from 'react'

export class Signup extends React.Component {

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
    
    signUpSubmitted = (event) => {
        event.preventDefault()
    }

    render() {
        return (
            <div>
                <Form onSubmit={ this.signUpSubmitted }>
                    <Form.Group as={Row} controlId="username">
                    <Form.Label column sm={2}>
                        Username
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control onChange={this.onChange} value={this.state.username} type="text" placeholder="username" name="username" />
                    </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="password">
                    <Form.Label column sm={2}>
                        Password
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control onChange={this.onChange} value={this.state.password} type="password" placeholder="password" name="password" />
                    </Col>
                    </Form.Group>

                    <Form.Group as={Row}>
                    <Col sm={{ span: 10, offset: 2 }}>
                        <Button onClick={() => this.setState({ logIn: true})} variant="dark" type="submit">already signed up</Button>
                    </Col>
                    </Form.Group>
                 </Form> 
            </div>
        )
    }
}

export default Signup
