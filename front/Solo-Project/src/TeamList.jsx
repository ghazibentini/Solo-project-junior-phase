import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./TeamList.css";

const TeamList = ({ data }) => {
  const navigate = useNavigate();

  const uniqueTeams = [...new Set(data.map((team) => team.Team))];

  const handleTeamClick = (teamName, data) => {
    navigate(`/players/${teamName}`, { state: data });
  };

  return (
    <div className="team-list">
      {uniqueTeams.map((teamName, index) => (
        <div
          className="team-card"
          key={index}
          onClick={() => handleTeamClick(teamName)}
        >
          <h2 className="team-name">{teamName}</h2>
        </div>
      ))}
    </div>
  );
};

export default TeamList;
