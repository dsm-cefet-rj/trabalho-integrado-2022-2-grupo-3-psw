import React from "react";
import "./styles.css";
import ItemCounter from "./ItemCounter";
import { itens } from "./Itens";

function CartItens () {
    
    return (
        <>
        {itens.map((item) => {
            return (
                <div className="row">
                    <div className="col-5 my-5 mx-3">
                        <img src={`src/img${item.foto}`} className="img-fluid"/>
                            <h3 className="mt-2">{item.nome}</h3>
                        <div className="col-12">
                             <span>{item.preco}</span>
                        </div>
                        <ItemCounter/>
                    </div>
                </div>
            )
        })}
        </>
    );
}

export default CartItens;