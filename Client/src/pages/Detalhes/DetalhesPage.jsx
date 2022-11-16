import React from "react";
import "./style.css";
import Footer from "../../components/Footer";
import NoTransitionExample from "./Carrossel";
import NavbarComp from "../../components/NavbarComp";
import { CiHeart } from "react-icons/ci";
import BasicExample from "./Informacoes";
import { Link, useParams } from "react-router-dom";
import useWishList from "../../Estados/useWishList";

import useCartItem from "../../Estados/useItemStore";

import { itens } from "../Catalogo/itens";


function DetalhesPage() {

    const { id } = useParams();
    const additem = useCartItem(state => state.addCartItem);

    const addWishList = useWishList(state => state.addWishListItem);


    const produto2 = itens.filter(item => item.id == id);

    const cores = Object.values(produto2[0].cores);


    return (

        <div>

            <head>
                <meta charSet="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
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

            <div className="container" id="local">
                <p>
                    <Link to={"/catalogue"}> Catálogo / </Link>
                    {produto2[0].nome}
                </p>
            </div>


            <div className="container-fluid" id="produto">
                <div className="row">
                    <div className="col-md-5 col-sm-12" id="carousel">
                        <NoTransitionExample produto={produto2[0].fotos} ></NoTransitionExample>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <div id="text">
                            <h2>{produto2[0].nome}</h2>
                            <p id="simpleText">{produto2[0].descricao}</p>
                            <p id="preco">{produto2[0].preco}</p>
                            <h3 id="precoNovo">{produto2[0].preco}</h3>
                        </div>

                        <div id="color">
                            <p>Cor</p>
                            <div>
                                {cores.map((item) => {
                                    return (
                                        <label>
                                            <input type="radio" name="test" value="1"></input>
                                            <img src={`https://via.placeholder.com/40x40/${item}/${item}&text=.`}/>
                                        </label>
                                    )
                                })}
                            </div>
                        </div>


                        <div className="buyButton">
                            <button className="buy" onClick={() => {
                                additem(produto2[0]);
                                alert("Adicionado ao carrinho de compras!")
                            }}>
                                <p>Adicionar ao Carrinho</p>
                            </button>
                        </div>
                        <div className="buyButton">
                            <button className="buy" onClick={()=>{
                                addWishList(produto2[0]);
                                alert("Adicionado a lista de desejos!")
                            }}>
                                <p>Adicionar aos Favoritos     <CiHeart size={25} ></CiHeart></p>
                            </button>
                        </div>
                        <hr></hr>
                        <div id="details">
                            <BasicExample medidas={produto2[0].detalhes.medidas} material={produto2[0].detalhes.material} fabricante={produto2[0].detalhes.fabricante} ></BasicExample>
                        </div>
                        <hr></hr>
                    </div>
                </div>
                <Footer>
                </Footer>
            </div>

        </div >
    );
}

export default DetalhesPage;