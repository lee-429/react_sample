import { useState, useEffect } from "react";
import { fetchStandings } from "./api/footballDataApi";


function EplApp() {
  const [standings, setStandings] = useState([]);
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    // API 호출 시작
    fetchStandings(standings).then((data) => {
      setStandings(data);
      setLoading(false);
    })
  }, []);

  return (
    <div className="epl-container">

      <h2>EPL Team Standings</h2>

    </div>
  )
}

export default EplApp;