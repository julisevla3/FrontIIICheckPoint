
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import { ThemeContext } from "./Providers/ProviderTheme"
import { useContext } from "react";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
<<<<<<< HEAD
    <>
      <div className={`
              ${theme ? "dark" : ""}
            `} >
        <Navbar />
        <main >
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
=======

    <div className={theme}>
      <BrowserRouter>
        <ProviderLogin>
          <Routes>
            <Route path="/Login" element={<LoginForm />} />
            <Route path="/" element={<LoginForm />} />
            <Route path="/Details/:matricula" element={<Detail />} />
            <Route path="/Home" element={<Home />} />
            <Route path="*" element={<h1>Not Found 404</h1>} />
          </Routes>
        </ProviderLogin>
      </BrowserRouter>
      <Footer />
    </div>

>>>>>>> 3759b34518451e7a8966b0364ac8ab3ddcd6d7eb
  );
}

export default App;
