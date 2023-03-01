import React from "react";
import { ButtonsContainer, Form } from "../css/styles";
import { useLogin } from "../hooks/pages/useLogin";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";

const Login = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    passwordVisibility,
    seePassword,
    logar,
    cadastrar,
    disableButton,
    usuarioCadastrado,
  } = useLogin();

  return (
    <Form>
      <div>
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          name="email"
          placeholder="Insira um e-mail"
          value={email}
          onChange={({ target: { value } }) => setEmail(value)}
        />
      </div>

      <div>
        <label htmlFor="senha">Senha</label>
        <div className="btn">
          <input
            type={passwordVisibility ? "text" : "password"}
            name="senha"
            placeholder="Insira uma senha"
            value={password}
            onChange={({ target: { value } }) => setPassword(value)}
          />
          <button onClick={(e) => seePassword(e)}>
            {passwordVisibility ? (
              <BsFillEyeSlashFill size={20} />
            ) : (
              <BsFillEyeFill size={20} />
            )}
          </button>
        </div>
      </div>

      {!disableButton && (
        <ButtonsContainer>
          {usuarioCadastrado ? (
            <button onClick={(e) => logar(e)}>Logar</button>
          ) : (
            <button onClick={(e) => cadastrar(e)}>Cadastrar</button>
          )}
        </ButtonsContainer>
      )}
    </Form>
  );
};

export default Login;
