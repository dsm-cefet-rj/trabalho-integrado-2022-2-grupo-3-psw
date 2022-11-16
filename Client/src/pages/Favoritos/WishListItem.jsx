import React from "react";
import "./styles.css";
import { BsFillTrashFill } from "react-icons/bs"
import { BsFillCartPlusFill } from "react-icons/bs";
import useWishList from "../../Estados/useWishList";


function WishListItem () {
    // const filtro = itens.filter(item => item.favorito == "true");
    const createWishList = useWishList(state => state.wishList);
    return (
        <>
        {createWishList.map((item) => {
            return (
                <div className="row">
                    <div className="col-8 my-5 mx-5">
                        <img src={`src/img${item.fotos.foto1}`} className="img-fluid"/> 
                            <h3 className="mt-2">{item.nome}</h3>
                        <div className="col-12">
                             <span>R${item.preco}</span>
                        </div>
                        <div className="col-12 mt-2">
                       <button className="btn btn-danger">
                            <BsFillTrashFill size={30}/></button>
                        <button className="btn btn-success ms-4">
                            <BsFillCartPlusFill size={25} style={{marginRight: "10px"}}/>
                            Adicionar ao Carrinho</button>
                        </div>
                    </div>
                </div>
            )
        })}
        </>
    );
}

export default WishListItem;