import React from "react"
import LoginPage from "./pages/Login"
import RegisterPage from "./pages/Cadastro"
import Home from "./pages/Home"
import CartPage from "./pages/Carrinho"
import Catalogo from "./pages/Catalogo"
import Detalhes from "./pages/Detalhes"

import { AppRoutes } from "./routes/Routes"
function App() {
  
  return (
    <AppRoutes/>  
  )
}

export default App