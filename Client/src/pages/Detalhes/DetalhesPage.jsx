import React, { useEffect, useState } from "react";
import "./style.css";
import Footer from "../../components/Footer";
import NoTransitionExample from "./Carrossel";
import NavbarComp from "../../components/NavbarComp";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoIosHeart } from "react-icons/io";
import BasicExample from "./Informacoes";
import { Link, useNavigate, Navigate, useParams } from "react-router-dom";

import { useApi } from "../../Hooks/useApi";
import ReactLoading from 'react-loading';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import quizS from "../Quizes/QuizSatisfacao/quizS";

function DetalhesPage() {
    const [show, setShow] = useState(false);

    // const formatted = {
    // resposta2: quizS.questoes.q2.opcoesSatisfacao.resposta2,
    // resposta3: quizS.questoes.q3.opcoesSatisfacao.resposta3,
    //  }

    //  const traduzResposta = (resposta) => {
    //     const superResposta = product.feedback.feedback.resposta1
    //     const traducao = "quizS.questoes.q1.opcoesSatisfacao." + superResposta
    //     return traducao;
    //  }


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [showDelete, setShowDelete] = useState(false);

  const handleCloseDelete = () => setShowDelete(false);
  const handleShowDelete = () => setShowDelete(true);

    const { id } = useParams();
    const api = useApi();
    const [favorite, setFavorite] = useState(false);
    const [cart, setCart] = useState(false);
    const [product, setProduct] = useState({});

    const ids = [];

    const navigate = useNavigate();
    const [user, setUser] = useState({});

    const token = localStorage.getItem("authToken");

    const addToCart = async (userId, productId) => {
        await api.addOrRemoveCartItem(userId, productId)
    }

    const toFavorites = async (userId, productId) => {
        await api.favoriteActions(userId, productId);
        console.log(ids)
    }

    const getUser = async (token) => {
        await api.getUserbyToken(token).then((response) => setUser(response.user));
    }

    const getProduct = async (id) => {
        await api.getProductById(id).then((response) => {
            setProduct(response);
        })
    }

    useEffect(() => {
        getProduct(id);
        finId(product._id);
        getUser(token);
        finIdCart(product._id);
    }, [user.favorites])

    if (user.favorites) {
        for (let i = 0; i < user.favorites.length; i++) {
            ids.push(user.favorites[i].product._id);
        }
    }

    const finId = (id) => {
        for (let i = 0; i < ids.length; i++) {
            if (id == ids[i]) {
                return setFavorite(true);
            }
            else {
                setFavorite(false);
            }
        }
    }

    const idsCarrinho = []

    if (user.cartItens) {
        for (let i = 0; i < user.cartItens.length; i++) {
            idsCarrinho.push(user.cartItens[i].product._id);
        }
    }

    const finIdCart = (id) => {
        for (let i = 0; i < idsCarrinho.length; i++) {
            if (id == idsCarrinho[i]) {
                return setCart(true);
            }
        }
        return setCart(false);
    }

    function showButton() {
        if (user.email == "admin@gmail.com") {
            return (<div className="buyButton" >
                <button className="buy" onClick={handleShow}>
                    <p>Satisfação do Cliente</p>
                </button>
            </div>);
        }
    }

    return (

        <div>

            <head>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" href="../../img/DeepSleepIcon.ico" />

                <title>Deep Sleep</title>


                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet"
                    integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossOrigin="anonymous" />
                <link rel="stylesheet" href="./styles.css" />


                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"
                    integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3"
                    crossOrigin="anonymous"></script>
                <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"
                    integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3"
                    crossOrigin="anonymous" />


                <script src="https://kit.fontawesome.com/558a1f723c.js" crossOrigin="anonymous" />

            </head>

            <NavbarComp></NavbarComp>


            {Object.keys(product).length > 0
                ?
                <div>
                    <div className="container" id="local">
                        <p>
                            <Link to={"/catalogue"}> Catálogo / </Link>
                            {product.nome}
                        </p>
                    </div>
                    <div className="container-fluid" id="produto">
                        <div className="row">
                            <div className="col-md-5 col-sm-12" id="carousel">
                                <NoTransitionExample produto={product.imagens} ></NoTransitionExample>
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <div id="text">
                                    <h2>{product.nome}</h2>
                                    <p id="simpleText">{product.descricao}</p>
                                    <p id="preco">R${product.preco.toFixed(2)}</p>
                                    <h3 id="precoNovo">R${product.preco.toFixed(2)}</h3>
                                </div>

                                <div id="color">
                                    <p>Cor</p>
                                    <div>
                                        {Object.values(product.cores).map((item) => {
                                            return (
                                                <label>
                                                    <input type="radio" name="test" value="1"></input>
                                                    <img src={`https://via.placeholder.com/40x40/${item}/${item}&text=.`} />
                                                </label>
                                            )
                                        })}
                                    </div>
                                </div>


                                <div className="buyButton">
                                    {cart == false
                                        ?
                                        <button className="buy" onClick={() => {

                                            if (token) {
                                                addToCart(user.id, product._id);
                                                alert("Adicionado ao carrinho de compras!");
                                            }
                                            else {
                                                alert("Usuario não está logado!");
                                            }

                                        }}>
                                            <p>Adicionar ao Carrinho</p>
                                        </button>
                                        :
                                        <button className="buy" onClick={() => {

                                            if (token) {
                                                addToCart(user.id, product._id);
                                                alert("Removido do carrinho de compras!");
                                            }
                                            else {
                                                alert("Usuario não está logado!");
                                            }

                                        }}>
                                            <p>Remover do Carrinho</p>
                                        </button>
                                    }

                                </div>
                                <div className="buyButton">
                                    {favorite == false
                                        ?
                                        <button className="buy" onClick={() => {
                                            if (token) {
                                                toFavorites(user.id, product._id);
                                                alert("Adicionado a lista de desejos!")
                                            }
                                            else {
                                                alert("Usuário não está logado!")
                                            }
                                        }}>
                                            <p>Adicionar aos Favoritos     <IoIosHeartEmpty size={25} ></IoIosHeartEmpty></p>
                                        </button>
                                        :
                                        <button className="buy" onClick={() => {
                                            if (token) {
                                                toFavorites(user.id, product._id);
                                                alert("Retirado da lista de desejos!")
                                            } else {
                                                alert("Usuário não está logado!")
                                            }

                                        }}>
                                            <p>Retirar dos favoritos     <IoIosHeart size={25} ></IoIosHeart></p>
                                        </button>
                                    }

                                </div>
                                {user.prioridade && <div className="buyButton">
                                    <button className="buy" onClick={handleShowDelete}>
                                        <p>Excluir Produto</p>
                                    </button>
                                </div>}

                                <Modal show={showDelete} onHide={handleCloseDelete}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Remover Produto</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>Deseja mesmo remover "{product.nome}"</Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={handleCloseDelete}>
                                            Cancelar
                                        </Button>
                                        <Button variant="danger" onClick={async() => 
                                            await api.removeProductById(product._id).then(window.location.href = "http://127.0.0.1:5173/catalogue")
                                            }>
                                            Remover
                                        </Button>
                                    </Modal.Footer>
                                </Modal>


                                {showButton()}

                                <hr></hr>
                                <div id="details">
                                    <BasicExample medidas={product.detalhes.medidas} material={product.detalhes.material} fabricante={product.detalhes.fabricante} ></BasicExample>
                                </div>
                                <hr></hr>
                            </div>
                        </div>
                    </div>
                </div>
                :
                <div style={{ width: '100vw', height: '100vh', alignItems: "center", justifyContent: "center", display: "flex" }}>
                    <ReactLoading type={"spin"} color={"#173CF0"} height={70} width={70} />
                </div>
            }

            <Modal
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        <h2>Feedbacks dos Clientes</h2>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h5 className="mb-4">Lista de Pedidos:</h5>
                    {product.feedback
                        ?
                        product.feedback.map(item => {
                            const data = new Date(item.dataAdicao);
                            const dataFormated = ((data.getDate())) + "/" + ((data.getMonth() + 1)) + "/" + data.getFullYear();
                            return (
                                <div className="container-fluid mb-5" id="modal">
                                    {/* <p><strong>Resposta da Pergunta 1: {item.feedback.resposta1}</strong></p>
                            <p><strong>Resposta da Pergunta 2: {item.feedback.resposta2}</strong></p>    
                            <p><strong>Resposta da Pergunta 3: {item.feedback.resposta3}</strong></p>         */}
                                    <p><strong>Data do pedido: {dataFormated}</strong></p>
                                </div>
                            )
                        }) :
                        <p></p>
                    }
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Fechar
                    </Button>
                </Modal.Footer>
            </Modal>

            <Footer />
        </div >
    );
}

export default DetalhesPage;