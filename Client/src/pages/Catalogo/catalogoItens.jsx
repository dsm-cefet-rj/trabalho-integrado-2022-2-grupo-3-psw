import React from "react";

import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";

import useCartItem from "../../Estados/useItemStore"
import useWishList from "../../Estados/useWishList";

function CatalogoItens({ itens }) {

    const addItemOnCart = useCartItem(state => state.addCartItem);
    const addItemOnWishList = useWishList(state => state.addWishListItem);

    return (
        <div className="row">
            {itens.map((item) => {
                return (
                    <div className="col-md-3 col-sm-6 col-12 mt-3">
                        <div className="product-inner-box position-relative">
                            <div className="iconsProduct position-absolute">
                                <a className="text-decoration-none"><AiOutlineHeart size={20} 
                                onClick={() => {
                                    addItemOnWishList(item)
                                    alert(item.nome + " adicionado ao lista de desejos!")
                                }}
                                /></a>
                                <a className="text-decoration-none" onClick={() => {
                                    addItemOnCart(item)
                                    alert(item.nome + " adicionado ao carrinho!")
                                }}><AiOutlineShoppingCart size={20} /></a>
                            </div>
                            <Link to={"/detail" + item.id} className="text-decoration-none" style={{ color: "inherit" }}>
                                <img src={`src/img${item.fotos.foto1}`} className="img-fluid" />
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