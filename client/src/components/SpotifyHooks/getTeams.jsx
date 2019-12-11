import React, { useState, useEffect } from "react";
import axios from "axios";
const nbaKey = process.env.apiNbaKey;

export const getTeams = (url, loading) => {
  const [teams, setTeams] = useState([]);
  console.log(teams, 'heoihesithseiot')
  useEffect(() => {
    const getTeamsData = async () => {
      let responseTeams = await axios.get(url, {
        headers: {
          "x-rapidapi-host": "free-nba.p.rapidapi.com",
          "x-rapidapi-key": nbaKey
        }
      });
      setTeams(responseTeams.data.data.map(team => <li>{team.city}</li>))
    };

    getTeamsData();

  }, [loading]);

  return teams
};
