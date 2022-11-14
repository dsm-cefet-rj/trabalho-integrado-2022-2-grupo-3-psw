import React from "react";
import { Route, Routes } from "react-router-dom";

//imports das páginas
import RegisterPage from "../pages/Cadastro";
import CartPage from "../pages/Carrinho";
import Catalogo from "../pages/Catalogo";
import DetalhesPage from "../pages/Detalhes";
import Home from "../pages/Home";
import LoginPage from "../pages/Login";

export function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalogue" element={<Catalogo />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/detail:id" element={<DetalhesPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
        </Routes>
    )
}