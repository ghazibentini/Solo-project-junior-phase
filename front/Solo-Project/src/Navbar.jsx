import React, {useEffect, useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';





const Navbar = ({handleSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
   
    handleSearch(searchTerm);
  }, [searchTerm]);


  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/teams">Teams</Link>
        </li>
        <li>
          
          <input
            type="text"
            placeholder="Search for teams"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={()=>handleSearch(searchTerm)}>Search</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
