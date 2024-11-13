import React, { useState } from 'react';
import './Login.scss';
import { motion } from 'framer-motion';
import Form from 'react-bootstrap/Form';
import { NavLink, useNavigate } from 'react-router-dom';

const Login = () => {
   /* const navigate = useNavigate();
    const [cpf_paciente, setCpf] = useState('');
    const [senha_paciente, setSenhaPaciente] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();

        if (!cpf_paciente || !senha_paciente) {
            setError('Por favor, preencha ambos os campos.');
            return;
        }

        try {
            const response = await axios.post('http://127.0.0.1:3002/auth', {
                cpf_paciente,
                senha_paciente
            });

            // Verifica se a resposta contém o token
            if (response.status === 200) {
                const data = response.data;

                if (data.token) {
                    localStorage.setItem('token', data.token);
                    localStorage.setItem('name', data.nm_paciente);
                    navigate('/home', { state: { userName: data.nm_paciente } });
                } else {
                    setError('Erro: Nome do paciente não encontrado.');
                }
            } else {
                setError('Erro ao realizar login.');
            }
        } catch (error) {
            console.error('Erro ao fazer login:', error);
            setError('Erro ao conectar ao servidor.');
        }
    }*/

    return (
        <motion.div className="login"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
        >
            <div className="box_background"></div>
            <div className="box_form">
                <img src="./logo-orig.png" width={200}  />
                <Form className="box_form_form" >
                    <Form.Group className="mb-3" controlId="cpfInput">
                        <Form.Label>CPF</Form.Label>
                        <Form.Control
                            type="text"
                            /*value={cpf_paciente}
                            onChange={(e) => setCpf(e.target.value)} */
                            placeholder="Digite seu CPF"
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="senhaInput">
                        <Form.Label>Senha</Form.Label>
                        <Form.Control
                            type="password"
                            /*value={senha_paciente}
                            onChange={(e) => setSenhaPaciente(e.target.value)}*/
                            placeholder="Digite sua senha"
                        />
                    </Form.Group>
                    
                    <button className="box_form_form_button w-100" type="submit"  to="/home">
                    <NavLink to="/home" className="text-blue-500">Entrar</NavLink>
                    </button>
 
                </Form>
                <div>
                    <NavLink to="/cadastro" className="text-blue-500">Cadastre-se</NavLink>
                    </div>
               
            </div>


        </motion.div>
    );
};

export default Login;
