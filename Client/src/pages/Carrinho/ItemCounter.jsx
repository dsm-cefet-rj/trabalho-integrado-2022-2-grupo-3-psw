import React, {useState} from "react"
import { FaRegPlusSquare } from "react-icons/fa";
import { FaRegMinusSquare } from "react-icons/fa";
import "./styles.css";
import { BsFillTrashFill } from "react-icons/bs"
import useCartItem from "../../Estados/useItemStore";
import useOrderItem from "../../Estados/useOrderPrice";

function ItemCounter (props) {
    
    const [valor, setValor] = useState(0);
    
    const addOrderValue = useOrderItem(state => state.addOrderItemValue);
    const removeOrderValue = useOrderItem(state => state.removeOrderItemValue);
    const removeItens = useCartItem(state => state.removeCartItem);
    const removeSameItems = useOrderItem(state => state.removeAllSameItems);
    const atualizaItens = useCartItem(state => state.updateItemQuantity);

    const valorTotal = props.valorItem*valor;
    
    const aumentaValor = () => {
        setValor(valor + 1);
        atualizaItens(props.itemId, 'increase');
        addOrderValue(props.valorItem);
        
    }

    const diminuiValor = () => {
        setValor(valor - 1);
        if (valor <= 0 ) {
            setValor(0);
        }
        atualizaItens(props.itemId, 'decrease');
        removeOrderValue(props.valorItem);
    }
    
    return (
        <>
        <div className="col-9">
            <input value={`R$${valorTotal}`} id="itemTotalValue"></input>
        </div>
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
                removeSameItems(props.valorItem)
                removeItens(props.itemId) 
            }}
            >Remover Item <BsFillTrashFill size={18}/></button>  
        </div>
        </>
    );
}

export default ItemCounter;