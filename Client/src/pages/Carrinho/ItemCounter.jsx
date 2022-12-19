import React, {useEffect, useState} from "react"
import { FaRegPlusSquare } from "react-icons/fa";
import { FaRegMinusSquare } from "react-icons/fa";
import "./styles.css";
import { BsFillTrashFill } from "react-icons/bs"
import useCartItem from "../../Estados/useItemStore";
import useOrderItem from "../../Estados/useOrderPrice";
import { useApi } from "../../Hooks/useApi";
import useUser from "../../Estados/useUser";

function ItemCounter (props) {
    const [user, setUser] = useState({});

    const api = useApi();

   
    const [valor, setValor] = useState(0);
    
    const addOrderValue = useOrderItem(state => state.addOrderItemValue);
    const removeOrderValue = useOrderItem(state => state.removeOrderItemValue);
    const removeItens = useCartItem(state => state.removeCartItem);
    const removeSameItems = useOrderItem(state => state.removeAllSameItems);
    const atualizaItens = useCartItem(state => state.updateItemQuantity);

    const valorTotal = props.item.preco*valor;
    
    const aumentaValor = () => {
        setValor(valor + 1);
        atualizaItens(props.itemId, 'increase');
        addOrderValue(props.valorItem);
        
    }

    const diminuiValor = () => {
        if (valor > 0 ) {
            setValor(valor - 1);
            removeOrderValue(props.valorItem);
            atualizaItens(props.itemId, 'decrease');
        } else {
            setValor(0);
        }
        
    }

    const cart = async(userId, productId) => {
        await api.addOrRemoveCartItem(userId, productId).then((response) => console.log(response));
    }

    const token = localStorage.getItem("authToken");

    const getUser = async(token)  => {
        await api.getUserbyToken(token).then((response) => setUser(response.user));
        console.log(user)
    }

    useEffect(() => {
        getUser(token);
    },[])

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
                cart(user.id, props.item._id) 
            }}
            >Remover Item <BsFillTrashFill size={18}/></button>  
        </div>
        </>
    );
}

export default ItemCounter;