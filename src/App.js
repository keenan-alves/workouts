import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import LogIn from './LogIn'
import Profile from './components/Profile'
import WorkoutIndex from './components/WorkoutIndex';
import ExerciseForm from './components/ExerciseForm';
import WorkoutPage from './components/WorkoutPage'
import WorkoutTable from './components/WorkoutTable'
import CreateWorkout from './components/CreateWorkout'
import ClientForm from './components/ClientForm'


export class App extends React.Component {

  state = {
    users: [],
  }

  
  componentDidMount(){
    fetch(`http://localhost:3000/users`)
    .then(r => r.json())
    .then((allUsers) => {
        this.setState({
          users: allUsers 
        })
      })
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
   <Profile users={this.state.users} />
    <ClientForm />
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