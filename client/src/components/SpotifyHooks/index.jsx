import React, { useState, useEffect } from "react";
import { getTeams } from "./getTeams.jsx";

const SpotifyHooks = () => {
  const [loading, setLoading] = useState(true);
  const teams = getTeams(`https://free-nba.p.rapidapi.com/teams`, loading);

  console.log(teams, "whattt is this");

  return (
    <div>
      {!loading ? (
        <div>
          <ul>{teams}</ul>
        </div>
      ) : (
        <div>
          <button onClick={() => setLoading(false)}>Get Teams</button>
        </div>
      )}
    </div>
  );
};

export default SpotifyHooks;
