import React from 'react';

import Home from './Home';
import Secondpage from './Secondpage';
import Board from './Board';
import Profile from './Profile';
import Noti from './Noti';
import Exit from './Exit';
import Search from './Search';

import { Route,Routes } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.rtl.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";


import Navbar from './Navbar';


const App = () => {

 
  return (
    <>

    <div className="main-content">
    <Navbar/>
   <Routes>
   <Route path='/search' Component={Search}/>
    <Route path="/" Component={Home}/>
    <Route path="/second" Component={Secondpage}/>
    <Route path="/board" Component={Board}/>
    <Route path="/profile" Component={Profile}/>
    <Route path="/noti" Component={Noti}/>
    <Route path="/exit" Component={Exit}/>
    <Route path="*" Component={Home}/>
   </Routes>
   </div>
   </>
  )
};

export default App