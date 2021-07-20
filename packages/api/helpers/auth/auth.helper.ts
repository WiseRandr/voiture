import { UserData } from "interface/user.int";
import jwtdecode from "jwt-decode";
const jwt = require("njwt");

export default class AuthHelper {
  static readonly secret: string = 'voiture-secrete-auth-key';
  static readonly sub: string = 'voiture-sub-auth-token';

  static async createToken(user: UserData): Promise<string> {
    if(!user) return "";
    
    const claims = {
      sub: AuthHelper.sub,
      username: user.username,
      role: user.role,
      id: user.id,
      name: user.name,
    };
    
    const token = jwt.create(claims, AuthHelper.secret);
    token.setExpiration();

    return token.compact();
  }

  static async verifyToken(token: string) {
    if(!token) return false;
    token = token.replace("Bearer ", "");

    return Boolean(await jwt.verify(token, AuthHelper.secret));
  }

  static parseToken(token: string): UserData {
    return jwtdecode(token);
  }
}