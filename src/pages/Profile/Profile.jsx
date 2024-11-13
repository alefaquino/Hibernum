import { useEffect, useState } from 'react';
import './Profile.css'
import prestadorServico from '/prestadorServico-icon.png';
import cliente from '/cliente-icon.png';
import api from '../../../utils/api';
import Select from 'react-select';
import Gallery from '../../components/Gallery/Gallery';

const Profile = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [user, setUser] = useState({})
    const [token] = useState(localStorage.getItem('token' || ''))
    const [selectedType, setSelectedType] = useState();
    const [imageUrls, setImageUrls] = useState([]);
    const [picturesAd, setPicturesAd] = useState()


    useEffect(() => {
        api.get('/users/checkuser', {
            headers: { Authorization: `Bearer ${JSON.parse(token)}` }
        }).then((response) => {
            setUser(response.data)
            setPicturesAd(response.data.picturesAd)
            console.log(response.data)
        })
    }, [token])


    useEffect(() => {
        if (user) {
            setSelectedType(user.category)
        }
    }, [user])

    useEffect(() => {
        if (picturesAd) {
            const imagensArray = JSON.parse(user.picturesAd);
            const urls = imagensArray.map((imageName) => `http://54.87.135.22:5000/images/servicos/${imageName}`);
            setImageUrls(urls);
        }

    }, [picturesAd])


    return (
        <div className='container'>
            <div id="main-box">
                <div className='d-flex align-items-center justify-content-between' id='picture-box'>
                    <div>
                        {
                            user.image ?
                                <label htmlFor='image-perfil' id='placeholder-perfil-edit' style={{ backgroundImage: `url('http://54.87.135.22:5000/images/users/${user.image}')` }}></label>
                                :
                                <label htmlFor='image-perfil' id='placeholder-perfil-edit' style={{ backgroundImage: "url('/placeholder-perfil.png')" }}></label>
                        }

                        <input type='file' name='imagePro' id='image-perfil' disabled={!isEditing} />
                    </div>
                    <div id='text-placeholder-perfil'>
                        {isEditing ? (
                            ''
                        ) : (
                            <button id='edit-profile-button' onClick={() => setIsEditing(true)}>
                                Deseja editar seu perfil?
                            </button>
                        )}
                    </div>
                </div>
                <div>
                    <div className='first-text-cadastro mb-3 mt-4'>
                        <h2 className='text-principal'>Suas informações</h2>
                        <p>Suas informações básicas</p>
                    </div>
                    <div>
                        <div id="input-group" className='d-flex flex-column'>
                            <label htmlFor="nome-completo">Nome completo:</label>
                            <input value={user.name} type="text" id='nome-completo' name='nome-completo' className='rounded input-component' disabled={!isEditing} />
                        </div>
                        <div id="input-group" className='d-flex flex-column'>
                            <label htmlFor="email">Email:</label>
                            <input value={user.email} type="text" id='email' name='email' className='rounded input-component' disabled={!isEditing} />
                        </div>
                        <div id="input-group" className='d-flex flex-column'>
                            <label htmlFor="celular">Celular:</label>
                            <input value={user.cellphone} type="text" id='celular' name='celular' className='rounded input-component' disabled={!isEditing} />
                        </div>
                        <div className='d-flex justify-content-between'>
                            <div id="input-group" className='d-flex flex-column' style={{ width: '48%' }}>
                                <label htmlFor="senha">Senha:</label>
                                <input type="text" id='senha' name='senha' className='rounded input-component' disabled={!isEditing} />
                            </div>
                            <div id="input-group" className='d-flex flex-column w-50'>
                                <label htmlFor="confirmSenha">Confirmar senha:</label>
                                <input type="text" id='confirmSenha' name='confirmSenha' className='rounded input-component' disabled={!isEditing} />
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='first-text-cadastro mb-3 mt-4'>
                        <hr />
                        <h2 className='text-principal'>Dados pessoais</h2>
                        <p>Seus dados pessoais</p>
                    </div>
                    <div className='d-flex justify-content-between'>
                        <div id="input-group" className='d-flex flex-column' style={{ width: '48%' }}>
                            <label htmlFor="cpf">CPF:</label>
                            <input value={user.CPF} type="text" id='cpf' name='cpf' className='rounded input-component' disabled={!isEditing} />
                        </div>
                        <div id="input-group" className='d-flex flex-column w-50'>
                            <label htmlFor="rg">RG:</label>
                            <input value={user.RG} type="text" id='rg' name='rg' className='rounded input-component' disabled={!isEditing} />
                        </div>
                    </div>
                    <div id="input-group" className='d-flex flex-column'>
                        <label htmlFor="dataNascimento">Data de nascimento:</label>
                        <input value={user.birthDate} type="text" id='dataNascimento' name='dataNascimento' className='rounded input-component' disabled={!isEditing} />
                    </div>

                </div>
                <div>

                    <div className='first-text-cadastro mb-3 mt-4'>
                        <hr />
                        <h2 className='text-principal'>Endereço</h2>
                        <p>Seu endereço</p>
                    </div>
                    <div className='d-flex justify-content-between'>
                        <div id="input-group" className='d-flex flex-column' style={{ width: '80%' }}>
                            <label htmlFor="endereco">Endereço:</label>
                            <input value={user.completeAdress} type="text" id='endereco' name='endereco' className='rounded input-component' disabled={!isEditing} />
                        </div>
                        <div id="input-group" className='d-flex flex-column' style={{ width: '19%' }}>
                            <label htmlFor="numero">Número:</label>
                            <input value={user.number} type="text" id='numero' name='numero' className='rounded input-component' disabled={!isEditing} />
                        </div>
                    </div>
                    <div className='d-flex justify-content-between'>
                        <div id="input-group" className='d-flex flex-column' style={{ width: '48%' }}>
                            <label htmlFor="cep">CEP:</label>
                            <input value={user.CEP} type="text" id='cep' name='cep' className='rounded input-component' disabled={!isEditing} />
                        </div>
                        <div id="input-group" className='d-flex flex-column w-50'>
                            <label htmlFor="estado">Estado:</label>
                            <input value={user.locationState} type="text" id='estado' name='estado' className='rounded input-component' disabled={!isEditing} />
                        </div>
                    </div>
                    <div className='d-flex justify-content-between'>
                        <div id="input-group" className='d-flex flex-column' style={{ width: '48%' }}>
                            <label htmlFor="bairro">Bairro:</label>
                            <input value={user.neighborhood} type="text" id='bairro' name='bairro' className='rounded input-component' disabled={!isEditing} />
                        </div>
                        <div id="input-group" className='d-flex flex-column w-50'>
                            <label htmlFor="cidade">Cidade:</label>
                            <input value={user.city} type="text" id='cidade' name='cidade' className='rounded input-component' disabled={!isEditing} />
                        </div>
                    </div>
                    <div id="input-group" className='d-flex flex-column'>
                        <label htmlFor="complemento">Complemento:</label>
                        <input value={user.complement} type="text" id='complemento' name='complemento' className='rounded input-component' disabled={!isEditing} />
                    </div>
                </div>
                <div>
                    <div className='first-text-cadastro mb-3 mt-4'>
                        <hr />
                        <h2 className='text-principal'>Tipo de cadastro</h2>
                        <p>Você está cadastrado como:</p>
                    </div>
                    <div>
                        {
                            user.tipoCadastro == "cliente" ?
                                <label htmlFor="cliente" id='cliente-checkbox' style={{ background: '#ffd8ab' }} className="w-100 tipo-cadastro-label d-flex align-items-center justify-content-center flex-column" >
                                    <img src={cliente} width={80} className='mb-2' />
                                    <h3>Cliente</h3>
                                </label>
                                :
                                <label htmlFor="prestadorServico" id='prestadorServico-checkbox' style={{ background: '#329cff60' }} className="w-100 tipo-cadastro-label d-flex align-items-center justify-content-center flex-column">
                                    <img src={prestadorServico} width={80} className='mb-2' />
                                    <h3>Prestador de serviço</h3>
                                </label>
                        }
                    </div>
                </div>
                {
                    user.tipoCadastro == "prestadorServico" ?
                        <div>
                            <div className='first-text-cadastro mb-3 mt-4'>
                                <hr />
                                <h2 className='text-principal'>Seu anúncio</h2>
                            </div>

                            <div id="input-group" className='d-flex flex-column'>
                                <label htmlFor="descriptionAd">Descrição:</label>
                                <textarea disabled={!isEditing} name="description" id="description" value={user.descriptionAd} cols="30" rows="10"></textarea>
                            </div>

                            <div id="input-group" className='d-flex flex-column mt-3'>
                                {
                                    isEditing ?
                                        <Select
                                            options={[{ value: { selectedType }, label: "Construção e Reformas" },
                                            { value: "manuntencaoReparos", label: "Manuntenção e Reparos" },
                                            { value: "servicosAutomotivos", label: "Serviços Automotivos" },
                                            { value: "servicosDomesticos", label: "Serviços Domésticos" },
                                            { value: "servicosJardinagem", label: "Serviços de Jardinagem" },
                                            ]}
                                            placeholder="Selecione a categoria"
                                        />
                                        :
                                        <div>
                                            <label htmlFor="descriptionAd">Categoria:</label>
                                            {user.category === "construcaoReformas"
                                                ? <h4>Construções e reformas</h4>
                                                : user.category === "servicosAutomotivos"
                                                    ? <h4>Serviços automotivos</h4>
                                                    : user.category === "servicosDomesticos"
                                                        ? <h4>Serviços domésticos</h4>
                                                        : user.category === "servicosJardinagem"
                                                            ? <h4>Serviços de Jardinagem</h4>
                                                            :
                                                            ''
                                            }

                                        </div>
                                }

                            </div>
                            <div id="input-group" className='d-flex flex-column'>
                                <label htmlFor="servicos">Serviços:</label>
                                <input value={user.servicesAd} type="text" id='servicos' name='servicos' className='rounded input-component' disabled={!isEditing} />
                            </div>

                            <div id="input-group" className='d-flex flex-column'>
                                {
                                    imageUrls ?
                                        <div className='mt-4'>
                                            <label>Fotos dos serviços:</label>
                                            <Gallery images={imageUrls} />
                                        </div>
                                        :
                                        ''
                                }
                            </div>
                            <div className='first-text-cadastro mb-3 mt-4'>
                                <hr />
                                <h2 className='text-principal'>Contatos</h2>
                            </div>
                            <div id="input-group" className='d-flex flex-column'>
                                <div id="input-group" className='d-flex flex-column'>
                                    <label htmlFor="whatsapp">Whatsapp:</label>
                                    <input value={user.whatsappContact} type="text" id='whatsapp' name='whatsapp' className='rounded input-component' disabled={!isEditing} />
                                </div>
                                <div id="input-group" className='d-flex flex-column'>
                                    <label htmlFor="instagram">Instagram:</label>
                                    <input value={user.instagramContact} type="text" id='instagram' name='instagram' className='rounded input-component' disabled={!isEditing} />
                                </div>
                                <div id="input-group" className='d-flex flex-column'>
                                    <label htmlFor="telefone">Telefone:</label>
                                    <input value={user.telephoneContact} type="text" id='instagram' name='instagram' className='rounded input-component' disabled={!isEditing} />
                                </div>
                            </div>

                        </div>

                        :
                        ''
                }

                <div className='d-flex justify-content-end mt-4'>
                    {isEditing && (
                        <button id='save-profile-button' onClick={() => setIsEditing(false)}>
                            Salvar Edições
                        </button>
                    )}
                </div>
            </div>

        </div>
    );
}

export default Profile;