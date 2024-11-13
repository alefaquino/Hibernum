import NavegationCadastro from '../../components/Cadastro-components/navegation-cadastro/NavegationCadastro';
import { useRouteMatch, Route } from "react-router-dom";
import './Cadastro.css'
import SuasInformacoes from '../../components/Cadastro-components/SuasInformacoes/SuasInformacoes';
import DadosPessoais from '../../components/Cadastro-components/dados-pessoais/DadosPessoais';
import TipoCadastro from '../../components/Cadastro-components/tipo-cadastro/TipoCadastro';
import AnuncioPage from '../../components/Cadastro-components/anuncioPage/anuncioPage';
import React, { useEffect, useState} from 'react';
import { motion } from 'framer-motion';


const Cadastro = () => {
    
   const[suasInformacoesUser, setSuasInformacoesUser] = useState()
   const[dadosPessoaisUser, setDadosPessoais] = useState()
   const[dadosUser, setDadosUser] = useState()
   const[isPrestadorServicoCadastro, setIsPrestadorServicoCadastro] = useState(false)
   const[imageForm, setImageForm] = useState(new FormData())
   const[prestadorServicoType, setPrestadorServicoType] = useState()

    function salvarInformacoes(dados){
        setSuasInformacoesUser(dados)
    }

    function salvarFoto(foto){
        setImageForm(foto)
    }

    function SalvarInformacoesDadosPessoais(dadosPessoais){
        setDadosPessoais(dadosPessoais)
    }

    function salvarDadosUser(userData){
        setDadosUser(userData)
    }

    function salvarPrestadorServicoType(prestadorServicoTipo){
        setPrestadorServicoType(prestadorServicoTipo)
    }
    

    useEffect(()=>{
        if(prestadorServicoType){
            if(prestadorServicoType == "prestadorServico"){
                setIsPrestadorServicoCadastro(true)          
            }else if(prestadorServicoType == "cliente"){
                setIsPrestadorServicoCadastro(false)
            }
        }
    }, [dadosUser])
    useEffect(() => {
        // Aplicar a classe "no-scroll" quando o componente montar
        document.body.classList.add('no-scroll');
        return () => {
            // Remover a classe "no-scroll" quando o componente desmontar
            document.body.classList.remove('no-scroll');
        };
    }, []);
    return (
        <>
            <motion.div className='d-flex' id='cadastro-principal' style={{ overflowY: "hidden" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}>
                <NavegationCadastro prestadorServico={isPrestadorServicoCadastro}/>
                <Route path="/cadastro/suasInformacoes" exact>
                    <SuasInformacoes  onSave={salvarInformacoes} onSaveImage={salvarFoto}/>
                </Route>
                <Route path="/cadastro/dadosPessoais" exact>
                    <DadosPessoais onSaveDadosPessoais={SalvarInformacoesDadosPessoais} />
                </Route>
                <Route path="/cadastro/tipoCadastro" exact>
                    <TipoCadastro suasInformacoesDados={suasInformacoesUser} dadosPessoaisDados={dadosPessoaisUser} userDataEnv={salvarDadosUser} prestadorServicoDados={salvarPrestadorServicoType} imagemPerfil={imageForm}/>
                </Route>
                <Route path="/cadastro/anuncioPage" exact>
                    <AnuncioPage prestadorServicoDados={dadosUser}/>
                </Route>
            </motion.div>
        </>
    );
}

export default Cadastro;
