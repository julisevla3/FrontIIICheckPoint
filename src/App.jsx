
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useContext } from "react";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { ThemeContext } from "./providers/ThemeProvider";
import "./index.css";
import Home from "./Routes/Home";
import LoginForm from "./Components/LoginForm";
import Detail from "./Routes/Detail";


function App() {
  const { theme } = useContext(ThemeContext);




  return (

    
      <div className={theme}>
        <Navbar />
        <BrowserRouter>
          <Routes>
            <Route path="/Login" element={<LoginForm />} />
            <Route path="/Details" element={<Detail />} />
            <Route path="/Home" element={<Home />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>

  );

}

export default App;
