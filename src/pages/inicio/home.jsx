import React, { useState, useEffect } from 'react';
import Carrousel from "../../components/Carrousel/Carrousel";
import "./home.scss";
import { motion } from "framer-motion";



const ProdutoItem = ({ imgSrc, nome, preco }) => {
    return (
        <div className="produto-item text-center">
            <div className="produto-img">
                <img src={imgSrc} alt={nome} />
            </div>
            <div className="produto-text">
                <p className="produto-text-nome">{nome}</p>
                <span className="produto-text-preco">{preco}</span>
            </div>
            <button className='button'>Alugar</button>
        </div>
    );
};



const Home = () => {
    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -60 }}
                transition={{ duration: 0.4 }}
            >
                <Carrousel />
                <div className="container my-4">
                    <div className="d-flex flex-wrap justify-content-center gap-4">
                        <ProdutoItem imgSrc="./a.jpg" nome="Agasalho" preco="R$240,00" />
                        <ProdutoItem imgSrc="./b.jpg" nome="Gôrro" preco="R$80,00" />
                        <ProdutoItem imgSrc="./c.jpg" nome="Luvas" preco="R$40,00" />
                        <ProdutoItem imgSrc="./d.jpg" nome="Corta vento" preco="R$300,00" />
                        <ProdutoItem imgSrc="./e.jpg" nome="kit mala de viagem" preco="R$500,00" />
                    </div>
                </div>
            </motion.div>
        </>
    );
};

export default Home;
