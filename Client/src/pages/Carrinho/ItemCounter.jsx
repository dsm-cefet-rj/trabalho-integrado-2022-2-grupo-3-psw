import React, {useEffect, useState} from "react"
import "./styles.css";

import { FaRegPlusSquare } from "react-icons/fa";
import { FaRegMinusSquare } from "react-icons/fa";
import { BsFillTrashFill } from "react-icons/bs"

import { useApi } from "../../Hooks/useApi";


function ItemCounter (props) {
    const [user, setUser] = useState({});

    const api = useApi();

    const valorTotal = props.item.product.preco*props.item.productQtd
    
    const aumentaValor = async(userId, productId) => {
       await api.increaseItemQuantity(userId, productId);  
    }

    const diminuiValor = async (userId, productId) => {
       await api.decreaseItemQuantity(userId, productId);  
    }

    const removeFromCart = async(userId, productId) => {
        await api.addOrRemoveCartItem(userId, productId).then((response) => console.log(response));
    }

    const token = localStorage.getItem("authToken");

    const getUser = async(token)  => {
        await api.getUserbyToken(token).then((response) => setUser(response.user));
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
            <button className="btn btn-primary" onClick={() => diminuiValor(user.id, props.item.product._id)}>
                <FaRegMinusSquare size={18}/></button>
            <input style={{width: "35px", textAlign: "center", marginLeft:"3px", marginRight:"3px"}}
            type="text" id="itemQtd"
            value={props.item.productQtd}>
            </input>
            <button className="btn btn-primary" onClick={() => aumentaValor(user.id, props.item.product._id)}>
                <FaRegPlusSquare size={18}/></button>  
        </div>
        <div className="col-12 mt-3">
            <button className="btn btn-danger" onClick={() => {
                removeFromCart(user.id, props.item.product._id)
                .then(alert(`${props.item.product.nome} foi removido do carrinho!`)); 
            }}
            >Remover Item <BsFillTrashFill size={18}/></button>  
        </div>
        </>
    );
}

export default ItemCounter;