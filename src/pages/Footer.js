import React, { Component } from 'react'
import logo from '../nav-component/Navbar/logo_b.png'
import './Footer.css'
import * as AiIcons from 'react-icons/ai'
import * as FaIcons from 'react-icons/fa'
class Footer extends Component {
    render() {
        return (
            <div>
                <footer class="footer-distributed">

               <div class="footer-left">
                <img src={logo}/>
               <h3>About<span>Split My Bills</span></h3>

              <p class="footer-links">
               <a href="#">Home</a>  |    
               <a href="#">Dashboard</a>  |     
               <a href="#">Split My Bills</a>  |   
               <a href="#">Recent History</a>  |   
               <a href='#'>Add Friend</a>
              </p>

    <p class="footer-company-name">© Software Engineering Project by Simran and Deyashini</p>
</div>

<div class="footer-center">
    <div>
        <i class="fa fa-map-marker"/>
          <p>NITK, Surathkal</p>
    </div>

    <div>
        <i class="fa fa-phone"></i>
        <p>+91 22-27782183</p>
    </div>
    <div>
        <i class="fa fa-envelope"></i>
        <p><a href="mailto:dbhattacharyageorge@gmail.com">splitMyBills@gmail.com</a></p>
    </div>
</div>
<div class="footer-right">
    <p class="footer-company-about">
        <span>About the project</span>
        Software Engineering Project</p>
    <div class="footer-icons">
        <a href="#"><FaIcons.FaFacebook/></a>
        <a href="#"><AiIcons.AiFillTwitterCircle/></a>
        <a href="#"><AiIcons.AiOutlineInstagram/></a>
        <a href="#"><FaIcons.FaLinkedin/></a>
        <a href="#"><AiIcons.AiFillYoutube/></a>
    </div>
</div>
</footer>
            </div>
        )
    }
}

export default Footer
