import bcrypt from "bcryptjs";

export const hash = (senha) => {
  return bcrypt.hashSync(senha, 10);
};

export const compare = (senha, hashSenha) => {
  return bcrypt.compare(senha, hashSenha);
};
