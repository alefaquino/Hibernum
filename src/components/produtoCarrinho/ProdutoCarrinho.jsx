import React, { useState } from 'react';
import "./ProdutoCarrinho.scss"
import { Unstable_NumberInput as NumberInput } from '@mui/base/Unstable_NumberInput';

const ProdutoCarrinho = () => {
    return ( 
        <div className="produtoCarrinho">
            <div className="produtoCarrinho_image">
                <img src="./e.jpg" alt="Kit mala " />
            </div>

            <div className="produtoCarrinho_text">
                <span className="produtoCarrinho_text_titulo">Kit mala cromada </span>
                <span className="produtoCarrinho_text_desc text-truncate">Kit mala</span>
            </div>

            <div className="produtoCarrinho_preco">
                <span className="produtoCarrinho_preco_titulo">Preço</span>
                <span className="produtoCarrinho_preco_preco">R$500,00</span>
            </div>

            <div className="produtoCarrinho_preco">
            <span className="produtoCarrinho_preco_titulo">Quantidade</span>
            <span className="produtoCarrinho_preco_preco">1</span>
            </div>
            <div className="produtoCarrinho_preco">
                <button className="btn btn-danger w-25 d-flex align-items-center justify-content-center"><i class="bi bi-trash3-fill"></i></button>
            </div>
        </div>
     );
}
 
export default ProdutoCarrinho;