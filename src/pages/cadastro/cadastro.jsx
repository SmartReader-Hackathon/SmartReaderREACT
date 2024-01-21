import React, { useState } from "react";
import "./cadastro.css";
import { logo, roxo } from "../../assets";
import { Link } from 'react-router-dom';

const Cadastro = () => (
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
                    <input className="nome"></input>

                    <div className="label">Last Name:</div>
                    <input className="last"></input>

                    <div className="label">EDV:</div>
                    <input className="edvcadastro"></input>

                    <div className="label">Allowed Doors:</div>
                    <input className="doors"></input>

                    <button className="cada">Register</button>
                </div>
            </div>
        </div>
    );
export default Cadastro;