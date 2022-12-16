import React, {useState} from "react";
import "./styles.css";
import ItemCounter from "./ItemCounter";
import useCartItem from "../../Estados/useItemStore";
import useOrderItem from "../../Estados/useOrderPrice";
// import { itens } from "./Itens";


function CartItens ({}) {
    const createCartList = useCartItem(state => state.cartItens);
    // const [valorPedido, setValorPedido] = useState("");
    const addValue = useOrderItem(state => state.addOrderItemValue);

    // const addItens = useCartItem(state => 
    //     state.addCartItem 
    // )

    return (
        <>
        {createCartList.map((item) => {
            return (
                <div className="row">
                    <div className="col-5 my-5 mx-3">
                        <img src={`src/img${item.imagens.imagem1}`} className="img-fluid"/>
                            <h3 className="mt-2">{item.nome}</h3>
                        <ItemCounter valorItem={item.preco} itemId={item.id}/>
                    </div>
                </div>
            )
        })}
        </>
    );
}

export default CartItens;