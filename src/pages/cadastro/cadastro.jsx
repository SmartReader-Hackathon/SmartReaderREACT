import React, { useState } from "react";
import "./cadastro.css";
import { logo } from "../../assets";
import { Link } from 'react-router-dom';
import axios from "axios";

const Cadastro = () => {
  const [name, setFirstName] = useState("");
  const [sobrenome, setLastName] = useState("");
  const [edv, setEdv] = useState("");
  const [area, setAllowedDoors] = useState("");

  const handleRegister = async () => {
    try {
      const response = await axios.post("http://localhost:8000/user", {
        name: String(name),
        sobrenome: String(sobrenome),
        edv: parseInt(edv),
        area: String(area),
      });
    }
     catch (error) {
      console.error("Erro ao registrar usuário:", error);
    }
  };

  return (
    <div>
      <div className='container'>
        <div className='cad'>
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

        <div className="cadastrando">
          <div className="registration">Registration</div>

          <div className="label">First Name:</div>
          <input
            className="nome"
            value={name}
            onChange={(e) => setFirstName(e.target.value)}
          ></input>

          <div className="label">Last Name:</div>
          <input
            className="last"
            value={sobrenome}
            onChange={(e) => setLastName(e.target.value)}
          ></input>

          <div className="label">EDV:</div>
          <input
            className="edvcadastro"
            value={edv}
            onChange={(e) => setEdv(e.target.value)}
          ></input>

          <div className="label">Allowed Doors:</div>
          <input
            className="doors"
            value={area}
            onChange={(e) => setAllowedDoors(e.target.value)}
          ></input>

          <button className="cada" onClick={handleRegister}>
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cadastro;
