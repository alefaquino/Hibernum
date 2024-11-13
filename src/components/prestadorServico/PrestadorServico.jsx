import { Link } from 'react-router-dom/cjs/react-router-dom';
import './PrestadorServico.css'
import estrela from "/star.svg"

const PrestadorServico = ({ foto, nome, descricao, servicos, avaliacao,rota,cidade }) => {
  let servicosArray = servicos.split(',')
  return (
    <>
      <Link to={rota}>
        <div className='card mb-4'>

          

          <div className='d-flex flex-column justify-content-around px-2 py-1'>
            <div className='d-flex flex-column justify-content-between'>
              <div>
                <h5 id='Nome'>{nome}</h5>
              </div>
              <div id="descricao-box">
                <p id="text">{descricao}</p>
              </div>
              
            </div>
            <div className='d-flex flex-column'>
              <span className='py-2 d-flex align-items-center'>
                <img src="/location.svg" alt=""/>
                <span className='p-1 text-strong'>{cidade}</span>
              </span>
              <p id='services'>serviços:</p>
              <p id='function'>
                {servicosArray.join(' · ')}
              </p>
            </div>
          </div>
          <div>
            <button id='botão'>Contratar</button>
          </div>

        </div>
      </Link>

    </>
  );
}

export default PrestadorServico;