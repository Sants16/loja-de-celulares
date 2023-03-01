import { useProfileEdit } from "../hooks/pages/useProfileEdit";
import iconPerfil from "../assets/images/perfil.png";

const ProfileEdit = () => {
  const H = useProfileEdit();
  return (
    <div>
      <form>
        <div>
          <h2>Selecione uma foto de Perfil</h2>
          {H.user.previewImage ? (
            <img
              src={H.previewImage ?? H.user.previewImage}
              alt="Imagem de Perfil"
              onClick={() => {
                H.fileInputRef.current.click();
              }}
            />
          ) : (
            <img
              src={H.previewImage ?? iconPerfil}
              alt="Imagem de Perfil"
              onClick={() => {
                H.fileInputRef.current.click();
              }}
            />
          )}
          {/* <img
            src={H.previewImage ?? iconPerfil}
            alt="Imagem de Perfil"
            onClick={() => {
              H.fileInputRef.current.click();
            }}
          /> */}
          <input
            type="file"
            style={{ display: "none" }}
            ref={H.fileInputRef}
            accept="image/*"
            onChange={(e) => H.mudaImagem(e)}
          />
        </div>

        <div>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            name="name"
            placeholder="Digite seu nome"
            value={H.name}
            onChange={({ target: { value } }) => H.setName(value)}
          />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Digite um novo Email"
            value={H.email}
            onChange={({ target: { value } }) => H.setEmail(value)}
          />
        </div>

        <div>
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            name="password"
            placeholder="Digite uma nova senha"
            value={H.password}
            onChange={({ target: { value } }) => H.setPassword(value)}
          />
        </div>

        <div>
          <label htmlFor="cpf">CPF:</label>
          <input
            type="number"
            name="cpf"
            placeholder="Digite seu CPF"
            value={H.cpf}
            onChange={({ target: { value } }) => H.setCpf(value)}
          />
        </div>

        <div>
          <label htmlFor="saldo">Saldo:</label>
          <input
            type="number"
            name="saldo"
            placeholder="Digite seu saldo atual"
            value={H.saldo}
            onChange={({ target: { value } }) => H.setSaldo(value)}
          />
        </div>

        <button onClick={(e) => H.salvarEdicao(e)}>Salvar</button>
      </form>
    </div>
  );
};

export default ProfileEdit;
