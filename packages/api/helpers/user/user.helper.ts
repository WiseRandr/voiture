import Database from "database/database"
import { UserAddInput } from "interface/user.int";
import { hashPassword } from "utils/password";

export default class UserHelper extends Database {
  constructor() {
    super('user');
  }

  async findBy(key: string, value: string) {
    const all = await this.find();
    return await all.find(a => a[key] === value);
  }

  async isUsernameValid(username: string) {
    return !Boolean(await this.findBy('username', username));
  }

  async createUser(data: UserAddInput) {
    const role = data.role || 'USER';

    if(data.password !== data.repeatpassword) throw new Error('Password does not match');
    if(!(await this.isUsernameValid(data.username))) throw new Error(`Invalid username. Username ${data.username} may already have been taken`);

    data.password = await hashPassword(data.password);
    
    return await this.create({ ...data, role, repeatpassword: undefined });
  }
}