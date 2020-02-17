import React, { Component } from 'react';
import './App.css';
import Form from './Components/Form';
import List from './Components/List';

const localStorageKey = 'userData';

class App extends Component {

  state = {
    users: JSON.parse(localStorage.getItem(localStorageKey)) == null ? [] : JSON.parse(localStorage.getItem(localStorageKey))
  }

  addUser = (user) => {
    var userData = JSON.parse(localStorage.getItem(localStorageKey));
    if(userData == null) {
      var o = [];
      o.push(user);
      localStorage.setItem(localStorageKey, JSON.stringify(o));
    } else {
      userData.push(user);
      localStorage.setItem(localStorageKey, JSON.stringify(userData));
    }
    this.setState({
      users: JSON.parse(localStorage.getItem(localStorageKey))
    })
  }

  render() {
    return (
      <div className="App">
        <Form addUser={this.addUser} style={{float: "left"}}/>
        <List users={this.state.users} style={{float: "right"}}/>
      </div>
    );
  }
}

export default App;
