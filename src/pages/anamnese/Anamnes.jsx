import Form from 'react-bootstrap/Form';
import React from 'react';
import { motion } from "framer-motion";
import { NavLink } from 'react-router-dom';

const Anamnese = () => {
    return (
        <>
            <motion.div
                className="login"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
            >
                <div className="box_background"></div>
                <div className="box_form">
                    <Form className="box_form_form">
                        {/* Dados Pessoais */}
                        <div className="row">
                            <div className="">
                                <Form.Group className="mb-3" controlId="nome">
                                    <Form.Label>Fornecedor</Form.Label>
                                    <Form.Control type="text" required />
                                </Form.Group>
                            </div>
                            <div className="">
                                <Form.Group className="" controlId="tipoProduto">
                                    <Form.Label>Tipo de Produto</Form.Label>
                                    <Form.Control type="text" required />
                                </Form.Group>
                            </div>
                        </div>

                        <div className="row">
                            <div className="">
                                <Form.Group className="mb-3" controlId="precoAluguel">
                                    <Form.Label>Preço do aluguel</Form.Label>
                                    <Form.Control type="text" required />
                                </Form.Group>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6">
                                <Form.Group className="mb-3" controlId="numeroContato">
                                    <Form.Label>Número para contato</Form.Label>
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

                        {/* Campo para envio de fotos */}
                        <div className="row">
                            <div className="">
                                <Form.Group className="mb-3" controlId="uploadFotos">
                                    <Form.Label>Fotos do produto</Form.Label>
                                    <Form.Control type="file" multiple accept="image/*" />
                                    <Form.Text className="text-muted">
                                        Aceitamos arquivos nos formatos: JPG, PNG.
                                    </Form.Text>
                                </Form.Group>
                            </div>
                        </div>

                        <button type="submit" className="box_form_form_button w-100">
                            <NavLink to="/home" className="text-blue-500">Cadastrar Produto</NavLink>
                        </button>
                    </Form>
                </div>
            </motion.div>
        </>
    );
};

export default Anamnese;
