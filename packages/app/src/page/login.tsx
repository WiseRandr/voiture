import { useMutation } from "@apollo/client";
import { useCallback } from "react";
import { CREATE_TOKEN } from "src/graphql/auth/auth.mutation";
import useForm from "src/hooks/useForm"

export default function Login() {
  const { data, onChange } = useForm({ username: '', password: '' });
  const [createToken] = useMutation(CREATE_TOKEN);

  const onSubmit = useCallback((e) => {
    e.preventDefault();

    if(data.username && data.password) {
      createToken({ variables: data }).then(({ data }) => {
        console.log(data);
      }).catch(e => console.log(e))
    }
  }, [createToken, data]);
  
  return <div>
    <div>Login</div>
    <form onSubmit={onSubmit}>
      <div>
        <label>Username</label>
        <input type="text" value={data.username} name="username" onChange={onChange} />
      </div>

      <div>
        <label>Password</label>
        <input type="password" value={data.password} name="password" onChange={onChange} />
      </div>
      
      <button type="submit">Se connecter</button>
    </form>
  </div>
}