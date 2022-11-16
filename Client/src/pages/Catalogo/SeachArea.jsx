import React, { useEffect, useState } from "react";

function SearchArea() {

    const [option, setOption] = useState("");

    const selectChange = () =>{
        let select = document.querySelector("#SelectOption");
        let option = select.options[select.selectedIndex];

        let value = option.value;

        setOption(value);

    }

    console.log(option);

    return (
        <div className="container mb-0 mt-0">
            <div className="row">
                <div className="col-12 col-md-5">
                    <form className="justify-content-center justify-content-md-start mb-1 mb-md-0">
                        <div className="input-group input-group-sm">
                            <input type="text" className="form-control" placeholder="O que procura..." />
                            <button className="btn btn-primary">Buscar</button>
                        </div>
                    </form>
                </div>
                <div className="col-12 col-md-7">
                    <div className="d-flex flex-row-reverse justify-content-center justify-content-md-start">
                        <form className="ml-3 d-inline-block" id="formOrdenacao">
                            <select className="form-select form-select-sm" id="SelectOption" onChange={selectChange}>
                                <option value={"OrderNane"}>Ordenar por nome</option>
                                <option value={"OrderLowestPrice"}>Ordenar por preço (Menor - Maior)</option>
                                <option value={"OrderHighestPrice"}>Ordenar por preço (Maior - Menor)</option>
                            </select>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchArea;