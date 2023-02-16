import { useProfile } from "../hooks/pages/useProfile";
import iconPerfil from "../assets/images/perfil.png";

const Profile = () => {
  const H = useProfile();
  return (
    <div>
      <img src={H.user.previewImage ?? iconPerfil} alt="Imagem de Perfil" />
      <p>Nome: {H.user.name ?? "Adicione um nome ao editar o perfil"}</p>
      <p>E-mail: {H.user.email}</p>
      <p>CPF: {H.user.cpf ?? "Adicione seu CPF ao editar o perfil"}</p>
      <button onClick={H.editarPerfil}>Editar Perfil</button>
    </div>
  );
};

export default Profile;
