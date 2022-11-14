import React, {useState} from "react";
import { FaRedoAlt } from "react-icons/fa";


function ItemPrice (props) {
    const [valorAtual, setValorAtual] = useState(props.valorDoItem);

    const valorAtualizado = () => {
        setValorAtual (valorAtual * props.itemQtd)
    }

    return (
        <>
        <div className="col-9">
            <input value={`R$${valorAtual}`} id="itemTotalValue"></input>
            <button className="btn btn-primary ms-3" onClick={valorAtualizado}><FaRedoAlt size={15}/></button>
        </div>
        </>
    );
}

export default ItemPrice;