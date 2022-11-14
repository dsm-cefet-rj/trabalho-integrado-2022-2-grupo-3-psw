import NavbarComp from "../../components/NavbarComp";
import Footer from "../../components/Footer";
import ImportaBootstrap from "../../components/ImportsBootStrap";
import "./style.css";
import { FaUserCircle } from "react-icons/fa";
import {nomesUsuario} from "./nomesUsuario";

function UserPage(){
    return(
        <html lang = "pt-br">
            <ImportaBootstrap/>
            <body>
                <NavbarComp/>
                <main>
                    <div class = "container" id = "caixa">
                        <i><FaUserCircle/></i>
                        <div id = "texto">
                            <p>Olá, </p>
                            <input id = "name" placeholder={nomesUsuario[0].nome} />
                        </div>
                        
                        <div className = "col-6 d-flex justify-content-center" id = "botoes">
                            <button className = "option">
                                <p>Lista de Favoritos</p>
                            </button>
                            <button className = "option">
                                <p>Lista de Desejos</p>
                            </button>
                            <button className = "option">
                                <p>Quiz Satisfação</p>
                            </button>
                            <button className = "option">
                                <p>Meu Carrinho</p>
                            </button>
                        </div>

                    </div>

                </main>
                <Footer/>
            </body>
        </html>
    )
}

export default UserPage;