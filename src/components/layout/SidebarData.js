import React from 'react'
import {Link} from 'react-router-dom';
import * as RiIcons from "react-icons/ri";

 const SidebarData =[
    {
        title: 'Home',
        path:'/',
        icon:<RiIcons.RiHome3Fill/>,
        cName:"nav-text mb-3"
    },
    {
        title: 'DashBoard',
        path:'/DashBoard',
        icon:<RiIcons.RiDashboardFill/>,
        cName:"nav-text mb-3"
    },
    {
        title: 'Admin',
        path:'/Admin',
        icon:<RiIcons.RiAdminFill/>,
        cName:"nav-text mb-3"
    },
   
    {
        title: 'Profile',
        path:'/Profile',
        icon:<RiIcons.RiProfileFill/>,
        cName:"nav-text mb-3"
    }
]
export default SidebarData;