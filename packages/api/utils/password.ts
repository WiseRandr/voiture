import bcrypt from "bcryptjs";

export const hashPassword = (password: string): Promise<string> => bcrypt.hash(password, 8);

export const verifyPassword = (password: string, cryptPassword: string): Promise<boolean> =>  bcrypt.compare(password, cryptPassword);
