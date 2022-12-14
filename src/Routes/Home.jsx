
import { useEffect, useState, useContext } from "react";
import Card from "../Components/Card";

import { ThemeContext } from "../providers/ThemeProvider";








const Home = () => {
  const [dentistas, setDentistas] = useState([]);
  const { theme } = useContext(ThemeContext);


  async function getAllDentistas() {
   // const response = await api.get("/dentistas");
   // setDentistas(response.data.dentistas);

  }

  useEffect(() => {
    getAllDentistas();








    //Nesse useEffect, deverá ser obtido todos os dentistas da API
    //Armazena-los em um estado para posteriormente fazer um map
    //Usando o componente <Card />
  }, []);

  return (
    <>

      <h1>Home</h1>
      <div className="card-grid container {theme}" >


        
        {dentistas.map((dentista) => {
          return (

            <Card title="nome do medico" />
          )

        })}

        <Card />
      </div>
    </>
  );
};

export default Home;


