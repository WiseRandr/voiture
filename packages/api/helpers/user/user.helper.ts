import Database from "database/database"
import AuthHelper from "helpers/auth/auth.helper";
import { UserAddInput, UserData } from "interface/user.int";
import { hashPassword, verifyPassword } from "utils/password";

export default class UserHelper extends Database {
  constructor() {
    super('user');
  }

  async findBy(key: string, value: string) {
    const all = await this.find();
    return await all.find(a => a[key] === value);
  }

  async findByUsername(username: string): Promise<UserData | undefined> {
    return await this.findBy('username', username);
  }

  async createUser(data: UserAddInput) {
    const role = data.role || 'USER';

    if(data.password !== data.repeatpassword) throw new Error('Password does not match');
    if(await this.findByUsername(data.username)) throw new Error(`Invalid username. Username ${data.username} may already have been taken`);

    data.password = await hashPassword(data.password);
    
    return await this.create({ ...data, role, repeatpassword: undefined });
  }

  async login(username: string, password: string) {
    const user = await this.findByUsername(username);

    // Combine both for security reason
    if(!user || !await verifyPassword(password, user.password)) throw new Error(`Wrong username or password`);

    return await AuthHelper.createToken(user);
  }
}