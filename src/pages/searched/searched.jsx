import React, { useState } from 'react';
import './searched.css';
import { logo } from "../../assets"
import { Link } from 'react-router-dom';


const Searched = () => {
  const [expanded, setExpanded] = useState(false);
  const toggleExpansion = () => {
    setExpanded(!expanded);
  };

  return (
    <div className='container'>
      <div className='header'>
        <p1>CaP/ETS</p1>
        <p>Hackathon 1.2024</p>
        <Link to="/Cadastro">
          <button className="new">New Register</button>
        </Link>
      </div>

      <Link to="/">
        <div className='title'>
        
            <p1>smart</p1>
            <p className="gradient">Reader</p>
            <img src={logo} alt="Logo"></img>
          
        </div>
      </Link>

      <div className='body'>
        <div
          className={`retangulo ${expanded ? 'expanded' : ''}`}
          onClick={toggleExpansion}>
          {}
          {expanded && (
            <div className="mais">
            </div>
          )}
        </div>
      </div>

      

    </div>
  );
};

export default Searched;
