import React, {useEffect, useState} from "react";
import "./style.css"
import { Link, useNavigate } from "react-router-dom";
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
    const navigate = useNavigate(); 
    const [user, setUser] = useState({});

    const api = useApi();

    const token = localStorage.getItem("authToken");

    const getUser = async(token)  => {
        await api.getUserbyToken(token).then((response) => setUser(response.user));
    }

    const [show, setShow] = useState(false);
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const toFeedBack = () => {
        navigate("/quizSI");
    }

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
                        <h5 className="mb-4">Lista de Pedidos:</h5>
                        {user.ordersList 
                        ?
                        user.ordersList.map(item => {
                            const data = new Date(item.orderDate);
                            const dataFormated = ((data.getDate() )) + "/" + ((data.getMonth() + 1)) + "/" + data.getFullYear();
                        return(
                            <div className="container-fluid mb-5" id="modal">
                            <img src={`src/img${item.product.imagens.imagem1}`} className="img-fluid"/>
                            <h4 className="mt-1 mb-3"><strong>{item.product.nome}</strong></h4>
                            <p><strong>Quantidade do item: {item.productQtd}</strong></p>
                            <p><strong>Valor total: R${(item.productQtd*item.product.preco).toFixed(2)}</strong></p>
                            <p><strong>Data do pedido: {dataFormated}</strong></p>
                            <button onClick={toFeedBack}
                            className="btn btn-primary mb-3">Avaliar Produto</button>
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