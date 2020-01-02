import React, { Component } from 'react'
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBRow } from 'mdbreact';
import Container from 'react-bootstrap/Container'
import WorkoutIndex from './WorkoutIndex'


export class IndividualProfile extends Component {

    state = {
        showWorkouts: false,
        deleteClicked: false 
    }

    
    
    toggleWorkouts = () => {
        this.setState({
            showWorkouts: !this.state.showWorkouts
        })
    }
    
   
    
    
    render() {
        return (
            <div>
                 <Container>
                <MDBRow >
                
                    <MDBCard>
                        <MDBCardImage className="img-fluid" src="https://imageog.flaticon.com/icons/png/512/249/249187.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF" waves />
                        <MDBCardBody>
                            <MDBCardTitle>{this.props.name}</MDBCardTitle>
                            <MDBCardText>
                             

                            </MDBCardText>
                            <MDBBtn color="dark" onClick={() => this.toggleWorkouts()}>
                                show workouts</MDBBtn>

                                <MDBCol>
                                    <MDBBtn color="warning" onClick={(event) => this.props.deleteProfile(event)}>
                                        delete profile</MDBBtn>
                                </MDBCol>

                        </MDBCardBody>
                    </MDBCard>  
                </MDBRow>

                <MDBRow>
                    {this.state.showWorkouts ? <WorkoutIndex workouts={this.props.workouts} /> : null}
                </MDBRow>
                   
                </Container>
            </div>
        )
    }
}

export default IndividualProfile



