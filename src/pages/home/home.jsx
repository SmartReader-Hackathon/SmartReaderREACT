import React, { useState } from "react";
import "./home.css";
import { logo } from "../../assets";
import axios from "axios";
import { Link } from 'react-router-dom';


const Home = () => {
  const [edv, setedv] = useState("");

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      console.log(edv)
      callAxios();
    }    
  };

  async function callAxios() {
    let url = axios
      .get(`http://localhost:8000/user/${edv}`)
      .then(() => {
        window.location.href = '/searched'
      })
      .catch((e) => {
        console.log("Erro: ", e);
      });
  }

  return (
    <div className="container">
      <div className="hh">
        <p1>CaP/ETS</p1>
        <p>Hackathon 1.2024</p>
        <Link to="/Cadastro">
          <button className="new">New Register</button>
        </Link>
      </div>

      <div className="test">
        <p>Low Cost</p>
        <p>Access</p>
        <p className="gradient">Controller</p>
        <button className="manual">User Guide</button>
      </div>

      <div className="logo">
        <p1>smart</p1>
        <p className="gradient">Reader</p>
        <img src={logo} alt="Logo"></img>
      </div>

      <div className="searchbar">
        <input
          onChange={(e) => setedv(e.target.value)}
          placeholder=""
          onKeyDown={(e)=>handleKeyPress(e)}
        ></input>
        <h1></h1>
      </div>
    </div>
  );
};

export default Home;