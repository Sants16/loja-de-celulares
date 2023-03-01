import validator from "validator";
import { useEffect, useState } from "react";
import { getItem, setItem } from "../../services/LocalStorageFuncs";
import { hash, compare } from "../../services/PasswordEncrypting";
import { useNavigate } from "react-router-dom";

export function useLogin() {
  const usuarioCadastrado = getItem("user");
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [email, setEmail] = useState(
    usuarioCadastrado ? usuarioCadastrado.email : ""
  );
  const [password, setPassword] = useState("");
  const [disableButton, setDisableButton] = useState(true);

  const navigate = useNavigate();

  const seePassword = (e) => {
    e.preventDefault();
    setPasswordVisibility(!passwordVisibility);
  };

  useEffect(() => {
    if (email && password) {
      if (validator.isEmail(email) && password.length >= 6) {
        setDisableButton(false);
      } else {
        setDisableButton(true);
      }
    }
  }, [email, password]);

  const limparCampos = () => {
    setEmail("");
    setPassword("");
  };

  const logar = (e) => {
    e.preventDefault();

    if (usuarioCadastrado) {
      if (
        usuarioCadastrado.email === email &&
        compare(password, usuarioCadastrado.password.hash)
      ) {
        navigate("/app/store");
      } else {
        console.log("email ou senha errados");
      }
    } else {
      console.log("esse usuário não existe");
      limparCampos();
    }
  };

  const cadastrar = (e) => {
    e.preventDefault();
    const user = {
      email,
      password: {
        hash: hash(password),
        nohash: password,
      },
    };
    usuarioCadastrado
      ? console.log("usuario ja existe")
      : setItem("user", user);
    limparCampos();
  };

  return {
    passwordVisibility,
    seePassword,
    email,
    setEmail,
    password,
    setPassword,
    logar,
    cadastrar,
    disableButton,
    usuarioCadastrado,
  };
}
