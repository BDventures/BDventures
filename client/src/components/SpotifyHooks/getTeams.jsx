import React, { useState, useEffect } from "react";
import axios from "axios";
const nbaKey = process.env.apiNbaKey;
const apikey_token = process.env.apikey_token;
const password = process.env.password;

export const getTeams = (url, loading) => {
  const [westConference, setWestConference] = useState([]);
  const [eastConference, setEastConference] = useState([]);

  console.log(westConference, 'west conference')
  console.log(eastConference, 'east conference')
  useEffect(() => {
    // const getNBATeams = async () => {
    //   const headers = {
    //     "Authorization": "Basic " + btoa({apikey_token} + ":" + {password})
    //   }
    //   console.log(headers)
    //   let NBATeams = await axios.get(url, {
    //     headers: headers
    //   })
    //   console.log(NBATeams, 'nba teams')
    // }
    // getNBATeams()

    const getTeamsData = async () => {
      let responseTeams = await axios.get(url, {
        headers: {
          "x-rapidapi-host": "free-nba.p.rapidapi.com",
          "x-rapidapi-key": nbaKey
        }
      });

      let finalData = responseTeams.data.data.map(team => {
        if (team.conference === "West") {
          setWestConference(teams => teams.concat(team));
        } else {
          setEastConference(teams => teams.concat(team));
        }
      });
    };

    if (loading === false) {
      getTeamsData();
    }
  }, [loading]);

  return { westConference, eastConference };
};
