
import { useEffect, useState } from "react";
import Card from "../Components/Card";

const Home = () => {

  const [dentista, setDentista] = useState([]);


  useEffect(() => {
    try {
      fetch("https://dhodonto.ctdprojetos.com.br/dentista")
        .then((response) => response.json())
        .then((data) => setDentista(data))
    } catch (error) {
      console.log(error);
    }

    // async function getAllDentistas() {
    //  // const response = await api.get("/dentistas");
    //  // setDentistas(response.data.dentistas); }




    //Nesse useEffect, deverá ser obtido todos os dentistas da API
    //Armazena-los em um estado para posteriormente fazer um map
    //Usando o componente <Card />
  }, []);

  return (
    <>
      <h1>Home</h1>
      <div className="card-grid container {theme}" >
      {dentista.length ? dentista.map((dentista) => (
            // <div className={dentista.matricula}/>
            <Card {...dentista} key={dentista.matricula} />
          ))
        : null}



      </div>
    </>
  );
};
export default Home;


