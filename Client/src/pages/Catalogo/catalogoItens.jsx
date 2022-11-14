import React from "react";

import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";

function CatalogoItens({ itens }) {
    return (
        <div className="row">
            {itens.map((item) => {
                return (
                    <div className="col-md-3 col-sm-6 col-12 mt-3">
                        <Link to={"/detail" + item.id} className="text-decoration-none" style={{color: "inherit"}}>
                            <div className="product-inner-box position-relative">
                                <div className="iconsProduct position-absolute">
                                    <a href="#" className="text-decoration-none"><AiOutlineHeart size={20} /></a>
                                    <a href="#" className="text-decoration-none"><AiOutlineShoppingCart size={20} /></a>
                                </div>
                                <img src={`src/img${item.fotos.foto1}`} classNameName="img-fluid" />
                            </div>
                            <div className="product-info">
                                <div className="product-name">
                                    <h3>{item.nome}</h3>
                                </div>
                                <div className="product-price">
                                    <span>{item.preco}</span>
                                </div>
                            </div>
                        </Link>
                    </div>

                )
            })}
        </div>
    )
}

export default CatalogoItens;