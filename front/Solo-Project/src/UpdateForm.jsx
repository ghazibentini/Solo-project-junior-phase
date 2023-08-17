import React, { useState } from 'react';
import axios from 'axios';
import './UpdateForm.css';

const UpdateForm = ({ selectedPlayer, setIsUpdateFormOpen, triggerUpdate }) => {

  
  const [updatedPlayer, setUpdatedPlayer] = useState({
    PlayerName: selectedPlayer?.PlayerName || '',
    JerseyNumber: selectedPlayer ? selectedPlayer['Jersey Number'] : '',
    Points: selectedPlayer ? selectedPlayer.Points : '',
    Rebounds: selectedPlayer ? selectedPlayer.Rebounds : '',
    Assists: selectedPlayer ? selectedPlayer.Assists : '',
    Steals: selectedPlayer ? selectedPlayer.Steals : '',
    Blocks: selectedPlayer ? selectedPlayer.Blocks : '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedPlayer((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleUpdate = () => {
    axios
      .put(`http://localhost:5000/api/players/${selectedPlayer._id}`, updatedPlayer)
      .then((response) => {
        console.log(response.data);
        setIsUpdateFormOpen(false);
        triggerUpdate();
      })
      .catch((error) => {
        console.error('Error updating player:', error);
      });
  };

  return (
    <div className="update-form-container">
      <h2>Update Player</h2>
      <div className="update-form">
        <div className="form-group">
          <label>Player Name:</label>
          <input
            type="text"
            name="PlayerName"
            value={updatedPlayer.PlayerName}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Jersey Number:</label>
          <input
            type="number"
            name="JerseyNumber"
            value={updatedPlayer.JerseyNumber}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Points:</label>
          <input
            type="number"
            name="Points"
            value={updatedPlayer.Points}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Rebounds:</label>
          <input
            type="number"
            name="Rebounds"
            value={updatedPlayer.Rebounds}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Assists:</label>
          <input
            type="number"
            name="Assists"
            value={updatedPlayer.Assists}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Steals:</label>
          <input
            type="number"
            name="Steals"
            value={updatedPlayer.Steals}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Blocks:</label>
          <input
            type="number"
            name="Blocks"
            value={updatedPlayer.Blocks}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-buttons">
          <button className="update-button" onClick={handleUpdate}>
            Update
          </button>
          <button className="cancel-button" onClick={() => setIsUpdateFormOpen(false)}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateForm;
