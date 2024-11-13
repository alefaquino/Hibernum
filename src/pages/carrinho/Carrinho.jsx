import React, { useState } from 'react';
import ProdutoCarrinho from "../../components/produtoCarrinho/ProdutoCarrinho";
import "./Carrinho.scss"
import { NavLink } from 'react-router-dom';
import { motion } from "framer-motion";

const Carrinho = () => {
    return (
        <motion.div
            className="container carrinho_container"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -60 }}
            transition={{ duration: 0.4 }}
        >
            <div className="row h-100 py-3">
                <div className="carrinho col-9">
                    <h1>Carrinho</h1>
                    <div className="carrinho_item">
                        <ProdutoCarrinho />
                       
                    </div>
                </div>

                <div className="cashout col-3">
                    <h1>Cashout</h1>
                    <div className="cashout_valores">
                        <div className="cashout_valores_item">
                            <span className="cashout_valores_item_titulo">Descontos</span>
                            <span className="cashout_valores_item_desc">R$ 0,00</span>
                        </div>
                        <div className="cashout_valores_item">
                            <span className="cashout_valores_item_titulo">Subtotal</span>
                            <span className="cashout_valores_item_desc">R$ 500,00</span>
                        </div>
                        <div className="cashout_valores_item">
                            <span className="cashout_valores_item_titulo cashout_valores_item_titulo_total">Total</span>
                            <span className="cashout_valores_item_desc cashout_valores_item_desc_total">R$ 500,00</span>
                        </div>

                    </div>

                    <div className="cashout_pagamento">
                        <button ><NavLink to = '/home'>Realizar pagamento</NavLink></button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default Carrinho;