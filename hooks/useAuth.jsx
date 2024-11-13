import api from "../utils/api";
import {useState, useEffect} from "react"
import {useHistory} from "react-router-dom"

const useAuth = () => {
    const[authenticated, setAuthenticated] = useState(false)
    const history = useHistory()

    useEffect(()=>{
        const token = localStorage.getItem('token')

        if(token){
            api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`
            setAuthenticated(true)
        }
    }, [])

    async function login(user, history){
        try {
            const data = await api.post('/users/login', user).then((response)=>{
                return response.data
            })

            await authUser(data)
            history.push('/')
        } catch (error) {
            throw new Error('Acesso negado. Verifique suas informações de login.');
        }
    }

    async function register(user, history){

        try {
            const data = await api.post('/users/register', user, {
                headers: {'Content-Type': 'multipart/form-data'}
            }).then((response)=>{
                return response.data
            })

            await authUser(data)
            history.push('/');
        } catch (error) {
            history.push('/cadastro/suasInformacoes')
            // throw new Error('Email já cadastrado. Escolha um email novo ou faça login')
            console.log(error)
        }
    }

    async function authUser(data){
        setAuthenticated(true)
        localStorage.setItem('token', JSON.stringify(data.token))

    }

    function logout(){
        setAuthenticated(false)
        localStorage.removeItem("token")
        api.defaults.headers.Authorization = undefined
        window.location.reload()
    }

    return {authenticated, register, logout,login}
}
 
export default useAuth