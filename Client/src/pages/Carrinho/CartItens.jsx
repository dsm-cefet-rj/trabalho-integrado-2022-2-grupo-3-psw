import React from "react";
import "./styles.css";
import ItemCounter from "./ItemCounter";
import useCartItem from "../../Estados/useItemStore";
import { itens } from "./Itens";


function CartItens ({valorItem}) {
    const result = itens.filter(item => item.carrinho == "true");
    return (
        <>
        {result.map((item) => {
            return (
                <div className="row">
                    <div className="col-5 my-5 mx-3">
                        <img src={`src/img${item.foto}`} className="img-fluid"/>
                            <h3 className="mt-2">{item.nome}</h3>
                        {/* <div className="col-12">
                             <span>{item.preco}</span>
                        </div> */}
                        <ItemCounter valorItem={item.preco}/>
                    </div>
                </div>
            )
        })}
        </>
    );
}

export default CartItens;