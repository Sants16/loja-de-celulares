import { useNavigate } from "react-router-dom";
import { getItem } from "../../services/LocalStorageFuncs";

export function useProfile() {
  const user = getItem("user");
  const navigate = useNavigate();

  const editarPerfil = () => {
    navigate("/app/profile/edit");
  };

  return {
    user,
    editarPerfil,
  };
}
