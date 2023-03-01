import { useProfile } from "../hooks/pages/useProfile";
import iconPerfil from "../assets/images/perfil.png";

const Profile = () => {
  const H = useProfile();
  return (
    <div>
      <img src={H.user.previewImage ?? iconPerfil} alt="Imagem de Perfil" />
      {H.user.name ? (
        <div>
          <p>Nome: {H.user.name}</p>
          <p>E-mail: {H.user.email}</p>
          <p>CPF: {H.user.cpf}</p>
        </div>
      ) : (
        <p>Edite seu perfil ao clicar no botão abaixo</p>
      )}
      <button onClick={H.editarPerfil}>Editar Perfil</button>
    </div>
  );
};

export default Profile;
