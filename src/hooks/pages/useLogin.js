import { useState } from "react"

export function useLogin() {

    const [passwordVisibility, setPasswordVisibility] = useState(false)

    const seePassword = e => {
        e.preventDefault()
        setPasswordVisibility(!passwordVisibility)
    }


    return {
        passwordVisibility,
        setPasswordVisibility,
        seePassword
    }
}