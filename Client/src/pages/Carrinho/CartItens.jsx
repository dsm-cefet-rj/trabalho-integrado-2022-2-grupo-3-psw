import React, {useState, useEffect} from "react";
import "./styles.css";
import ItemCounter from "./ItemCounter";
import { useApi } from "../../Hooks/useApi";

function CartItens ({}) {
    const [user, setUser] = useState({});

    const api = useApi();

    const token = localStorage.getItem("authToken");

    const getUser = async(token)  => {
        await api.getUserbyToken(token).then((response) => setUser(response.user));
    }

    useEffect(() => {
        getUser(token);
    },[user.cartItens])

    return (
        <>
        {user.cartItens ? user.cartItens.map((item) => {
            return (
                <div className="row">
                    <div className="col-5 my-5 mx-3">
                        <img src={`src/img${item.product.imagens.imagem1}`} className="img-fluid"/>
                            <h3 className="mt-2">{item.product.nome}</h3>
                        <ItemCounter item={item}/>
                    </div>
                </div>
            )
        })
        : <h3>Nada no carrinho!</h3>
        }
        </>
    );
}

export default CartItens;