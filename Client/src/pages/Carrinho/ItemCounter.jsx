import React, {useState} from "react"
import { FaRegPlusSquare } from "react-icons/fa";
import { FaRegMinusSquare } from "react-icons/fa";
import "./styles.css";
import ItemPrice from "./ItemPrice";
import { BsFillTrashFill } from "react-icons/bs"
import useCartItem from "../../Estados/useItemStore";

function ItemCounter (props) {
    const [valor, setValor] = useState(1);
    const [qtd, setQtd] = useState(valor);

    const cartItemsList = useCartItem(state => state.cartItens);
    const removeItens = useCartItem(state => state.removeCartItem)


    const aumentaValor = () => {
        setValor(valor + 1);
    }

    const diminuiValor = () => {
        setValor(valor - 1);
        if (valor <= 1 ) {
            setValor(1);
        }
    }

    return (
        <>
        <ItemPrice itemQtd ={valor} valorDoItem={props.valorItem}></ItemPrice> 
        <div className="col 12 mt-2">
            <button className="btn btn-primary" onClick={diminuiValor}>
                <FaRegMinusSquare size={18}/></button>
            <input style={{width: "35px", textAlign: "center", marginLeft:"3px", marginRight:"3px"}}
            type="text" id="itemQtd"
            value={valor}>
            </input>
            <button className="btn btn-primary" onClick={aumentaValor}>
                <FaRegPlusSquare size={18}/></button>  
        </div>
        <div className="col-12 mt-3">
            <button className="btn btn-danger" onClick={() => {
                removeItens(props.itemId) 
            }}
            >Remover Item <BsFillTrashFill size={18}/></button>  
        </div>
        </>
    );
}

export default ItemCounter;