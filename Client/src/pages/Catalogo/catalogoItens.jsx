import React from "react";

import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";

import useCartItem from "../../Estados/useItemStore"
import useWishList from "../../Estados/useWishList";
import useUser from "../../Estados/useUser";

import { useApi } from "../../Hooks/useApi";

function CatalogoItens({ itens }) {

    const api = useApi();
    const user = useUser(state => state.user);

    const addItemOnCart = useCartItem(state => state.addCartItem);

    const favorite = async(idUser, idProduct) => {
        await api.favoriteActions(idUser, idProduct).then((response) => console.log(response));
    }

    const cart = async(userId, productId) => {
        await api.addOrRemoveCartItem(userId, productId).then((response) => console.log(response));
    }

    return (
        <div className="row">
            {itens.map((item) => {
                return (
                    <div className="col-md-3 col-sm-6 col-12 mt-3">
                        <div className="product-inner-box position-relative">
                            <div className="iconsProduct position-absolute">
                                <a className="text-decoration-none"><AiOutlineHeart size={20} 
                                onClick={() => favorite(user.id, item._id).then(alert(`${item.nome} adicionado a lista de desejos!`))}
                                /></a>
                                <a className="text-decoration-none" onClick={() => {
                                    cart(user.id, item._id).then(alert(`${item.nome} adicionado ao carrinho!`))}}>
                                <AiOutlineShoppingCart size={20} /></a>
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
                                <span>R${item.preco}</span>
                            </div>
                        </div>
                    </div>

                )
            })}
        </div>
    )
}

export default CatalogoItens;