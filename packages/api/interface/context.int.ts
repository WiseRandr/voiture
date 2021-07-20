export default interface Context {
  token: string;
  data: {
    id: string;
    name: string;
    role: string;
    username: string;
  }
}