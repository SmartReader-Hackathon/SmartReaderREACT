import React, { useState } from "react";
import "./home.css";
import { logo } from "../../assets";
import axios from "axios";
import { Link } from 'react-router-dom';
import Searched from "../searched/searched";


const Home = () => {
  const [edv, setedv] = useState("");
  const [listaConteudo, setListaConteudo] = useState([])
  const [controlaSearched, setControlaSearched] = useState(false)

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      console.log(edv)
      callAxios();
    }
  };

  async function callAxios() {
    axios
      .get(`http://localhost:8000/user/${edv}`)
      .then((res) => {
        // window.location.href = '/searched'
        console.log("Resultado: ", res.data)
        setListaConteudo(res.data)
        setControlaSearched(true)
      })
      .catch((e) => {
        console.log("Erro: ", e);
        alert("EDV not registered!")
      });
  }

  return (
    <>
      {
        !controlaSearched ?
          <>
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
                <p1>Smart</p1>
                <p className="gradient">Reader</p>
                <img src={logo} alt="Logo"></img>
              </div>

              <div className="searchbar">
                <input
                  minLength={8}
                  maxLength={8}
                  onChange={(e) => setedv(e.target.value)}
                  placeholder="Insert the EDV..."
                  onKeyDown={(e) => handleKeyPress(e)}
                ></input>
                <h1></h1>
              </div>
            </div></> : <>
            <Searched props={listaConteudo} />
          </>
      }
    </>
  )
}
export default Home;