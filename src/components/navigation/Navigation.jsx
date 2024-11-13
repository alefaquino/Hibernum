import './navigation.css'
import { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { Context } from '../../../context/userContext';
import api from '../../../utils/api';
import ImageProfile from '../ImageProfile/ImageProfile';
 
const Navigation = () => {

    const [token] = useState(localStorage.getItem('token'))
    const [imageProfile, setImageProfile] = useState()
    const { authenticated } = useContext(Context)

    useEffect(() => {
            if(authenticated){
                api.get('/users/checkuser', {
                    headers: {
                        Authorization: `Bearer ${JSON.parse(token)}`
                    }
                }).then((response) => {
                    setImageProfile(response.data.image)
                })
            }     
    }, [authenticated])

    return (
        <nav id='navegacao'>
            <div className='container d-flex justify-content-between align-items-center h-100'>
                <div id='logo-box'>
                    <Link to="/" className='d-flex align-items-center justify-content-center'>
                        <img src="/logo-orig.png" alt="" width='65' />
                        <h4 className='text-light mt-2 p-3 font-weight-bold'>Hibernum</h4>
                    </Link>
                </div>

                <div className='d-flex align-items-center justify-content-center'>
                    {
                        authenticated ?
                            (
                                <div>
                                    {
                                        imageProfile ? 
                                        <div className='d-flex align-items-center'>
                                            <a href="#"><img src="/notification-bell.svg" alt="" className='m-4' width={25}/></a>
                                            <ImageProfile image={`http://54.87.135.22:5000/images/users/${imageProfile}`}/>
                                        </div>
                                        :
                                        <ImageProfile image={'/placeholder-perfil.png'}/>
                                    }
                                    
                                    
                                </div>
                            )
                            :
                            (
                                <>
                                    <Link to="/login" id='login'>Login</Link>
                                    <Link to="/cadastro/suasInformacoes" id='cadastro'>Criar conta</Link>
                                </>
                            )
                    }

                </div>
            </div>
        </nav>
    );
}

export default Navigation;