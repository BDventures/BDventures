import React, { useState, useEffect } from "react";
import { getTeams } from "./getTeams.jsx";

const SpotifyHooks = () => {
  const [loading, setLoading] = useState(true);
  const teams = getTeams(`https://free-nba.p.rapidapi.com/teams`, loading);
  //on click, get all players on that team
  let easternTeams = () => {
    return teams.eastConference.map((team) => {
      return <li>{team.full_name}</li>
  })
  }

  let westernTeams = () => {
    return teams.westConference.map((team) => {
        return <li>{team.full_name}</li>
    })
  }
  return (
    <div>
      {!loading ? (
        <div>
          <div><h2>Western Conference</h2></div>
          <ul>
            {westernTeams()}
          </ul>
          <div><h2>Eastern Conference</h2></div>
          <ul>
            {easternTeams()}
          </ul>
        </div>
        
      ) : (
        <div>
          <button onClick={() => setLoading(loading => !loading)}>Get Teams</button>
        </div>
      )}
    </div>
  );
};

export default SpotifyHooks;
