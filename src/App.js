import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state={
      picture:'',
      name:'',
      friends:[]
    }
  }

  handlePictureChange=(e)=>{
    this.setState({picture: e.target.value})
  }

  handleNameChange=(e)=>{
    this.setState({name: e.target.value})
  }

  handleAddFriend=()=>{
    //destructoring to get 3 var off state
    const {friends,picture,name} = this.state;
    // making a copy of the friends array so we dont mutate state
    let friendsCopy = friends.slice()
    //pushing a new Object to the copy array, the object
    //has two keys: name and picture
    friendsCopy.push({name,picture})


    this.setState({friends:friendsCopy})
  }

  render(){
    return(
      
        <div className='container'>
        <div>
        <label>Picture:</label>
        <input onChange={this.handlePictureChange}/>
        
        </div>
        <div>
        <label>Name:</label>
        <input onChange={this.handleNameChange}/>
        </div>
        <button onClick={this.handleAddFriend}> Add Friend</button>
        <div>
          {this.state.friends.map(friend=>{
          return (
            <div>
              <h3>Name: {friend.name}</h3>
              <img src={friend.picture}/>
              </div>
          )})}
        </div>
      </div>
    )
  }
}

export default App;
