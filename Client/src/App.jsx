import React from "react"
import LoginPage from "./pages/Login"
import RegisterPage from "./pages/Cadastro"
import Home from "./pages/Home"
import CartPage from "./pages/Carrinho"
import Catalogo from "./pages/Catalogo"
import Detalhes from "./pages/Detalhes"
import SatisfacaoPageI from "./pages/Quizes/QuizSatisfacaoInicial/SatisfacaoPageI"
import SatisfacaoPageM from "./pages/Quizes/QuizSatisfacaoM/SatisfacaoPageM"
import SatisfacaoPageF from "./pages/Quizes/QuizSatisfacaoFinal/SatisfacaoPageF"
import { AppRoutes } from "./routes/Routes"
function App() {
  
  return (
    <AppRoutes/>
  )
}

export default App