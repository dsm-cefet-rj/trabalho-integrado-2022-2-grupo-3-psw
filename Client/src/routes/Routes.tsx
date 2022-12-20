import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate
} from "react-router-dom";

//imports das páginas
import RegisterPage from "../pages/Cadastro";
import CartPage from "../pages/Carrinho";
import Catalogo from "../pages/Catalogo";
import DetalhesPage from "../pages/Detalhes";
import Home from "../pages/Home";
import LoginPage from "../pages/Login";
import QuizRecomendacao from "../pages/Quizes/QuizRecomendacao";
import QuizSatisfacao from "../pages/Quizes/QuizSatisfacao/QuizSatisfacao";
import WishList from "../pages/Favoritos"
import UserPage from "../pages/UserSpace";
import AcompanharPedido from "../pages/AcompanharPedido";
import RequireAuth from "../components/RequireAuth";
import VizualizarSatisfacao from "../pages/VisualizarSatisfacao";

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalogue" element={<Catalogo />} />
            <Route path="/cart" element={<RequireAuth><CartPage /></RequireAuth>} />
            <Route path="/detail:id" element={<DetalhesPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/quizRI" element={<QuizRecomendacao/>}/>
            <Route path="/quizSI" element={<QuizSatisfacao />} />
            <Route path="/wishlist" element={<WishList />} />
            <Route path="/user" element={<RequireAuth><UserPage /></RequireAuth>} />
            <Route path="/entrega" element={<AcompanharPedido />} />
            <Route path="/visualizar" element={<VizualizarSatisfacao />} />
        </Routes>
    )
}