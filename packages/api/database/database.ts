import fs from "fs";
const datapath = `${__dirname + '/data'}`;
// Every method is presuming to be asynchronous

export default class Database {
  collection: string;

  constructor(collection: string) {
    this.collection = collection;
  }

  static async registerCollection(collection: string) {
    const database = new Database(collection);
    if(!fs.existsSync(`${datapath}/${collection}`)) await database.write();
    return database;
  }

  private generateId(): string {
    const g = () => Math.floor((1 + Math.random()) * 0x10000).toString().substring(-1);
    return g() + g() + '-' + g() + '-' + g() + '-' + g() + g() + g() ;
  }

  private async write(data: any[] = []): Promise<Database> {
    if(!this.collection) throw new Error(`A collection must be defined`);
    if(!Array.isArray(data)) throw new Error(`Data must of an Array. Current type ${typeof data}`);
    if(!fs.existsSync(datapath)) fs.mkdirSync(datapath, { recursive: true });

    const old = await this.find();
    const path = `${datapath}/${this.collection}`;
    fs.writeFileSync(path, JSON.stringify([...old, ...data]));

    return this;
  }
  
  protected async createData(data: any): Promise<any> {
    if(typeof data !== "object") throw new Error(`Data must be of type object. Current type ${typeof data}`);
    
    data['id'] = this.generateId();
    data['createdAt'] = new Date().getTime();
    data['updatedAt'] = 0;

    return data;
  }

  async create(data: any): Promise<any> {
    const d = await this.createData(data);
    await this.write([d]);
    return d;
  }

  async createMultiple(data: any[]): Promise<any[]> {
    if(!Array.isArray(data)) throw new Error(`Data save many has to be of type array. Current type ${typeof data}`);
    const all = await Promise.all(data.map(async (d) => await this.createData(d)));
    await this.write(all);
    return all;
  }

  async find(): Promise<any[]> {
    try {
      const data = JSON.parse(fs.readFileSync(`${datapath}/${this.collection}`, { encoding: 'utf-8' }));
      return Array.isArray(data) ? data : [];
    } catch {
      return [];
    }
  }

  async findById(id: string) {
    const data = await this.find();
    return data.find(d => d.id === id);
  }

  async update(id: string, data: any) {
    const el = await this.findById(id);
    if(!el) throw new Error(`Unable to find ${id} from ${this.collection}`);
    if(typeof data !== "object") throw new Error(`Data must be of type object. Current type ${typeof data}`);

    for(const key in data) {
      el[key] = data[key];
    }

    el['updatedAt'] = new Date().getTime();

    const all = await this.find();

    await this.write(await Promise.all(all.map(async (d) => d.id === el.id ? el : d)));
    
    return el;
  }

  async deleteById(id: string): Promise<Database> {
    const data = await this.find();
    await this.write(data.filter((d) => d.id !== id));

    return this;
  }
}