import React, { useEffect, useState } from "react";
import "./style.css";
import Footer from "../../components/Footer";
import NoTransitionExample from "./Carrossel";
import NavbarComp from "../../components/NavbarComp";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoIosHeart } from "react-icons/io";
import BasicExample from "./Informacoes";
import { Link, useNavigate, Navigate, useParams } from "react-router-dom";
import useWishList from "../../Estados/useWishList";

import useCartItem from "../../Estados/useItemStore";

import { useApi } from "../../Hooks/useApi";
import ReactLoading from 'react-loading';


function DetalhesPage() {

    const { id } = useParams();
    const api = useApi();
    const additem = useCartItem(state => state.addCartItem);
    const [favorite, setFavorite] = useState(false);
    const [product, setProduct] = useState({});

    const addWishList = useWishList(state => state.addWishListItem);
    const removeWishList = useWishList(state => state.removeWishListItem);
    const itensOnWishList = useWishList(state => state.wishList);
    const ids = [];

    const navigate = useNavigate();
    const [user, setUser] = useState({});


    const token = localStorage.getItem("authToken");

    const addToCart = async (userId, productId) => {
        await api.addOrRemoveCartItem(userId, productId)
    }

    const toFavorites = async (userId, productId) => {
        await api.favoriteActions(userId, productId)
    }

    const getUser = async (token) => {
        await api.getUserbyToken(token).then((response) => setUser(response.user));
    }


    const sendToSatisfaction = () => {
        navigate("/visualizar");
    }

    const getProduct = async (id) => {
        await api.getProductById(id).then((response) => {
            setProduct(response);
        })
    }

    useEffect(() => {
        getProduct(id);
        finId(product.id);
        getUser(token);
        getUser(token);
    }, [product.id])

    for (let i = 0; i < itensOnWishList.length; i++) {
        ids.push(itensOnWishList[i].id);
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

    function showButton(){
        if(user.email == "admin@gmail.com"){
            return(<div className="buyButton" >
            <button className="buy" onClick={sendToSatisfaction}>
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
                                    <p id="preco">R${product.preco}</p>
                                    <h3 id="precoNovo">R${product.preco}</h3>
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
                                </div>
                                <div className="buyButton">
                                    {favorite == false
                                        ?
                                        <button className="buy" onClick={() => {
                                            if (token) {
                                                toFavorites(user.id, product._id);
                                                setFavorite(true);
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
                                            toFavorites(user.id, product._id);
                                            setFavorite(false)
                                            alert("Retirado da lista de desejos!")
                                        }}>
                                            <p>Retirar dos favoritos     <IoIosHeart size={25} ></IoIosHeart></p>
                                        </button>
                                    }

                                </div>
                                {user.prioridade && <div className="buyButton">
                                    <button className="buy" onClick={async () => await api.removeProductById(product._id).then(navigate("/catalogue"))}>
                                        <p>Excluir Produto</p>
                                    </button>
                                </div>}

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

            <Footer>
            </Footer>
        </div >
    );
}

export default DetalhesPage;