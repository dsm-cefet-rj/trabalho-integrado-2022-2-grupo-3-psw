import React, {useEffect, useState} from "react";
import "./style.css"
import { Link } from "react-router-dom";
import NavbarComp from "../../components/NavbarComp";
import Footer from "../../components/Footer";
import ImportaBootstrap from "../../components/ImportsBootStrap";
import { useApi } from "../../Hooks/useApi";

import { AiOutlineInbox } from "react-icons/ai"
import { BsTruckFlatbed } from "react-icons/bs"
import { GiNightSleep } from "react-icons/gi"

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function AcompanharPedido() {
    const [user, setUser] = useState({});

    const api = useApi();

    const token = localStorage.getItem("authToken");

    const getUser = async(token)  => {
        await api.getUserbyToken(token).then((response) => setUser(response.user));
    }

    const [show, setShow] = useState(false);
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    
    useEffect(() => {
        getUser(token);
    },[])

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
                            onClick={()=>{
                                alert('Não há pedidos encaminhados!')
                            }}
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
                            onClick={()=>{
                                alert('Não há pedidos entregues!')
                            }}
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
                            <h2>Aqui estão os pedidos que já foram feitos e coletados!</h2>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h5 className="mb-4">Itens:</h5>
                        {user.ordersList 
                        ?
                        user.ordersList.map(item => {
                        return(
                            <div className="container-fluid mb-5" id="modal">
                            <img src={`src/img${item.product.imagens.imagem1}`} className="img-fluid"/>
                            <p className="mt-1"><strong>{item.product.nome}</strong></p>
                            <p><strong>Quantidade do item: {item.productQtd}</strong></p>
                            <p><strong>Data do pedido: {item.orderDate}</strong></p>
                            </div>
                            )
                        }):
                        <p></p>
                        }
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