import React from 'react'
import { Navigate } from 'react-router-dom';
import {isUserLoggedIn} from "../services/AuthService";

function RequireAuth({children, redirectTo}) {
  let authorised = isUserLoggedIn();
    return authorised ? children : <Navigate to={redirectTo}/>;
}

export default RequireAuth