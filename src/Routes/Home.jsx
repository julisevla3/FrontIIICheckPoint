
import { useEffect, useState } from "react";
import Card from "../Components/Card";
import Navbar from "../Components/Navbar";

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
    
  }, []);
  return (
    <>
      <Navbar />
      <h1>Home</h1>
      <div className="card-grid container {theme}" >
      {dentista.length ? dentista.map((dentista) => (
            <Card {...dentista} key={dentista.matricula} />
          ))
        : null}
      </div>
    </>
  );
};
export default Home;


