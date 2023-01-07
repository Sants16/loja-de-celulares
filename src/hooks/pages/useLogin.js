import { useState } from "react"
import { getItem, setItem } from "../../services/LocalStorageFuncs"

export function useLogin() {

    const [passwordVisibility, setPasswordVisibility] = useState(false)
    const [user, setUser] = useState({})

    const seePassword = e => {
        e.preventDefault()
        setPasswordVisibility(!passwordVisibility)
    }

    const onChangeInput = e => {
        e.preventDefault()
        setUser({ 
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const limparCampos = () => {
        setUser({})
    }

    const logar = e => {
        e.preventDefault()
        const usuarioCadastrado = getItem('user') ?? null

        if(usuarioCadastrado !== null) {
            const { email, senha } = usuarioCadastrado

            if(email === user.email && senha === user.senha){
                console.log('logou')
            } else {
                console.log('email ou senha errados')
            }
        } else {
            console.log('esse usuário não existe')
            limparCampos()
        }
    }

    const cadastrar = e => {
        e.preventDefault()
        !getItem('user') ? setItem('user', user) : console.log('usuario ja existe')
        limparCampos()
    }


    return {
        passwordVisibility,
        setPasswordVisibility,
        seePassword,
        onChangeInput,
        user,
        logar,
        cadastrar
    }
}