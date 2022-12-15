import DetailCard from "../Components/Details/DetailCard";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../Components/Navbar/Navbar";

const Detail = () => {
  const { matricula } = useParams();
  const [dentista, setDentista] = useState({});

  useEffect(() => {
    getDentista();
  }, []);

  async function getDentista() {
    try {
      fetch(`https://dhodonto.ctdprojetos.com.br/dentista?matricula=${matricula}`)
        .then((response) => response.json())
        .then((data) => setDentista(data))
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
    <Navbar />
        <DetailCard {...dentista} key={dentista.matricula}/>
    </>

  )
}

export default Detail