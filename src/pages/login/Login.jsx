import { useState, useEffect, useContext } from 'react'
import Input from '../../components/input/Input'
import './login.css'
import { Link } from 'react-router-dom/cjs/react-router-dom'
import { motion } from 'framer-motion'
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { useHistory } from "react-router-dom"
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'
import * as yup from "yup"

import { Context } from "../../../context/userContext"

const validationSchema = yup.object().shape({
  email: yup.string().email("Digite um email válido").required("Campo obrigatório."),
  password: yup.string().required("Campo obrigatório.")
})


function Login() {
  const { login } = useContext(Context)
  const [error, setError] = useState('')
  
  const history = useHistory()


  const { handleSubmit, control, formState: { errors } } = useForm({
    resolver: yupResolver(validationSchema)
  });

  const handleLogin = async (data) => {
    try {
      await login(data, history);
    } catch (error) {
      const errorMessage = error.message.replace('Error: ', '')
      document.getElementById('showErro').innerHTML = errorMessage
      setTimeout(() => {
        document.getElementById('showErro').innerHTML = ''
      }, 5000);
      setError(error)
    }
  }


  function Mostrarsenha() {
    var caixaSenha = document.getElementById("senha")
    if (caixaSenha.type === "password") {
      caixaSenha.type = "text"
    } else {
      caixaSenha.type = "password"
    }
  }


  return (
    <>
      <motion.main className='d-flex'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div id='side-blue' className='d-flex flex-column justify-content-center align-items-center'>
          <div className='text-light mb-5' id='bem-vindo-side-blue'>
            <h3>Seja bem vindo ao Hibernum</h3>
            <p>Preencha todos os <br /> dados corretamente</p>
          </div>

          <div>
            <img src="./bg-login.jpg" width='551' alt="" height='420' />
          </div>
        </div>

        <div id='form-login' className='d-flex justify-content-center align-items-center'>

          <div>
            <div id='logo-login' className='d-flex flex-column align-items-center'>
              <Link to="/"><img src="logo-orig.png" width='90' alt="" /></Link>
              <div className='text-center'>
                <h2 className='mt-3'>Seja bem vindo</h2>
                <p>Digite os dados para realizar o login</p>
              </div>
            </div>

            <form action="" className='mt-3' id="forms-login" onSubmit={handleSubmit(data =>{handleLogin(data)})}>
              <div className='d-flex flex-column'>
                <Input
                  id="email"
                  label="Email"
                  type="text"
                  name="email"
                  placeholder=""
                  validation={{ control }}
                  error={errors.email}
                />
              </div>
              <div className='d-flex flex-column'>
                <Input
                  id="senha"
                  label="Senha"
                  type="password"
                  name="password"
                  placeholder=""
                  validation={{ control }}
                  error={errors.password}
                />
              </div>
              <div className='text-center'>
              <span id='showErro' style={{color:'red', fontSize: '14px'}}></span>
              </div>


              <div id='opcoes-login' className='d-flex align-items-center justify-content-between'>
                <div>
                  <input type="checkbox" name="mostrarSenha" id="mostrarSenha" onClick={Mostrarsenha} />
                  <label htmlFor="mostrarSenha" className='p-2 nomeMostrar'>Mostrar senha</label>
                </div>

                <div id='esqueceu-senha'>
                  <Link to="/recuperarSenha">Esqueceu senha?</Link>
                </div>
              </div>

              <div id="botao-login" className='w-100 mt-2'>
                <button className='rounded text-light' type='submit'><NavLink to ='/prestadorServicoAnuncio'>Entrar na conta</NavLink></button>
              </div>
            </form>

            <div id='cadastro-login' className='text-center mt-4'>
              <h6>Não tem login? <Link to="/cadastro/suasInformacoes" id='cadastre-se-login'>Cadastre-se</Link></h6>
            </div>
          </div>
        </div>
      </motion.main>


    </>

  )
}

export default Login
