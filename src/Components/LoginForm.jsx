import styles from "./Form.module.css";
import api from "../services/api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../providers/ProviderLogin"
import { useContext } from "react";





const LoginForm = () => {
  const [login, setLogin] = useState({ login: "", senha: "" })
  const navigate = useNavigate();
  const { preencherTokenState } = useContext(LoginContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(login.login);
    console.log(login.senha);

    let body =
    {
      username: login.login,
      password: login.senha
    }

    try {
      if (login.login.length > 5 && login.senha.length > 5) {
        var aux = await api.post("/auth", body)
        console.log(aux.data);
        localStorage.setItem("token", JSON.stringify(aux.data));
        navigate("/home");
      } else if (login.login.length < 5) {
        alert("usuario invalidos!")
      } else {
        alert("senha invalidos!")
      }
      preencherTokenState({ token: aux.data.token, tipo: aux.data.tipo })
    } catch (error) {
      console.log(error.response.data);
    }

    //Nesse handlesubmit você deverá usar o preventDefault,
    //enviar os dados do formulário e enviá-los no corpo da requisição 
    //para a rota da api que faz o login /auth
    //lembre-se que essa rota vai retornar um Bearer Token e o mesmo deve ser salvo
    //no localstorage para ser usado em chamadas futuras
    //Com tudo ocorrendo corretamente, o usuário deve ser redirecionado a página principal,com react-router
    //Lembre-se de usar um alerta para dizer se foi bem sucedido ou ocorreu um erro
  };

  return (
    <>
      <div
        className={`text-center card container ${styles.card}`}
      >
        <div className={`card-body ${styles.CardBody}`}>
          <form onSubmit={handleSubmit}>
            <input
              onChange={(e) => setLogin({ ...login, login: e.target.value })}
              className={`form-control ${styles.inputSpacing}`}
              placeholder="Login"
              name="login"
              required
            />
            <div></div>
            <input
              onChange={(e) => setLogin({ ...login, senha: e.target.value })}
              className={`form-control ${styles.inputSpacing}`}
              placeholder="Password"
              name="password"
              type="password"
              required
            />
            <button className="btn btn-primary" type="submit">
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
