import React, { Component } from 'react';
import './App.css';
import Navbar from './nav-component/Navbar/Navbar'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import AddFriend from './pages/AddFriend/AddFriend'
import ContactUs from './pages/ContactUs'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Recent from './pages/Recent'
import SplitBill from './pages/SplitMyBill/SplitBill.js'
import {accessToken} from './GoogleButton'
class App extends Component {
   constructor(props) {
     super(props)
   
     this.state = {
        homeView:true
     }
   }
   
   handleHome=()=>{
     if(accessToken!=null)
     this.setState({homeView:false})
     else
     this.setState({homeView:true})
   }
  //  componentDidMount() {
  //   firebaseDb.child('users').push({name:'Deyashini',age:22},
  //   err => {
  //     if(err)
  //     console.log(err)
  //   })
  //  }
 
  render() {
    return (
      <div className="App">
        {/* <p className="App-intro">
          Weclome to React.js
        </p>         */}
        
         <Router>
         <Navbar handleHome={this.handleHome}/>
          <Switch>
            <Route path='/contactus' component={ContactUs} />
            <Route path='/addfriend' component={AddFriend} />
            <Route path='/home' component={Home} />
            <Route path='/dashboard' component={Dashboard}/>
            <Route path='/split-bill' component={SplitBill}/>
            <Route path='/recents' component={Recent}/>
          </Switch>
         </Router>
      <div>{this.state.homeView===true ? <Home/>:null}</div>
      </div>
    );
  }
}

export default App;
