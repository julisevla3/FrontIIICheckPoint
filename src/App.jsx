
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useContext } from "react";
import Footer from "./Components/Footer";

import { ThemeContext } from "./providers/ThemeProvider";
import ProviderLogin from "./providers/ProviderLogin";
import "./index.css";
import Home from "./Routes/Home";
import LoginForm from "./Components/LoginForm";
import Detail from "./Routes/Detail";


function App() {
  // const location = useLocation();
  const { theme } = useContext(ThemeContext);
  
  return (

    <div className={theme}>
      <BrowserRouter>
        <ProviderLogin>
          <Routes>
            <Route path="/Login" element={<LoginForm />} />
            <Route path="/Details/:matricula" element={<Detail />} />
            <Route path="/Home" element={<Home />} />
            <Route path="*" element={<h1>Not Found 404</h1>} />
          </Routes>
        </ProviderLogin>
      </BrowserRouter>
      <Footer />
    </div>

  );

}

export default App;
