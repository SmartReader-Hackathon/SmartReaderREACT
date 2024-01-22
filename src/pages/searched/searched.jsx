import React, { useState } from 'react';
import './searched.css';
import { logo, user } from "../../assets"
import { Link } from 'react-router-dom';
import axios from "axios";


const Searched = ({ props }) => {
  const [expanded, setExpanded] = useState(false);
  const toggleExpansion = () => {
    setExpanded(!expanded);
  };

  return (
    <div className='container'>
      <div className='start'>
        <p1>CaP/ETS</p1>
        <p>Hackathon 1.2024</p>
        <Link to="/Cadastro">
          <button className="new">New Register</button>
        </Link>
      </div>

      <Link to="/">
        <div className='title'>
          <p1>Smart</p1>
          <p className="gradient">Reader</p>
          <img src={logo} alt="Logo"></img>
        </div>
      </Link>

      <div className='body'>
        <div
          className={`retangulo ${expanded ? 'expanded' : ''}`}
          onClick={toggleExpansion}>
          {

            <div className="pesquisado">
              <img src={user}></img>
              {/* flex-row */}
              <h1>
                {props.name} {props.sobrenome} 
              </h1>
              <h3>#{props.edv}</h3>
            </div>

          }
          {expanded && (
            <div className="mais">
              <h2>Allowed Doors: {props.area}</h2>
            </div>
          )}
        </div>
      </div>



    </div>
  );
};

export default Searched;
