import {React, useState } from 'react';
import axios from "axios";

//Units Page
function Units() {
    //retrieve state
    const [profileData, setProfileData] = useState(null)

    function getData() {

        //connect to flask via GET request
        axios({
          method: "GET",
          url:"/unit",
        })
        
        //assign query results to new state 
        .then((response) => {
          const res =response.data
          setProfileData(({
            unit_name: res.name,
            unit_profile: res.profile}))
        
        //If connection to flask fails, return error
        }).catch((error) => {
          if (error.response) {
            console.log(error.response)
            console.log(error.response.status)
            console.log(error.response.headers)
            }
    })}

    return (
        <div>
            <h1>Units</h1>
            <p>Units are the music groups featured in the game. 
                The five main units are Leo/need, MORE MORE JUMP!,
                Vivid BAD SQUAD, Wonderlands x Showtime, and Nightcord at 25:00.
                Each unit has four human singers and six VIRTUAL SINGERS.
            </p>
            <p>To view a unit's profile, click on the unit's name.</p>
            
            <p>VIIRTUAL SINGER</p>
            <p>Leo/need</p>
            <p>MORE MORE JUMP!</p>
            <p>Vivid BAD SQUAD</p>
            <p>Wonderlands x Showtime</p>
            <p>Nightcord at 25:00</p>

            <button onClick={getData}>Click me</button>
        {profileData && <div>
              <p>Unit name: {profileData.unit_name}</p>
              <p>Profile: {profileData.unit_profile}</p>
            </div>
        }
        </div>
    );
}

export default Units;