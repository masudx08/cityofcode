import React from 'react'
import {Navigate} from "react-router-dom";
import {logout} from '../services/AuthService';

function Logout() {
    logout();
  return ( 
      <Navigate to="/dashboard"/>
  )
}

export default Logout