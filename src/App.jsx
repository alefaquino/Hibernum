import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import Login from "./pages/login/Login";
import Home from "./pages/inicio/home";
import NavBar from "./components/Navbar/Navbar";
import Carrinho from "./pages/carrinho/Carrinho";
import './index.scss';
import Cadastro from "./pages/cadastro/Cadastro";
import Anamnese from "./pages/anamnese/Anamnes";
import AnamneseLista from './pages/anamneseList/AnamneseLista';

function App() {
    return (
        <div style={{ background: '#B3DDF2' }}>
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/cadastro" element={<Cadastro />} />
                    <Route path="/carrinho" element={<Carrinho />} />
                    
                    {/* Rotas com NavBar */}
                    <Route path="/" element={<NavBar cliente={true} />}>
                        <Route index element={<Home />} />
                        <Route path="home" element={<Home />} />
                        <Route path="anamnese" element={<Anamnese />} />
                        <Route path="anamneseLista" element={<AnamneseLista />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
