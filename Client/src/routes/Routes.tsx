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
import QuizRecomendacaoInicio from "../pages/Quizes/QuizRecomendacaoInicio";
import QuizRecomendacaoMeio from "../pages/Quizes/QuizRecomendacaoMeio";
import QuizRecomendacaoFinal from "../pages/Quizes/QuizRecomendacaoFinal";
import QuizSatisfacaoI from "../pages/Quizes/QuizSatisfacaoInicial"
import QuizSatisfacaoM from "../pages/Quizes/QuizSatisfacaoM"
import QuizSatisfacaoF from "../pages/Quizes/QuizSatisfacaoFinal"
import WishList from "../pages/Favoritos"
import UserPage from "../pages/UserSpace";
import AcompanharPedido from "../pages/AcompanharPedido";
// import useLogged from "../Estados/useLogged";

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalogue" element={<Catalogo />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/detail:id" element={<DetalhesPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/quizRI" element={<QuizRecomendacaoInicio />} />
            <Route path="/quizRM" element={<QuizRecomendacaoMeio />} />
            <Route path="/quizRF" element={<QuizRecomendacaoFinal />} />
            <Route path="/quizSI" element={<QuizSatisfacaoI />} />
            <Route path="/quizSM" element={<QuizSatisfacaoM />} />
            <Route path="/quizSF" element={<QuizSatisfacaoF />} />
            <Route path="/wishlist" element={<WishList />} />
            <Route path="/user" element={<UserPage />} />
            <Route path = "/entrega" element={<AcompanharPedido />} />
        </Routes>
    )
}