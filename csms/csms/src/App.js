import './App.css';
import EmployeeLogin from './Employee/EmployeeLogin';
import Employee from './pages/Employee';
import AllEmployee from './Employee/allEmployee';
import ViewEmployee from './Employee/viewEmployee';
import EditEmployee from './Employee/editEmployee';
import Home from './pages/Home';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Player from './pages/Player';
import User from './pages/User';
import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AllUser from './User/allUser';
import ViewUser from './User/viewUser';
import EditUser from './User/EditUser';
import UserLogin from './User/UserLogin';
import AllPlayer from './Player/allPlayer';
import EditPlayer from './Player/EditPlayer';
import LoguserHome from './pages/LoguserHome';
import AdminHome from './pages/AdminHome';
import ViewPlayer from './Player/ViewPlayer';
import ScoreUpdate from  './MatchScore/ScoreUpdate';
import LiveScore from  './MatchScore/LiveScore';
import Upcomming from  './MatchScore/Upcomming';
import Previous from  './MatchScore/Previous';
import PreviousMatch from './MatchScore/previousmatch';
function App() {
  return (
    <BrowserRouter>
    <ToastContainer position="center"/>
    <Routes>

      <Route path="/" element = {<Home />} />
      
      <Route path="/employeelogin" element={<EmployeeLogin />} />

      <Route path="/addemployee" element={<Employee />} />

      <Route path="/viewemployee/:empID" element={<ViewEmployee />} />

      <Route path="/editemployee/:empID" element={<EditEmployee />} />

      <Route path="/allemployee" element={<AllEmployee />} />


      <Route path="/addplayer" element={<Player />} />

      <Route path="/allplayer" element={<AllPlayer />} />

      <Route path="/viewplayer/:pID" element={<ViewPlayer />} />

      <Route path="/editplayer/:pID" element={<EditPlayer />} />

      <Route path="/adduser" element={<User  />} />

      <Route path="/allusers" element={<AllUser />} />

      <Route path="/viewuser/:uID" element={<ViewUser />} />

      <Route path="/edituser/:uID" element={<EditUser/>} />

      <Route path="/userlogin" element={<UserLogin />} />

      <Route path="/loginuser" element={<LoguserHome />} />

      <Route path="/admin" element={<AdminHome />} />
      
      <Route path="/upcomming" element={(<Upcomming />)} />

      <Route path="/previous" element={(<Previous />)} />

      <Route path="/previousmatch" element={(<PreviousMatch />)} />

      <Route path="/scoreupdate" element={<ScoreUpdate />} />
      <Route path="/livescore/:inning" element={<LiveScore />} />
    </Routes>
    
    </BrowserRouter>
  );
  
}

export default App;
