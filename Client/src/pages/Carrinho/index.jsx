import React, { useState, useEffect } from "react";
import "./styles.css"
import NavbarComp from "../../components/NavbarComp";
import ImportaBootstrap from "../../components/ImportsBootStrap";
import Footer from "../../components/Footer";
import pix from "../../img/Pix.png";
import CartItens from "./CartItens";
import { FiShoppingBag } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";
import { FiTruck } from "react-icons/fi";
import { FaBuilding } from "react-icons/fa";
import { useApi } from "../../Hooks/useApi";

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function CartPage() {

    const [rua, setRua] = useState("");
    const [bairro, setBairro] = useState('');
    const [cidade, setCidade] = useState('');
    const [user, setUser] = useState({});

    const [cepInput, setCepInput] = useState("");
    const [shippingValue, setShippingValue] = useState(0);
    const [show, setShow] = useState(false);

    const removeFromCart = async (userId, productId) => {
        await api.addOrRemoveCartItem(userId, productId)
    }

    const addToOrderList = async (userId, productId, productQtd, orderDate) => {
        await api.addToOrderList(userId, productId, productQtd, orderDate);
    }

    const getValorTotal = () => {
        if (user.cartItens) {
            const somaTemp = user.cartItens.map((item) => item.product.preco * item.productQtd);
            let soma = 0;
            for (var i = 0; i < somaTemp.length; i++) {
                soma += somaTemp[i];
            }
            return soma;
        }

    }

    const valorTotal = getValorTotal() + parseFloat(shippingValue);


    const handleClose = () => setShow(false);

    const checkOut = () => {
        const orderDate = new Date(Date.now());
        setShow(false);
        user.cartItens.map(item => {
            addToOrderList(user.id, item.product._id, item.productQtd, orderDate);
            removeFromCart(user.id, item.product._id)
        });
    }

    const api = useApi();

    const calculaFrete = async (e) => {
        e.preventDefault();
        await api.calcularValorFrete(cepInput).then((response) => {
            var valorFrete = parseFloat(response.valorFrete.replace(",", "."));
            console.log(valorFrete);
            setShippingValue(valorFrete.toFixed(2));
        }).catch(() => {
            alert("Cep n??o encontrado/inv??lido")
        })
        await api.getLocal(cepInput).then((response) => {
            setRua(response.logradouro);
            setBairro(response.bairro);
            setCidade(response.localidade);
        });

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setShow(true);

        if (user.cartItens.length == 0) {
            alert("N??o h?? itens no carrinho!! Adicione itens para realizar o pedido!")
            setShow(false);
        }
    }


    const token = localStorage.getItem("authToken");

    const getUser = async (token) => {
        await api.getUserbyToken(token).then((response) => setUser(response.user));
    }

    useEffect(() => {
        getUser(token);
    }, [user.cartItens])

    return (
        <html lang="pt-br">
            <ImportaBootstrap />

            <body>

                <NavbarComp />

                <main>
                    <div className="container-fluid" id="suport">
                        <div className="container-fluid" id="tittle">
                            <h1>Meu Carrinho <FiShoppingCart /> </h1>
                        </div>
                        <div className="container-fluid" id="cartItens">
                            <CartItens />
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="container" id="cep">
                                <div className="row">
                                    <div className="col-12 mt-3" >
                                        <h5><FaBuilding /> Informe seu Cep:</h5>
                                        <input type="text" id="cepArea"
                                            onChange={e => setCepInput(e.target.value)}
                                            pattern="\d{5}-?\d{3}"
                                            required />
                                        <button className="btn btn-primary ms-3" onClick={calculaFrete}
                                            style={{ borderRadius: "20px" }}>
                                            Calcular Frete
                                        </button>
                                    </div>
                                    <div className="col-12 mt-4">
                                        <h5><FiTruck /> Valor do Frete:</h5>
                                        <input type="text" id="shipping" value={shippingValue}></input>
                                    </div>
                                </div>
                            </div>
                            <div className="container-fluid" id="payment">
                                <div className="row">
                                    <div className="col-12 mt-4">
                                        <h5>Formas de Pagamento:</h5>
                                        <img src={pix} className="me-3 " />
                                        <input className="form-check-input" type="checkbox" id="paymentMethod" required></input>
                                    </div>
                                    <div className="col-12 mt-4" id="installment">
                                        <select id="installmentOptions">
                                            <option>?? vista sem juros</option>
                                            <option>2x sem juros</option>
                                            <option>3x sem juros</option>
                                            <option>4x sem juros</option>
                                            <option>5x sem juros</option>
                                            <option>6x sem juros</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 ms-3 mt-4">
                                <h5>Valor a ser pago: R${valorTotal.toFixed(2)}</h5>
                            </div>
                            <div className="col-6 ms-3 mt-4">
                                <button className="btn btn-primary" id="checkOutButton" ><FiShoppingBag /> Finalizar Compra</button>
                            </div>
                        </form>
                    </div>
                </main>

                <Modal
                    show={show}
                    onHide={() => setShow(false)}
                    dialogClassName="modal-90w"
                    aria-labelledby="example-custom-modal-styling-title"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="example-custom-modal-styling-title">
                            Confira suas informa????es
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h5>Itens</h5>
                        {user.cartItens ? user.cartItens.map((item) => {
                            return (
                                <div style={{ display: "flex" }}>
                                    <p>{item.product.nome}</p>
                                    <p style={{ marginLeft: "20px", opacity: "0.5" }}>x {item.productQtd}</p>
                                </div>
                            )
                        }) : <p>N??o h?? itens</p>}
                        <h5>Cep</h5>
                        <p>{cepInput}</p>
                        <h5>Valor Total</h5>
                        <p>R$ {valorTotal.toFixed(2)}</p>
                        <h5>Cidade</h5>
                        <p>
                            <input type={"text"}
                                value={cidade}
                                onChange={e => setCidade(e.target.value)}
                                style={{ border: "none" }}
                            />
                        </p>
                        <h5>Bairro</h5>
                        <p>
                            <input type={"text"}
                                value={bairro}
                                onChange={e => setBairro(e.target.value)}
                                style={{ border: "none" }}
                            />
                        </p>
                        <h5>Rua</h5>
                        <p>
                            <input type={"text"}
                                value={rua}
                                onChange={e => setRua(e.target.value)}
                                style={{ border: "none" }}
                            />
                        </p>
                        <h5>Forma de Pagamento</h5>
                        <p>Pix - {document.getElementById("installmentOptions").options[document.getElementById("installmentOptions").selectedIndex].value}</p>


                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Fechar
                        </Button>
                        <Button variant="primary" onClick={checkOut}>
                            Confirmar
                        </Button>
                    </Modal.Footer>
                </Modal>

                <Footer />

            </body>

        </html>
    );
}

export default CartPage;
