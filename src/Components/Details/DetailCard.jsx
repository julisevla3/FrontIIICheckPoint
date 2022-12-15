
import ScheduleFormModal from "../Schedule/ScheduleFormModal";
import styles from "./DetailCard.module.css";
import { ThemeContext } from "../../providers/ThemeProvider";
import { useContext } from "react";

const DetailCard = (props) => {
  const { theme, handleTheme } = useContext(ThemeContext);
  const {matricula = "-", nome = "-", sobrenome = "-", usuario = "-"} = props
  
    //Nesse useEffect, você vai fazer um fetch na api passando o 
    //id do dentista que está vindo do react-router e carregar os dados em algum estado

  return (
    //As instruções que estão com {''} precisam ser 
    //substituídas com as informações que vem da api
    <>
      <h1>Detail about Dentist {nome} </h1>
      <section className={`card col-sm-12 col-lg-6 container ${theme === 'light' ? '' : styles.cardDark}`}>
        {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar o css correto */}
        <div
          className={`card-body row`}
        >
          <div className="col-sm-12 col-lg-6">
            <img
              className="card-img-top"
              src="/images/doctor.jpg"
              alt="doctor placeholder"
            />
          </div>
          <div className="col-sm-12 col-lg-6">
            <ul className="list-group">
              <li className="list-group-item">Nome: {nome}</li>
              <li className="list-group-item">
                Sobrenome: {sobrenome}
              </li>
              <li className="list-group-item">
                Usuário: {usuario.username}
              </li>
            </ul>
            <div className="text-center">
              {/* //Na linha seguinte deverá ser feito um teste se a aplicação
              // está em dark mode e deverá utilizado o css correto */}
              <button
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                className={`btn ${theme === 'light' ? 'btn-light' : 'btn-dark'}  ${styles.button
                  }`}
              >
                Marcar consulta
              </button>
            </div>
          </div>
        </div>
      </section>
      <ScheduleFormModal />
    </>
  );
};

export default DetailCard;
