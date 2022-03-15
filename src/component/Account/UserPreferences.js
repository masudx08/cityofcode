import { Box, Button, Card, CardActions, CardContent, Slider, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { getUserToken } from '../../services/AuthService';


function UserPreferences(props) {
    const [preference, setPreference] = useState(0.5);

    useEffect(() => {
        fetch("http://localhost:8080/api/demand?uID=1", { headers: { "Authorization": token } })
        .then((response) => response.json())
        .then((data) => {
            setPreference(data.upreference)
            

        });
    },[]);

    const handleChange = (event, newValue) => {
        setPreference(newValue);
    }

    const marks = [
        {
            value: 0,
            label: "Cheap"
        },
        {
            value: 0.5,
            label: "Mid"
        },
        {
            value: 1,
            label: "Green"
        },
    ]

    const token = "Bearer " + getUserToken();

    const savePreference = () => {
        if (preference > 1 || preference < 0)
            return;

            // console.log(props)
            // console.log(props.upreference)

        // return await fetch('http://localhost:8080/api/', requestOptions)
        //     .then(response => response.json())
        //     .then(data => {
        //         return true;
        //     })
        //     .catch(error => { console.log(error); return false; })

            fetch('http://localhost:8080/api/preference/update' , {
                method: 'POST',
                headers: {
                'Authorization': token,
                  'Content-Type' : 'application/x-www-form-urlencoded',
                  'Cache': 'no-cache',
                },
                body: new URLSearchParams({
                    'uID': 1,
                    'preference': preference,
                })})
                .then((response) => console.log(response.status)).catch((error) => {console.log(error);});
    }

    return (
        <Card sx={{ maxWidth: 275, ml: 10 }}>
            <CardContent sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}>
                <Typography sx={{ fontSize: 14 }}>Preference</Typography>

                <Slider
                    sx={{ maxWidth: 200 }}
                    value={preference}
                    onChange={handleChange}
                    min={0}
                    max={1}
                    step={0.5}
                    marks={marks}
                />
            </CardContent>
            <CardActions>
                <Button size="medium" onClick={ savePreference}>Save preference</Button>
            </CardActions>
        </Card>
    )
}

export default UserPreferences