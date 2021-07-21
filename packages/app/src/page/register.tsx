import { useMutation } from "@apollo/client";
import { useCallback } from "react";
import { useHistory } from "react-router-dom";
import LoginSVG from "src/assets/svg/login.svg";
import { CREATE_USER } from "src/graphql/auth/auth.mutation";
import useForm from "src/hooks/useForm"

export default function Register() {
  const { data, onChange } = useForm({ name: '', username: '', password: '', repeatpassword: '', dateofbirth: '' });
  const [createUser] = useMutation(CREATE_USER);
  const history = useHistory();

  const onSubmit = useCallback((e) => {
    e.preventDefault();

    if(data.name && data.username && data.password && data.repeatpassword && data.dateofbirth) {
      createUser({ variables: data }).then(({ data }) => {
        if(data?.createUser) history.push('/se-connecter');
        else throw new Error('Impossible de creer votre compte');
      }).catch(e => {
        console.log(e);
      })
    }
  }, [createUser, data, history]);
  
  return <div className="d-flex flex-column align-items-center justify-content-center h-100">
    <div className="card bg-primary text-white w-50">
      <div className="card-body">
        <div className="h2 text-center py-3">Creation de compte</div>
        <form onSubmit={onSubmit}>
          <div className="mb-3">
            <label>Nom</label>
            <input type="text" value={data.name} name="name" onChange={onChange} autoFocus />
          </div>

          <div className="mb-3">
            <label>Pseudo (unique)</label>
            <input type="text" value={data.username} name="username" onChange={onChange} />
          </div>

          <div className="mb-3">
            <label>Mot de passe</label>
            <input type="password" value={data.password} name="password" onChange={onChange} />
          </div>

          <div className="mb-3">
            <label>Confirmez mot de passe</label>
            <input type="password" value={data.repeatpassword} name="repeatpassword" onChange={onChange} />
          </div>

          <div>
            <label>Date de naissance</label>
            <input type="date" value={data.dateofbirth} name="dateofbirth" onChange={onChange} />
          </div>

          <button type="submit" className="btn btn-success mt-4 text-white d-block mx-auto">
            <LoginSVG />
          </button>
        </form>
      </div>
    </div>
  </div>
}