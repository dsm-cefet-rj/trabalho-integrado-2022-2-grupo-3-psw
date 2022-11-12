import React from "react";
import "./style.css";

function DetalhesPage() {

    const produto ={
        nome: "Travesseiro Ortopédico",
        descricao: "Para um sono profundo e uma manhã sem dores no pescoço.",
        valorAntigo:"459,99",
        valorAtual:"359,99",
        detalhes:{
            medidas:"",
            material:"",
            fabricante:""
        }
    }
    
    return (
        
        <div class="container" id="local">
            <p>
                <a href="../catalogo/index.html"> Catálogo </a>
                {produto.nome}
            </p>
        </div>

    );
}

export default DetalhesPage;