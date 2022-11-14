import React, {useState} from "react"
import { FaRegPlusSquare } from "react-icons/fa";
import { FaRegMinusSquare } from "react-icons/fa";
import "./styles.css";

function ItemCounter () {
    const [valor, setValor] = useState(1);

    const aumentaValor = () => {
        setValor(valor + 1);
    }

    const diminuiValor = () => {
        setValor(valor - 1);
        if (valor <= 0 ) {
            setValor(0);
        } 
    }

    return (
        <div className="col 12 mt-2">
            <button className="btn btn-primary" onClick={diminuiValor}>
                <FaRegMinusSquare size={18}/></button>
            <input style={{width: "35px", textAlign: "center", marginLeft:"3px", marginRight:"3px"}}
            type="number" id="itemQtd"
            value={valor}>
            </input>
            <button className="btn btn-primary" onClick={aumentaValor}>
                <FaRegPlusSquare size={18}/></button>
        </div>
    );
}

export default ItemCounter;