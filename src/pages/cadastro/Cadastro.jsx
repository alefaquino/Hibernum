import { motion } from "framer-motion";
import Form from 'react-bootstrap/Form';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Cadastro = () => {
    return (
        <motion.div className="login"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
        >
            <div className="box_background"></div>
            <div className="box_form">
                <Form className="box_form_form">
                    {/* Dados Pessoais */}
                    <div className="row">
                        <div className="col-md-6">
                            <Form.Group className="mb-3" controlId="nome">
                                <Form.Label>Nome</Form.Label>
                                <Form.Control type="text" required />
                            </Form.Group>
                        </div>
                        <div className="col-md-6">
                            <Form.Group className="mb-3" controlId="telefone">
                                <Form.Label>Telefone</Form.Label>
                                <Form.Control
                                    type="tel"
                                    pattern="\d*"
                                    required
                                    placeholder="(XX) XXXXX-XXXX"
                                />
                            </Form.Group>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <Form.Group className="mb-3" controlId="email">
                                <Form.Label>E-mail</Form.Label>
                                <Form.Control type="email" required />
                            </Form.Group>
                        </div>
                        <div className="col-md-6">
                            <Form.Group className="mb-3" controlId="confirmar_email">
                                <Form.Label>Confirme seu E-mail</Form.Label>
                                <Form.Control type="email" required />
                            </Form.Group>
                        </div>
                    </div>

                    {/* Dados de Acesso */}
                    <div className="row">
                        <div className="col-md-6">
                            <Form.Group className="mb-3" controlId="senha">
                                <Form.Label>Senha</Form.Label>
                                <Form.Control type="password" required />
                            </Form.Group>
                        </div>
                        <div className="col-md-6">
                            <Form.Group className="mb-3" controlId="confirmar_senha">
                                <Form.Label>Confirme sua Senha</Form.Label>
                                <Form.Control type="password" required />
                            </Form.Group>
                        </div>
                    </div>

                    {/* Dados de Endereço */}
                    <div className="row">
                        <div className="col-md-6">
                            <Form.Group className="mb-3" controlId="cep">
                                <Form.Label>CEP</Form.Label>
                                <Form.Control type="text" required />
                            </Form.Group>
                        </div>
                        <div className="col-md-6">
                            <Form.Group className="mb-3" controlId="rua">
                                <Form.Label>Rua</Form.Label>
                                <Form.Control type="text" required />
                            </Form.Group>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <Form.Group className="mb-3" controlId="numero">
                                <Form.Label>Número</Form.Label>
                                <Form.Control type="text" required />
                            </Form.Group>
                        </div>
                        <div className="col-md-6">
                            <Form.Group className="mb-3" controlId="cidade">
                                <Form.Label>Cidade</Form.Label>
                                <Form.Control type="text" required />
                            </Form.Group>
                        </div>
                    </div>

                    <button type="submit" className="box_form_form_button w-100">
                        <NavLink to="/home" className="text-blue-500">Cadastre-se</NavLink>
                    </button>
                </Form>
            </div>
        </motion.div>
    );
}

export default Cadastro;
