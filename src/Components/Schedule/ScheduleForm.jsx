import { useContext, useEffect, useState } from "react";
import styles from "./ScheduleForm.module.css";

const ScheduleForm = () => {
  const [dentista, setDentista] = useState({});
  const [paciente, setPaciente] = useState({});
  const [appointmentDate, setAppointmentDate] = useState("");

  useEffect(() => {
    getDentista();
    getPaciente();
  }, []);

  async function getDentista() {
    try {
      fetch(`https://dhodonto.ctdprojetos.com.br/dentista`)
        .then((response) => response.json())
        .then((data) => setDentista(data))
    } catch (error) {
      console.log(error);
    }
  }

  async function getPaciente() {
    try {
      fetch(`https://dhodonto.ctdprojetos.com.br/paciente`)
        .then((response) => response.json())
        .then((data) => setPaciente(data.body))
    } catch (error) {
      console.log(error);
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const body = {
      paciente: {
        matricula: paciente,
      },
      dentista: {
        matricula: dentista,
      },
      dataHoraAgendamento: appointmentDate,
    };

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      crossDomain:true,
      mode: 'no-cors',
      body: body
    };

    try {
      fetch('https://reqres.in/api/posts', requestOptions)
      .then(response => response.json())
      alert("OK! Marcado!");
    } catch (error) {
      alert("Erro " + error.response?.data || error);
    }
    //Nesse handlesubmit você deverá usar o preventDefault,
    //obter os dados do formulário e enviá-los no corpo da requisição 
    //para a rota da api que marca a consulta
    //lembre-se que essa rota precisa de um Bearer Token para funcionar.
    //Lembre-se de usar um alerta para dizer se foi bem sucedido ou ocorreu um erro
  };

  return (
    <>
      {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar o css correto */}
      <div
        className={`text-center container}`
        }
      >
        <form onSubmit={handleSubmit}>
          <div className={`row ${styles.rowSpacing}`}>
            <div className="col-sm-12 col-lg-6">
              <label htmlFor="dentist" className="form-label">
                Dentist
              </label>
              <select className="form-select" name="dentist" id="dentist">
                {dentista.length ? dentista.map((dentista) => (
                  <option key={dentista.matricula} value={dentista.matricula}>
                    {`${dentista.nome} ${dentista.sobrenome}`}
                  </option>
                ))
                  : null}

              </select>
            </div>
            <div className="col-sm-12 col-lg-6">
              <label htmlFor="patient" className="form-label">
                Patient
              </label>
              <select className="form-select" name="patient" id="patient">
                {paciente.length ? paciente.map((paciente) => (
                  <option key={paciente.matricula} value={paciente.matricula}>
                    {`${paciente.nome} ${paciente.sobrenome}`}
                  </option>
                ))
                  : null}
              </select>
            </div>
          </div>
          <div className={`row ${styles.rowSpacing}`}>
            <div className="col-12">
              <label htmlFor="appointmentDate" className="form-label">
                Date
              </label>
              <input
                value={appointmentDate}
                onChange={(event) => setAppointmentDate(event.target.value)}
                className="form-control"
                id="appointmentDate"
                name="appointmentDate"
                type="datetime-local"
              />
            </div>
          </div>
          <div className={`row ${styles.rowSpacing}`}>
            {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar o css correto */}
            <button
              className={`btn btn-light ${styles.button
                }`}
              type="submit"
            >
              Schedule
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ScheduleForm;
