import { useMutation } from "@apollo/client";
import { useCallback } from "react";
import LoginSVG from "src/assets/svg/login.svg";
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