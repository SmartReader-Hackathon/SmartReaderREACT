import React, { useState } from 'react';
import './searched.css';
import { logo, roxo, search} from "../../assets"

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
      </div>

      <div className='title'>
        <p1>smart</p1>
        <p className="gradient">Reader</p>
        <img src={logo} alt="Logo"></img>
      </div>

      <div className='body'>
        <div
          className={`retangulo ${expanded ? 'expanded' : ''}`}
          onClick={toggleExpansion}
        >
          {/* Conteúdo adicional que será mostrado quando expandido */}
          {expanded && (
            <div className="additional-content">
              <p></p>
            </div>
          )}
        </div>
      </div>

      

    </div>
  );
};

export default Searched;
