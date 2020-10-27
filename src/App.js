import React, { Component } from 'react';
import './App.css';
import Navbar from './nav-component/Navbar/Navbar'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import AddFriend from './pages/AddFriend'
import ChatRoom from './pages/ChatRoom'
import Home from './pages/Home'


class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <p className="App-intro">
          Weclome to React.js
        </p>         */}

         <Router>
         <Navbar/>
          <Switch>
            <Route path='/chatroom' component={ChatRoom} />
            <Route path='/addfriend' component={AddFriend} />
            <Route path='/home' component={Home} />
          </Switch>
         </Router>
        
      </div>
    );
  }
}

export default App;
