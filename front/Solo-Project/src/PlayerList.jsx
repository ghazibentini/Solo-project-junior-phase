import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./PlayerList.css";

const PlayerList = ({ data }) => {
  const remove = (id) => {
    axios
      .delete(`http://localhost:5000/api/players/${id}`)
      .then((result) => console.log(result, "deleted"))
      .catch((err) => console.log(err));
  };

  const handleUpdate = (player) => {
    setSelectedPlayer(player);
    setIsUpdateFormOpen(true);
    navigate(`/update/${player._id}`);
  };

  const navigate = useNavigate();

  const { teamName } = useParams();

  const playersForSelectedTeam = data.filter(
    (player) => player.Team === teamName
  );
  const [isUpdateFormOpen, setIsUpdateFormOpen] = useState(false);
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [trigger, setTrigger] = useState(false);

  return (
    <div className="player-list-container">
      <h2 className="team-name-header">Players for {teamName}</h2>
      <ul className="player-list">
        {playersForSelectedTeam.map((player, index) => (
          <li className="player-item" key={index}>
            <div className="player-info">
              <img className="player-image" src={player.ImageURL} alt="" />
              <div className="player-details">
                <strong className="player-name">{player.PlayerName}</strong>
                <p>Jersey Number: {player["Jersey Number"]}</p>
                <p>Points: {player.Points}</p>
                <p>Rebounds: {player.Rebounds}</p>
                <p>Assists: {player.Assists}</p>
                <p>Steals: {player.Steals}</p>
                <p>Blocks: {player.Blocks}</p>
              </div>
            </div>
            <div className="player-actions">
              <button
                className="delete-button"
                onClick={() => {
                  remove(player._id);
                  setTrigger(!trigger);
                }}
              >
                Delete Player
              </button>
              <button
                className="update-button"
                onClick={() => handleUpdate(player)}
              >
                Update
              </button>
            </div>
          </li>
        ))}
      </ul>
      {isUpdateFormOpen && (
        <UpdateForm
          selectedPlayer={selectedPlayer}
          setIsUpdateFormOpen={setIsUpdateFormOpen}
          triggerUpdate={() => setTrigger(!trigger)}
        />
      )}
    </div>
  );
};

export default PlayerList;
