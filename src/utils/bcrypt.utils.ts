import bcrypt from "bcrypt";

// hash password
export const hashPassword = async (password: string) => {
  const Salt = await bcrypt.genSalt(15);
  return bcrypt.hash(password, Salt);
};

// verify password
export const verifyPassword = (password: string, hash: string) => {
  return bcrypt.compare(password, hash);
};
