import React from 'react';

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import ArticleIcon from '@mui/icons-material/Article';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

import { NavLink } from 'react-router-dom';


const Navbar = () => {


  return (
    <>
 
<div className='nav-maintop order-0 order-lg-0'>
       <nav className="navbar ">
    <ul>
       <li className="navbar-brand">
    <NavLink exact  to="/"> 🦋 </NavLink>
    </li>
    <li  className="search my-3" >
    <NavLink exact to="/search"><SearchOutlinedIcon/></NavLink>
    </li>
    
<div className="midicons my-5">
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to="/"><HomeOutlinedIcon/></NavLink>
        </li>
        <li className="nav-item my-2">
          <NavLink className="nav-link" to="/second"><NewspaperIcon/></NavLink>
        </li>
        <li className="nav-item my-2">
          <NavLink className="nav-link" to="/board"><ArticleIcon/></NavLink>
        </li>
        <li className="nav-item my-2">
          <NavLink className="nav-link" to="/profile"><Person2OutlinedIcon/></NavLink>
        </li>
        
        </div>
        <div className='lasticons my-5'>
        
        <li className="nav-item my-2 ">
          <NavLink className="nav-link" to="/noti"><NotificationsNoneOutlinedIcon/></NavLink>
        </li>
        <li className="nav-item my-2 my-auto">
          <NavLink className="nav-link" to="/exit"><LogoutOutlinedIcon/></NavLink>
        </li>
       
        </div>
        </ul>
 </nav> 
</div>
    </>
  );
};

export default Navbar