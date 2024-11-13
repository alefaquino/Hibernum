import { Link } from 'react-router-dom/cjs/react-router-dom';
import './forgotPassword.css'

const ForgotPassword = () => {
    return (
        <>
            <div id='principal'>
                <div className='container' id='principal-box'>
                    <div className="head">
                        <Link to="/" className='d-flex align-items-center justify-content-center'>
                            <img src="/logo.png" alt="" width='60'/>
                            <h4 className='text-light mt-2 p-3 font-weight-bold'>MãoNaObra</h4>
                        </Link>
                    </div>
                    <div className='d-flex mb-5'>
                        <div className="caixa">
                            <div className="caixa-titulo">
                                Esqueceu sua senha?
                            </div>
                            <div className="caixa-subtitulo">
                                Digite seu endereço de e-mail para redefinir sua senha.
                            </div>
                            <div className="caixa-input">
                                <input type="email" id="email" placeholder="E-mail" />
                            </div>
                            <button className="botao">
                                Recuperar senha

                            </button>
                        </div>
                    </div>
                    <div></div>
                </div>
            </div>
        </>
    );
}

export default ForgotPassword;
