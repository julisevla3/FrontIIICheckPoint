import DetailCard from "../Components/DetailCard";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

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
        <DetailCard {...dentista} key={dentista.matricula}/>
    </>

  )
}

export default Detail