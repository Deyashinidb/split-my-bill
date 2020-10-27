import React, { Component } from 'react'
import {MenuItems} from './MenuItems'
import './Navbar.css'
import logo from './logo_b.png'
import Sidebar from './Sidebar'
import GoogleButton from '../../GoogleButton'
// client id :- 492503563200-4dbusk6k04df9ianke5olctn1bqh1por.apps.googleusercontent.com
// client secret :- k9prXLpb-elyDLOxRkS2lS8Q

class Navbar extends Component {
    state = {
        clicked:false
    }

    handleClick=()=>{
        this.setState({clicked:!this.state.clicked})
    }

    render() {
        return (
            <div>
               <nav className='NavbarItems'>
                   <Sidebar/>
                 <img src={logo} alt="Logo" className='navbar-logo'/>
                 
                 <div className='menu-icon' onClick={this.handleClick}>
                     <i className={this.state.clicked ? 
                      'fas fa-times': 'fas fa-bars'}/>
                 </div>

                 <ul className={this.state.clicked ? 
                  'nav-menu active' : 'nav-menu'}>
                  { MenuItems.map((item,index)=>{
                     return (
                        <li key={index}>
                            {index === 3 ? <GoogleButton/> : 
                            <a className={item.cName} href={item.url}>
                             {item.title}
                            </a>
                            }
                        </li>
                     )
                  })}    
                 </ul>
                </nav> 
            </div>
        )
    }
}

export default Navbar
