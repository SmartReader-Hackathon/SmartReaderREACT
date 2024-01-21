import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home/home.jsx";
import Searched from "./pages/searched/searched.jsx";
import Cadastro from "./pages/cadastro/cadastro.jsx";

function App(){
    return(
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/searched" element={<Searched />}/>
                    <Route path="/cadastro" element={<Cadastro />}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;