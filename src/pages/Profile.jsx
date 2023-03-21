import { useProfile } from "../hooks/pages/useProfile";
import iconPerfil from "../assets/images/perfil.png";
import { ProfileContainer } from "../css/stylesProfile";

const Profile = () => {
  const { previewImage, name, email, cpf, editarPerfil } = useProfile();

  return (
    <ProfileContainer>
      <div>
        <img src={previewImage ?? iconPerfil} alt="Imagem de Perfil" />
        {name ? (
          <div className="infos">
            <p>
              <span>Nome:</span> {name}
            </p>
            <p>
              <span>E-mail:</span> {email}
            </p>
            <p>
              <span>CPF:</span> {cpf}
            </p>
          </div>
        ) : (
          <p className="message">Edite seu perfil ao clicar no botão abaixo</p>
        )}
        <button onClick={editarPerfil}>Editar Perfil</button>
      </div>
    </ProfileContainer>
  );
};

export default Profile;
