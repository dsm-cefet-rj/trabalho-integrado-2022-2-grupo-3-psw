import NavbarComp from "../../components/NavbarComp";
import Footer from "../../components/Footer";
import ImportaBootstrap from "../../components/ImportsBootStrap";
import "./style.css";
import { FaUserCircle } from "react-icons/fa";
import { nomesUsuario } from "./nomesUsuario";
import { Link } from "react-router-dom";
import useUser from "../../Estados/useUser";

function UserPage() {

    const user = useUser(state => state.user);
    const logout = useUser(state => state.desSetUser);

    const setToken = (token) => {
        localStorage.setItem("authToken",token);
    } 

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
                            <p>Olá, <b>{user.nome}</b></p>
                        </div>

                        <Link to={"/wishlist"}>
                            <button className="opcao">
                                <p>Lista de Desejos</p>
                            </button>
                        </Link>

                        <Link to = {"/cart"}>
                        <button className="opcao">
                            <p>Meu Carrinho</p>
                        </button>
                        </Link>
                        <Link to={"/catalogue"}>
                        <button className="opcao">
                            <p>Catálogo</p>
                        </button>
                        </Link>
                        <Link to={"/entrega"}>
                        <button className="opcao">
                            <p>Acompanhar Pedido</p>
                        </button>
                        </Link>
                        <Link>
                        <button className="opcao" onClick={() => {
                            logout();
                            setToken("");
                        }}>
                            <p>Sair</p>
                        </button>
                        </Link>
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