import React, { useEffect, useState } from "react";
import "./styles.css";
import { BsFillTrashFill } from "react-icons/bs"
import { BsFillCartPlusFill } from "react-icons/bs";
import useCartItem from "../../Estados/useItemStore";
import { FaInfoCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useApi } from "../../Hooks/useApi";


function WishListItem() {
    const addToCart = useCartItem(state => state.addCartItem);
    const [user, setUser] = useState({});

    const api = useApi();

    const token = localStorage.getItem("authToken");

    const getUser = async(token)  => {
        await api.getUserbyToken(token).then((response) => setUser(response.user));
    }

    const removeToFavorites = async (idUser, idProduct) => {
        await api.favoriteActions(idUser, idProduct).then(alert("Item removido da lista de desejos!"));
    }

    const cart = async(userId, productId) => {
        await api.addOrRemoveCartItem(userId, productId).then((response) => console.log(response));
    }

    useEffect(() => {
        getUser(token);
    },[])

    return (
        <>
            {user.favorites
                ?
                    user.favorites.map((item) => {
                        console.log(item)
                        return (
                            <div className="row">
                                <div className="col-8 my-5 mx-5">
                                    <img src={`src/img${item.product.imagens.imagem1}`} className="img-fluid" />
                                    <h3 className="mt-2">{item.product.nome}</h3>
                                    <div className="col-12">
                                        <span>R${item.product.preco}</span>
                                    </div>
                                    <div className="col-12 mt-2">
                                        <button className="btn btn-danger" onClick={() => {
                                            removeToFavorites(user.id, item.product._id)
                                            getUser(token);
                                        }}>
                                            <BsFillTrashFill size={30} /></button>
                                        <button className="btn btn-success ms-4" onClick={() => {
                                            cart(user.id, item.product._id).then(alert(`${item.product.nome} adicionado ao carrinho!`))
                                            getUser(token);
                                        }}>
                                            <BsFillCartPlusFill size={25} style={{ marginRight: "10px" }} />
                                            Adicionar ao Carrinho</button>
                                        <Link to={"/detail" + item.product._id}>
                                            <button className="btn btn-primary ms-4"><FaInfoCircle size={22} style={{ marginRight: "8px" }} />
                                                Detalhes do Produto</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                :
                <p>Nada adicionado aos favoritos</p>
                }

        </>
    );
}

export default WishListItem;