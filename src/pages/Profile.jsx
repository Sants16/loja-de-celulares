import { useProfile } from "../hooks/pages/useProfile";
import iconPerfil from "../assets/images/perfil.png";

const Profile = () => {
  const { previewImage, name, email, cpf, editarPerfil } = useProfile();
  return (
    <div>
      <img src={previewImage ?? iconPerfil} alt="Imagem de Perfil" />
      {name ? (
        <div>
          <p>Nome: {name}</p>
          <p>E-mail: {email}</p>
          <p>CPF: {cpf}</p>
        </div>
      ) : (
        <p>Edite seu perfil ao clicar no botão abaixo</p>
      )}
      <button onClick={editarPerfil}>Editar Perfil</button>
    </div>
  );
};

export default Profile;
