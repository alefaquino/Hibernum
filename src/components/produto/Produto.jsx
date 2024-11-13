import React from 'react';
import "./Produto.scss";

const Produto = ({ nome }) => {
    return ( 
        <div>
            <div className="produto_img">
                <img src="/imagens/a.jpg" alt="Produto A" />
            </div>
            <div className="produto_text">
                <span className="produto_text_nome">
                    <p>{nome}</p>
                </span>
                <span className="produto_text_preco">R$240,00</span>
            </div>
            
            <div className="produto_img">
                <img src="/imagens/b.jpg" alt="Produto B" />
            </div>
            <div className="produto_text">
                <span className="produto_text_nome">
                    <p>Agasalho</p>
                </span>
                <span className="produto_text_preco">R$80,00</span>
            </div>
            
            <div className="produto_img">
                <img src="/imagens/c.jpg" alt="Produto C" />
            </div>
            <div className="produto_text">
                <span className="produto_text_nome">
                    <p>{nome}</p>
                </span>
                <span className="produto_text_preco">R$80,00</span>
            </div>
        </div>
    );
};

export default Produto;
