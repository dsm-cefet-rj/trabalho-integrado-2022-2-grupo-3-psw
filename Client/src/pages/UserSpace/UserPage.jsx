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
                            <p>Olá, <b>{nomesUsuario[0].nome}</b></p>
                        </div>
                            
                            <button className="opcao">
                                <p>Lista de Desejos</p>
                            </button>
                            
                            <button className="opcao">
                                <p>Meu Carrinho</p>
                            </button>

                            <button className="opcao">
                                <p>Catálogo</p>
                            </button>
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