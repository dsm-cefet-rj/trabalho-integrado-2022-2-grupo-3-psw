import React from "react";

function SearchArea(){
    return(
        <div class="container mb-0 mt-0">
                <div class="row">
                    <div class="col-12 col-md-5">
                        <form class="justify-content-center justify-content-md-start mb-1 mb-md-0">
                            <div class="input-group input-group-sm">
                                <input type="text" class="form-control" placeholder="O que procura..."/>
                                    <button class="btn btn-primary">Buscar</button>
                            </div>
                        </form>
                    </div>
                    <div class="col-12 col-md-7">
                        <div class="d-flex flex-row-reverse justify-content-center justify-content-md-start">
                            <form class="ml-3 d-inline-block" id="formOrdenacao">
                                <select class="form-select form-select-sm">
                                    <option>Ordenar por nome</option>
                                    <option>Ordenar por preço (Menor - Maior)</option>
                                    <option>Ordenar por preço (Maior - Menor)</option>
                                </select>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default SearchArea;