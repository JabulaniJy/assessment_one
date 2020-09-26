import React from 'react';
import {Link} from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import {ListGroup } from 'react-bootstrap';

import SidebarData from './SidebarData';
function MenuComponent() {
    const [sidebar, setSidebar] = React.useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  
    return (
        <div>
            <div className="nav-bar">
                <Link to='#' className='menu-bars'>
                    <FaIcons.FaBars  onClick={showSidebar}/>
                </Link>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ListGroup className="nav-menu-items "   onClick={showSidebar}> 
                    <li className="navbar-toggle">
                        <Link to="#" className="menu-bars">
                            <AiIcons.AiOutlineClose/>
                        </Link>
                    </li>
                    
                    {SidebarData.map((item,index)=>{
                        return (
                        <ListGroup.Item key={index} className={item.cName}>
                            <Link to={item.path}> {item.icon}<span>{item.title}</span></Link>
                        </ListGroup.Item>
                        )
                    })}
                    
                </ListGroup>
                
            </nav>

        </div>
    )
}

export default MenuComponent
