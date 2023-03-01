import { useNavigate } from "react-router-dom";
import { getItem } from "../../services/LocalStorageFuncs";

export function useProfile() {
  const user = getItem("user");
  const { previewImage, name, email, cpf } = user;
  const navigate = useNavigate();

  const editarPerfil = () => {
    navigate("/app/profile/edit");
  };

  return {
    previewImage,
    name,
    email,
    cpf,
    editarPerfil,
  };
}
