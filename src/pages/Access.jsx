import React from "react";
import { AccessContainer } from "../css/stylesAccess";
import { useAccess } from "../hooks/pages/useAccess";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";

const Access = () => {
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
  } = useAccess();

  return (
    <AccessContainer>
      <form>
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
          <div className="input_password">
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

        <div>
          {usuarioCadastrado ? (
            <button
              className="access_btn"
              disabled={disableButton}
              onClick={(e) => logar(e)}
            >
              Logar
            </button>
          ) : (
            <button
              className="access_btn"
              disabled={disableButton}
              onClick={(e) => cadastrar(e)}
            >
              Cadastrar
            </button>
          )}
        </div>
      </form>
    </AccessContainer>
  );
};

export default Access;
