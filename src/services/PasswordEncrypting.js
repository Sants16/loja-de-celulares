import bcrypt from 'bcryptjs'

export const hash = (senha) => {
    return bcrypt.hashSync(senha, 10)
}

export const compare = (senha, hashSenha) => {
    return bcrypt.compareSync(senha, hashSenha)
    // bcrypt.compare(senha, hashSenha, (err, batem) => {
    //     if(err) throw err
    //     else if(batem) return true
    //     else return false
    // })
}