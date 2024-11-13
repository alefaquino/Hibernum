import React, { useState } from 'react';
import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';
import {  useRef, useEffect } from 'react';
import "./Navbar.scss";

const NavBar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const userName = location.state?.userName || '';
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const userIconRef = useRef(null);

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('userName');
        navigate('/login');
    };

    const togglePopup = () => {
        setIsPopupVisible(!isPopupVisible);
    };

    const closePopup = (event) => {
        if (userIconRef.current && !userIconRef.current.contains(event.target)) {
            setIsPopupVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener('click', closePopup);
        return () => {
            window.removeEventListener('click', closePopup);
        };
    }, []); // Adiciona e limpa o ouvinte ao montar/desmontar

    return (
        <>
            <nav className='nav'>
                <div className='nav_container container'>
                    <div className='nav_container_slice'>
                        <NavLink to={'/home'}>
                            <img src="./logo-orig.png" alt="Logo Bene" width={50} />
                        </NavLink>
                        <div className='nav_input'>
                            <div className='menu'>
                                <button className='dados_paciente'>
                                    <NavLink to={"/carrinho"} className='custom-navlink'>Produtos</NavLink>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='menu'>
                        <button className='dados_paciente'>
                            <NavLink to={"/anamneseList"} className='custom-navlink'>Meus Dados</NavLink>
                        </button>
                    </div>
                    <div>
                        <button className='pedidos_paciente'>
                            <NavLink to={"/cadastro"} className='custom-navlink'>Cadastrar Clientes</NavLink>
                        </button>
                    </div>
                    <div>
                        <button className='anamnese_paciente'>
                            <NavLink to={"/anamnese"} className='custom-navlink'>Cadastrar Produto</NavLink>
                        </button>
                    </div>
                    <div className='nav_container_slice'>
                    <NavLink to={'/carrinho'} className='nav_container_slice_carrinho'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="#1d1d1d" className="bi bi-cart" viewBox="0 0 16 16">
                                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                            </svg>
                           
                        </NavLink>

                       
                    </div>
                </div>
            </nav>

            <Outlet />
        </>
    );
}

export default NavBar;
