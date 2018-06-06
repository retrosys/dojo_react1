import React, { Component } from 'react'
import fetchedUsers from './users.json'
import User from './components/User.js'

class App extends Component {
  state = {
    users: [],
    Friends: []    
  }

  componentDidMount(){
    //fetch => fetchedUsers 
    this.setState({users: fetchedUsers})
  }

  addUser = (id) => {
    const friend = this.state.users.find(elem => elem.id === id)
    const concateFriends = [ ...this.state.Friends, friend]
    this.setState({ Friends: concateFriends })

  }

  render() { 
    const users = this.state.users.map(elem => 
    <User name={elem.name} id={elem.id} add={this.addUser}/>
    )
    const amis = this.state.Friends.map(elem => 
      <div>{elem.name}</div>
    )

    return (
      <div className="App">
      <div>------Friends-----</div>
      {/* {friends}   */}
      {amis}
      <div>-------Users------</div> 
      {users}
      </div>
    );
  }
}

export default App;
