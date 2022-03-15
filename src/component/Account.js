import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AuthService from "../services/AuthService"
import UserDashboard from './Account/UserDashboard';
import UserPreferences from './Account/UserPreferences';

import {getUserToken} from "../services/AuthService";
import { Card, CardContent, Typography, CardActions, Button } from '@mui/material';

function Account() {
  const [battery, setBattery] = useState(null);
  const [hardwareItems, setHardwareItems] = useState(null);
  const [user, setUser] = useState(null);

  let token = "Bearer " + getUserToken();

  useEffect(() => {
    fetch("http://localhost:8080/api/battery?uID=1", { headers: { "Authorization": token } })
        .then((response) => response.json())
        .then((data) => {
            setBattery(data);
            console.log(data);
        });

        
    fetch("http://localhost:8080/api/hardware?uID=1", { headers: { "Authorization": token } })
    .then((response) => response.json())
    .then((data) => {
        setHardwareItems(data);
        console.log(data);
        // console.log(hardwareItems);
    });

    
    fetch("http://localhost:8080/api/demand?uID=1", { headers: { "Authorization": token } })
        .then((response) => response.json())
        .then((data) => {
            setUser(data);
            console.log(data);
            // console.log(user)

        });
}, []);

// useEffect(() => {
//   console.log(user);
// }, [user]);


  // useEffect(() => {
  //   fetch('http://localhost:8080/api/user/' + new URLSearchParams({'userID' : 1}), {
  //     method: 'GET',
  //     // headers: {
  //     //   'Content-Type' : 'application/x-www-form-urlencoded',
  //     //   'Accept': 'application/json',
  //     //   'Cache': 'no-cache'
  //     // },
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setUserDetail(data);
  //       console.log(data);
  //     })
  //     .catch((error) => console.log(error));
  // },[]);


  return (
    <div>
      <UserDashboard/>
      <UserPreferences></UserPreferences>
    </div>
  )
}

export default Account