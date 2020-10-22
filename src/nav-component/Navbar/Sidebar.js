import React, {useState} from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import {Link} from 'react-router-dom'
import {SidebarData} from './SidebarData'
import './Sidebar.css'
import {IconContext} from 'react-icons'

function Sidebar() {
    const [sidebar,setSidebar]=useState(false)

    const showSidebar =()=>setSidebar(!sidebar)

    return (
        <React.Fragment>
            <IconContext.Provider value={{color:'#fff'}}>
             <div className='sidebar' onClick={showSidebar}>
                    <Link to="#" className='side-menu-bars'>
                      <FaIcons.FaBars/> 
                    </Link>                   
              </div>   
              <nav className={sidebar ? 'side-nav-menu active' : 'side-nav-menu'}>
                  <ul className='side-nav-menu-items' onClick={showSidebar}>
                      <li className='side-navbar-toggle'>
                        <Link to='#' className='side-menu-bars'>
                            <AiIcons.AiOutlineCloseCircle/>
                        </Link>
                      </li>
                      {SidebarData.map((item,index)=>{
                          return (
                              <li key={index} className={item.cName}>
                                  <Link to={item.path}>
                                      {item.icon}
                                      <span> {item.title} </span>
                                  </Link>
                              </li>
                          )
                      })}
                  </ul>
              </nav>
        </IconContext.Provider>
       </React.Fragment>
         
    )
}

export default Sidebar
