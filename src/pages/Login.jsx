import React from "react";
import { ButtonsContainer, Form } from "../css/styles";
import { useLogin } from "../hooks/pages/useLogin";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";

const Login = () => {
  const H = useLogin();

  return (
    <Form>
      <div>
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          name="email"
          placeholder="Insira um e-mail"
          value={H.email}
          onChange={({ target: { value } }) => H.setEmail(value)}
        />
      </div>

      <div>
        <label htmlFor="senha">Senha</label>
        <div className="btn">
          <input
            type={H.passwordVisibility ? "text" : "password"}
            name="senha"
            placeholder="Insira uma senha"
            value={H.password}
            onChange={({ target: { value } }) => H.setPassword(value)}
          />
          <button onClick={(e) => H.seePassword(e)}>
            {H.passwordVisibility ? (
              <BsFillEyeSlashFill size={20} />
            ) : (
              <BsFillEyeFill size={20} />
            )}
          </button>
        </div>
      </div>

      {!H.disableButton && (
        <ButtonsContainer>
          {H.usuarioCadastrado ? (
            <button onClick={(e) => H.logar(e)}>Logar</button>
          ) : (
            <button onClick={(e) => H.cadastrar(e)}>Cadastrar</button>
          )}
        </ButtonsContainer>
      )}
    </Form>
  );
};

export default Login;
