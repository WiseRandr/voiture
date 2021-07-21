import { useMutation } from "@apollo/client";
import { useCallback, useEffect } from "react";
import { useHistory } from "react-router-dom";
import LoginSVG from "src/assets/svg/login.svg";
import { useAuth } from "src/context/auth.context";
import { CREATE_TOKEN } from "src/graphql/auth/auth.mutation";
import useForm from "src/hooks/useForm"

export default function Login() {
  const { data, onChange } = useForm({ username: '', password: '' });
  const [createToken] = useMutation(CREATE_TOKEN);
  const { login, isconnected } = useAuth();
  const history = useHistory();

  const onSubmit = useCallback((e) => {
    e.preventDefault();

    if(data.username && data.password) {
      createToken({ variables: data }).then(({ data }) => {
        if(data.createToken) login(data.createToken)
      }).catch(e => console.log(e))
    }
  }, [createToken, data, login]);

  useEffect(() => {
    if(isconnected) history.push('/');
  }, [isconnected, history]);
  
  return <div className="d-flex flex-column align-items-center justify-content-center h-100">
    <div className="card bg-primary text-white w-25">
      <div className="card-body">
        <div className="h2 text-center py-3">Se connecter</div>
        <form onSubmit={onSubmit}>
          <div className="mb-3">
            <label>Pseudo</label>
            <input type="text" value={data.username} name="username" onChange={onChange} autoFocus />
          </div>

          <div>
            <label>Mot de passe</label>
            <input type="password" value={data.password} name="password" onChange={onChange} />
          </div>
          
          <button type="submit" className="btn btn-success text-white mt-4 mx-auto d-block">
            <LoginSVG />
          </button>
        </form>
      </div>
    </div>
  </div>
}