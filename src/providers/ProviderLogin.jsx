import { useEffect } from "react";
import { createContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const LoginContext = createContext({});

const LoginProvider = ({ children }) => {
    const [useToken, setToken] = useState({});
    const [isLogado, setIsLogado] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();
    
    const preencherTokenState = ({ token, tipo }) => {
        setToken({ ...useToken, token, tipo })
        setIsLogado(true)
    }
    
    const limparToken = () => {
        alert("Entrei aqui")
        setToken({token: "", tipo: ""})
        setIsLogado(false)
        navigate("/Home")
    }

    useEffect(() => {
        const token = JSON.parse(localStorage.getItem("token"))
        if(token){
            preencherTokenState({token: token.token, tipo: token.tipo})
            navigate(location.pathname)
        }
    }, [])

    return (
        <LoginContext.Provider
            value={{
                useToken,
                preencherTokenState,
                limparToken,
                isLogado,
                setIsLogado
            }}
        >
            {children}
        </LoginContext.Provider>
    );
};

export default LoginProvider;