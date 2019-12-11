import React, { useState, useEffect } from "react";
import axios from "axios";
const nbaKey = process.env.apiNbaKey;

export const getTeams = (url, loading) => {
  const [westConference, setWestConference] = useState([])
  const [eastConference, setEastConference] = useState([])

  // const daniel = async() => {
  //   let response = await axios.get(`https://www.fantasybasketballnerd.com/service/players`,{
  //     headers: {
  //       'Access-Control-Allow-Origin': '*',
  //         // 'Content-Type': 'application/x-www-form-urlencoded'
  //     }
  //   })
    
  //   console.log(response)
  // }
  // daniel()

  // console.log(westConference, 'west conference')
  // console.log(eastConference, 'east conference')
  useEffect(() => {
    const getTeamsData = async () => {
      let responseTeams = await axios.get(url, {
        headers: {
          "x-rapidapi-host": "free-nba.p.rapidapi.com",
          "x-rapidapi-key": nbaKey
        }
      });
      
      let finalData = responseTeams.data.data.map(team => {
        if(team.conference === 'West') {
          setWestConference(teams => teams.concat(team))
        } else {
          setEastConference(teams => teams.concat(team))
        }
      })
    };
    
    getTeamsData();

  }, [loading]);

  return {westConference, eastConference};
};
