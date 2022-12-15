import styles from "./Card.module.css";
import { ThemeContext } from "../../providers/ThemeProvider";
import { useContext } from "react";
import { Link } from "react-router-dom";


const Card = (props) => {
  const { theme, handleTheme } = useContext(ThemeContext);
  const {matricula = "-", nome = "-", sobrenome = "-"} = props

 
  return (
    <>
      {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar o css correto */}
      <div className={`card ${theme === 'light' ? '' : styles.cardDark}`} id={matricula}>
        <img
          className="card-img-top"
          src="/images/doctor.jpg"
          alt="doctor placeholder"
        />
        <div className={`card-body ${styles.CardBody}`}>
                 
          {/* Na linha seguinte o link deverá utilizar a matricula, nome e sobrenome do dentista
          que vem da API */}
          <Link to={`/Details/${matricula}`}>
            <h5 className={`card-title ${styles.title} `}>
              {nome} {sobrenome}   
             </h5>
          </Link>
        </div>
      </div>

    </>
  );
};



export default Card;
