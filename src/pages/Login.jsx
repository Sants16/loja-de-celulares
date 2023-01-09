import React from 'react';
import { ButtonsContainer, Container, Form } from '../css/styles';
import { useLogin } from '../hooks/pages/useLogin';
import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs'

const Login = () => {
    const H = useLogin()

    return ( 
        <Container>
            <Form>
                    <div>
                        <label htmlFor="email">E-mail</label>
                        <input 
                            type="email" 
                            name='email' 
                            placeholder='Insira um e-mail'
                            value={H.user.email ?? ''}
                            onChange={(e) => H.onChangeInput(e)}
                        />
                    </div>

                    <div>
                        <label htmlFor="senha">Senha</label>
                        <div className='btn'>
                            <input 
                                type={H.passwordVisibility ? 'text' : 'password'} 
                                name='senha' 
                                placeholder='Insira uma senha'
                                value={H.user.senha ?? ''}
                                onChange={(e) => H.onChangeInput(e)}
                            />
                            <button onClick={(e) => H.seePassword(e)}>
                                {
                                    H.passwordVisibility ? <BsFillEyeSlashFill size={20}/> 
                                    : <BsFillEyeFill size={20}/>
                                }
                            </button>
                        </div>
                    </div>

                    <ButtonsContainer>
                        <button onClick={(e) => H.logar(e)}>Logar</button>
                        <button onClick={(e) => H.cadastrar(e)}>Cadastrar</button>
                    </ButtonsContainer>
            </Form>
        </Container>
     );
}
 
export default Login;