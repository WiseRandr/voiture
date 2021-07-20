import { useMutation } from "@apollo/client";
import { useCallback } from "react";
import { CREATE_USER } from "src/graphql/auth/auth.mutation";
import useForm from "src/hooks/useForm"

export default function Register() {
  const { data, onChange } = useForm({ name: '', username: '', password: '', repeatpassword: '', dateofbirth: '' });
  const [createUser] = useMutation(CREATE_USER);

  const onSubmit = useCallback((e) => {
    e.preventDefault();

    if(data.name && data.username && data.password && data.repeatpassword && data.dateofbirth) {
      createUser({ variables: data }).then(({ data }) => {
        console.log(data);
      }).catch(e => {
        console.log(e);
      })
    }
  }, [createUser, data]);
  
  return <div>
    <div>Creation de compte</div>
    <form onSubmit={onSubmit}>
      <div>
        <label>Nom</label>
        <input type="text" value={data.name} name="name" onChange={onChange} />
      </div>

      <div>
        <label>Pseudo (unique)</label>
        <input type="text" value={data.username} name="username" onChange={onChange} />
      </div>

      <div>
        <label>Mot de passe</label>
        <input type="password" value={data.password} name="password" onChange={onChange} />
      </div>

      <div>
        <label>Confirmez mot de passe</label>
        <input type="password" value={data.repeatpassword} name="repeatpassword" onChange={onChange} />
      </div>

      <div>
        <label>Date de naissance</label>
        <input type="date" value={data.dateofbirth} name="dateofbirth" onChange={onChange} />
      </div>

      <button type="submit">Creer un compte</button>
    </form>
  </div>
}