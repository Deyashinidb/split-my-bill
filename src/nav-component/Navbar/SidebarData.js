import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
//import * as IoIcons from 'react-icons/io'

export const SidebarData=[

    {
        title: 'Home',
        path: '/home',
        icon: <FaIcons.FaHome/>,
        cName: 'nav-text'
    },

    {
        title: 'Add Friend',
        path:'/addfriend',
        icon:<AiIcons.AiOutlineUserAdd/>,
        cName: 'nav-text'
    },
    {
        title: 'Chatroom',
        path: '/chatroom',
        icon: <AiIcons.AiOutlineWechat/>,
        cName: 'nav-text'
    }
]