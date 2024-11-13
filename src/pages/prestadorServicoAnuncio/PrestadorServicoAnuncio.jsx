import Gallery from '../../components/Gallery/Gallery';
import './prestadorServicoAnuncio.css'
import api from '../../../utils/api'
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom'
import Comment from '../../components/comment/Comment';
import ModalContacts from '../../components/modal-contacts/ModalContacts';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';

const PrestadorServicoAnuncio = () => {
    const [prestadorServico, setPrestadorServico] = useState({})
    const [picturesURL, setPicturesURL] = useState([])
    const [servicos, setServicos] = useState([])
    const { id } = useParams()
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
      };
    
      const closeModal = () => {
        setModalOpen(false);
      };

    let staticComments = [
        {
            "Nome": "Luciana calado",
            "Comentario": "Ótimo agasalho !",
            "Avaliacao": "4.5"
        },
        {
            "Nome": "Marcio Henrique",
            "Comentario": "Ficou pequeno em Mim , Mas ajudou bastante !!",
            "Avaliacao": "5.0"
        },
        
    ]

    useEffect(() => {
        api.get(`/users/${id}`).then((response) => {
            setPrestadorServico(response.data.user)
        })
    }, [])

    useEffect(() => {
        if (prestadorServico && prestadorServico.servicesAd) {
            const arrayServices = prestadorServico.servicesAd.split(',')
            setServicos(arrayServices)
        }
        if (prestadorServico && prestadorServico.picturesAd) {
            const jsonArray = JSON.parse(prestadorServico.picturesAd);



            const baseUrl = 'http://54.87.135.22:5000/images/servicos';
            const pictureUrls = jsonArray.map(fileName => `${baseUrl}/${fileName}`);
            setPicturesURL(pictureUrls);
        }

    }, [prestadorServico]);


    return (
        <div className='container d-flex justify-content-between' id='main-anuncio'>
            <div id='perfil-box-anuncio' className='d-flex align-items-center flex-column justify-content-center'>
                <div id='foto-perfil-anuncio' ></div>
               <img scr='bg-login.jpg'></img>
                
                
            </div>

            <div id='other-side-anuncio'>
                <div id='description-box-anuncio'>
                    <p>{prestadorServico.descriptionAd}</p>
                </div>
                <div className='my-4'>
                    <div className='my-3'>
                        <h3 className='text-principal'>Produtos Alugados</h3>
                    </div>
                    <div id='gallery-box-anuncio'>
                        <div id='gallery-anuncio'>
                            <Gallery images={picturesURL} />
                        </div>
                    </div>
                </div>
                <div id='contract-button' className='mt-3'>
                    <button ><NavLink to = '/'>Alugar</NavLink></button>
                </div>
                <ModalContacts isOpen={modalOpen} onClose={closeModal} whatsapp={prestadorServico.whatsappContact} instagram={prestadorServico.instagramContact} telefone={prestadorServico.telephoneContact} />
                <div id='comments-section' className='mt-4'>
                    <h5 className='text-principal mb-3'>Comentarios (4)</h5>
                    <div>
                        {staticComments.map((comentario, index) => (
                            <Comment
                                key={index}
                                Nome={comentario.Nome}
                                Avaliacao={comentario.Avaliacao}
                                Comentario={comentario.Comentario}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PrestadorServicoAnuncio;