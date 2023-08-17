import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';

import Home from './Home';
import TeamList from './TeamList';
import PlayerStats from './PlayerStats';
import NotFound from './NotFound';
import PlayerList from './PlayerList';
import Navbar from './Navbar';
import UpdateForm from './UpdateForm';

function App() {
  const [data, setData] = useState([]);
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [trigger, setTrigger] =useState(false)
  const [playerData, setPlayerData] = useState([])

  useEffect(() => {
    const apiUrl = 'http://localhost:5000/api/players';
    if (trigger || searchQuery === "") {
      axios
        .get(apiUrl)
        .then(response => {
          setData(response.data);
        })
        .catch(error => {
          console.error('Error fetching players data:', error);
        });
    } else {
      const filtered = data.filter((e) =>
        e.Team.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setData(filtered);
    }
  }, [trigger, searchQuery]);
  

  const handleSearch = (searchQuery) => {
    if (!searchQuery) {
      setTrigger(!trigger);
      setData([]);
    } else {
      const filtered = data.filter((e) =>
        e.Team.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setData(filtered);
    }
  };

  return (
    <Router>
      <Navbar searchQuery={searchQuery}  setData={setData} data={data} handleSearch={handleSearch} setSearchQuery={setSearchQuery}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/teams"
          element={<TeamList data={data} setSelectedTeam={setSelectedTeam} />}
        />
        <Route
          path="/teams/:teamId/players"
          element={<PlayerStats />}
        />
        <Route path="/update/:playerId" element={<UpdateForm data={playerData} />} />
        <Route
  path="/players/:teamName"
  element={<PlayerList data={data} selectedTeam={selectedTeam} searchQuery={searchQuery} />}
/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;



