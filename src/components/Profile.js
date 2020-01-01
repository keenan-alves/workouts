import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBRow } from 'mdbreact';
import Container from 'react-bootstrap/Container';
import IndividualProfile from './IndividualProfile'



export class Profile extends React.Component {


   state = {
       clickedUser: [],
       workouts: [],
       clicked: false

   }

   whichProfile = (user) => {
       let currentState = [...this.state.clickedUser]
        let index = currentState.indexOf(user)
        currentState.splice(index, 1)
        this.setState({
            clicked: !this.state.clicked,
            clickedUser: [user, ...currentState]
        })
   }

   

    render() {
       
        return (
            <Container>
                <MDBRow >
                {this.props.users.map(user => 
                    <MDBCard user={user} name={user.name} key={user.id} style={{ width: "22rem" }}  >
                        <MDBCardImage className="img-fluid" src="https://imageog.flaticon.com/icons/png/512/249/249187.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF" waves />
                        <MDBCardBody>
                            <MDBCardTitle>{user.name}</MDBCardTitle>
                            <MDBCardText>
                             

                            </MDBCardText>
                            <MDBBtn color="dark" onClick={() => this.whichProfile(user)} >
                                show profile</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
               )}
               {/* {this.state.clicked ? <WorkoutTable users={this.props.users} user={this.state.clickedUser}/> : null} */}
               <MDBRow>
               {this.state.clicked ? this.state.clickedUser.map(user => <IndividualProfile name={user.name} workouts={user.workouts} key={user.id}/>) : null}
               <br/> 
               </MDBRow>
                  
                </MDBRow>
                {console.log(this.state.clickedUser)}
                </Container>          
        )
    }




}


export default Profile


