import React, {useState} from "react";
import { Link } from "react-router-dom";
import NavbarComp from "../../components/NavbarComp";
import Footer from "../../components/Footer";
import ImportaBootstrap from "../../components/ImportsBootStrap";
import { AiOutlineInbox } from "react-icons/ai"
import { BsTruckFlatbed } from "react-icons/bs"
import { GiNightSleep } from "react-icons/gi"
import "./style.css"
import useCartItem from "../../Estados/useItemStore";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import useCheckOut from "../../Estados/useCheckOut";

function AcompanharPedido() {
    const itemList = useCheckOut(state => state.checkOutItems);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <html lang="pt-br">
            <ImportaBootstrap />
            <body>
                <h1 id="title">Acompanhamento de Pedido</h1>
                <div className="container-fluid">
                    <div className="principal">
                        <div className="caixa" id="coleta">
                            <button className="btn btn-primary me-4"
                            onClick={handleShow}
                            style={{borderRadius: "20px"}}>
                                <AiOutlineInbox className="me-2" size={30}/> 
                                Exibir pedidos coletados
                            </button>
                            <div id="conteudo">
                                <p className="titulo" id="conteudo-coleta">Em breve o seu sono estará garantido!</p>
                                <p className="subtitulo" id="conteudo-coleta">Pedido Coletado</p>
                            </div>
                        </div>

                        <div className="caixa" id="transporte">
                            <button className="btn btn-primary me-5"
                            style={{borderRadius: "20px"}}>
                                <BsTruckFlatbed className="me-2" size={30}/>
                                Exibir pedidos a caminho
                            </button>
                            <div id="conteudo">
                                <p className="titulo" id="conteudo-transporte">Não perca o sono!</p>
                                <p className="subtitulo" id="conteudo-transporte">Pedido a Caminho</p>
                            </div>
                        </div>

                        <div className="caixa" id="entregue">
                            <button className="btn btn-primary me-5"
                            style={{borderRadius: "20px"}}>
                                <GiNightSleep className="me-2" size={30}/>
                                Exibir pedidos já entregues
                            </button>
                            <div id="conteudo">
                                <p className="titulo" id="conteudo-entregue">Aproveite e tire um cochilo!</p>
                                <p className="subtitulo" id="conteudo-entregue">Pedido Entregue</p>
                            </div>
                        </div>
                        <div className="container">
                            <a class="text-decoration-none">
                                <Link to={"/quizSI"}>
                                    <button id="quiz">
                                        <p>Quiz Satisfação</p>
                                    </button>
                                </Link>
                            </a>

                        </div>

                    </div>
                </div>

                <Modal
                    show={show}
                    onHide={() => setShow(false)}
                    dialogClassName="modal-90w"
                    aria-labelledby="example-custom-modal-styling-title"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="example-custom-modal-styling-title">
                            <h2>Em breve o seu sono estará garantido! Pedido Coletado</h2>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h5 className="mb-4">Itens:</h5>
                        {itemList.map((item) => {
                            return(
                                <>
                                <img src={`src/img${item.fotos.foto1}`} className="img-fluid"/>
                                <p className="mb-5"><strong>{item.nome}</strong></p>
                                </>
                            )
                        })}
                        
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Fechar
                        </Button>
                    </Modal.Footer>
                </Modal>

                <NavbarComp />
            </body>
            <Footer />
        </html>
    )
}


export default AcompanharPedido;