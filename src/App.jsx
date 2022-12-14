
import { BrowserRouter, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { ThemeContext } from "./providers/ThemeProvider";
import "./index.css";
import Home from "./Routes/Home";
import LoginForm from "./Components/LoginForm";
import Detail from "./Routes/Detail";



function App() {
  // const location = useLocation();
  const { theme } = useContext(ThemeContext);





//  const navigate = useNavigate();


  // useEffect(() => {

  //   // if(location.pathname === '/'){
  //   //   navigate("/home");
  //   }
  // // });

  return (
    
      <div className={theme}>
        <Navbar />
        <BrowserRouter>
          <Routes>
            <Route path="/Login" element={<LoginForm />} />
            <Route path="/Details" element={<Detail />} />
            <Route path="/Home" element={<Home />} />
            <Route path="*" element={<h1>Not Found 404</h1>}/>
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>

  );

}

export default App;
