import NavbarComp from "../../components/NavbarComp";
import Footer from "../../components/Footer";
import ImportaBootstrap from "../../components/ImportsBootStrap";
import "./style.css";
import { FaUserCircle } from "react-icons/fa";
import { nomesUsuario } from "./nomesUsuario";

function UserPage() {
    return (
        <html lang="pt-br">
            <ImportaBootstrap />
            <body>
                <NavbarComp />
                <main>
                    <p id="title">Meu Espaço</p>
                    <div className="container-fluid" id="caixa">

                        <i><FaUserCircle /></i>
                        <div id="texto">
                            <p>Olá, {nomesUsuario[0].nome}</p>
                        </div>

                        <div className="col-6 d-flex justify-content-center" id="botoes">
                            <button className="opcao">
                                <p>Lista de Favoritos</p>
                            </button>
                            <button className="opcao">
                                <p>Lista de Desejos</p>
                            </button>
                        </div>
                        <div className="col-6 d-flex justify-content-center" id="botoes">
                            <button className="opcao">
                                <p>Quiz Satisfação</p>
                            </button>
                            <button className="opcao">
                                <p>Meu Carrinho</p>
                            </button>
                        </div>

                    </div>

                </main>
                <footer>
                    <Footer />
                </footer>

            </body>
        </html>
    )
}

export default UserPage;