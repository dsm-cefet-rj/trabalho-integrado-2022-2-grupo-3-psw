import React, { useEffect, useState } from "react";

import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { RiShoppingCart2Line } from "react-icons/ri";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useApi } from "../../Hooks/useApi";



function CatalogoItens({ itens }) {

    const api = useApi();

    const favorite = async (idUser, idProduct) => {
        await api.favoriteActions(idUser, idProduct).then((response) => console.log(response));
    }

    const cart = async (userId, productId) => {
        await api.addOrRemoveCartItem(userId, productId).then((response) => console.log(response));
    }

    const [user, setUser] = useState({});
    const token = localStorage.getItem("authToken");

    const getUser = async (token) => {
        await api.getUserbyToken(token).then((response) => setUser(response.user));
    }

    const ids = [];

    if (user.favorites) {
        for (let i = 0; i < user.favorites.length; i++) {
            ids.push(user.favorites[i].product._id);
        }
    }

    const finIdFavorite = (id) => {
        for (let i = 0; i < ids.length; i++) {
            if (id == ids[i]) {
                return true;
            }
        }
        return false;
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
                return true;
            }
        }
        return false;
    }

    useEffect(() => {
        getUser(token);
    }, [user.favorites])

    return (
        <div className="row">
            {itens.map((item) => {
                return (
                    <div className="col-md-3 col-sm-6 col-12 mt-3">
                        <div className="product-inner-box position-relative">
                            <div className="iconsProduct position-absolute">
                                {!finIdFavorite(item._id)
                                    ?
                                    <a className="text-decoration-none"><AiOutlineHeart size={20}
                                        onClick={() => {
                                            if (token) {
                                                favorite(user.id, item._id).then(alert(`${item.nome} adicionado a lista de desejos!`))
                                            }
                                            else {
                                                alert("Usuário não está logado!");
                                            }

                                        }
                                        }
                                    />
                                    </a>
                                    :
                                    <a className="text-decoration-none"><AiFillHeart size={20}
                                        onClick={() => {
                                            if (token) {
                                                favorite(user.id, item._id).then(alert(`${item.nome} removido da lista de desejos!`))
                                            } else {
                                                alert("Usuário não está logado!");
                                            }
                                        }
                                        }
                                    />
                                    </a>
                                }

                                {!finIdCart(item._id)
                                    ?
                                    <a className="text-decoration-none" onClick={() => {
                                        if (token) {
                                            cart(user.id, item._id).then(alert(`${item.nome} adicionado ao carrinho!`))
                                        } else {
                                            alert("Usuário não está logado!");
                                        }
                                    }}>
                                        <RiShoppingCart2Line size={20} />
                                    </a>
                                    :
                                    <a className="text-decoration-none" onClick={() => {
                                        if (token) {
                                            cart(user.id, item._id).then(alert(`${item.nome} removido do carrinho!`))
                                        } else {
                                            alert("Usuário não está logado!");
                                        }
                                    }}>
                                        <RiShoppingCart2Fill size={20} />
                                    </a>
                                }

                            </div>
                            <Link to={"/detail" + item._id} className="text-decoration-none" style={{ color: "inherit" }}>
                                <img src={`src/img${item.imagens.imagem1}`} className="img-fluid" />
                            </Link>
                        </div>
                        <div className="product-info">
                            <div className="product-name">
                                <h3>{item.nome}</h3>
                            </div>
                            <div className="product-price">
                                <span>R${item.preco.toFixed(2)}</span>
                            </div>
                        </div>
                    </div>

                )
            })}
        </div>
    )
}

export default CatalogoItens;