import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
<<<<<<< HEAD
import { LoginContext } from "../../Providers/ProviderLogin"
import { ThemeContext } from "../../Providers/ProviderTheme";
import { useEffect } from "react";
=======
import { Link, useNavigate } from "react-router-dom";


>>>>>>> 3759b34518451e7a8966b0364ac8ab3ddcd6d7eb

const Navbar = () => {
  const { useToken, limparToken } = useContext(LoginContext);
  const { theme, handleTheme } = useContext(ThemeContext);

  const logoutFunction = () => {
    localStorage.clear();
    limparToken()
  }

  return (
    <header className="sticky-top">
      <nav
        className={
          `navbar navbar-expand-sm 
          ${theme ? "navbar-dark" : "navbar-light"} 
          ${theme ? "bg-dark" : "bg-light"}
          ${theme ? "bg-dark" : "bg-light"}
          `}
        aria-label="Third navbar example"
      >
        <div className="container">
          <Link className={`navbar-brand ${styles.navbarBrand}`} to="/home">
            DH Odonto
          </Link>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarsExample03"
          >
<<<<<<< HEAD
            <ul className="navbar-nav mb-2 mb-sm-0">
              <li className={
                `nav-item 
                ${styles.navBarLink}
                ${theme ? "textLight" : "textDark"}
                `}>
                {
                  useToken.token ?
                    <Link
                      to="/home"
                      className={`${theme ? styles.textDark : styles.textLight}`}
                    > Home </Link>
                    :
                    null
                }
              </li>
              <li className={
                `nav-item 
                ${styles.navBarLink}
                
                `}>
                {
                  useToken.token ?
                    <Link
                      to="/"
                      onClick={logoutFunction}
                      className={`${theme ? styles.textDark : styles.textLight}`}
                    >Logout </Link> :
                    <Link
                      to="/"
                      className={`${theme ? styles.textDark : styles.textLight}`}
                    > Login </Link>
                }
              </li>
              <li className={`nav-item`}>
                <button
                  className={`
                    btn 
                    ${styles.btnStyle}
                    ${theme ? "btn-light" : "btn-dark"}
                    `}
                  onClick={handleTheme}
                >
                  {theme ? "☀" : "🌙"}
                </button>
              </li>
            </ul>
=======
            <span className="navbar-toggler-icon"></span>
          </button>


          <div>

            <div

              className="collapse navbar-collapse justify-content-end  " id="navbarsExample03"
            >
              <ul className="navbar-nav mb-2 mb-sm-0">
                <li className={`nav-item ${styles.navBarLink}`}>
                  {/* Ao clicar, o usuário deve ser redirecionado a home, com react-router */}
                  <Link className="nav-link" to="/home">
                    Home
                  </Link>
                </li>
                <li className={`nav-item ${styles.navBarLink}`}>
                  {/* Se o usuário estiver logado, deverá aparecer um botão de logout
                que vai apagar o token do localstorage.
                Se o usuário estiver deslogado, um link fará um redirecionamento, com react-router,
                ao formulário de login
                O botão de logout deverá ser testado darkmode
                se sim, btn-dark, se não, btn-light */}
                  {  
                  localStorage.getItem("token") ?
                    <button
                    onClick={() => logout()}
                    className={`btn btn-${theme === 'light' ? "light" : "dark"}`}
                    
                    >Logout
                    </button>
                  :
                    <Link  className="nav-link" to="/login">
                      Login
                    </Link> 
                    
                                
                }


                </li>
                <li className={`nav-item`}>
                  {/* Ao ser clicado, esse botão mudará a aplicação para dark mode ou light mode.
                 Lembre-se de usar um estado no contexto para fazer essa alteração.
                 Na linha seguinte deverá ser feito um teste se a aplicação
                 está em dark mode e deverá utilizar o icone ☀ ou 🌙 e btn-dark ou btn-light*/}

                  <button onClick={handleTheme} className={`btn ${theme === 'light' ? 'btn-dark' : 'btn-light'} ${styles.btnStyle}`}

                  >
                    {theme === 'light' ? '🌙' : '☀'} {" "}
                  </button>



                </li>
              </ul>
            </div>
>>>>>>> 3759b34518451e7a8966b0364ac8ab3ddcd6d7eb
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
