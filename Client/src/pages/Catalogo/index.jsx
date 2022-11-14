import React, { useEffect, useState } from "react";
import Teste from "../../components/ImportsBootStrap";
import NavbarComp from "../../components/NavbarComp";
import CarroselCatalogo from "./CarroselCatalogo";
import SearchArea from "./SeachArea";
import CardsCatalogo from "./CardsCatalogo";
import styles from "./styles.css";
import Pagination from "./pagination";
import CatalogoItens from "./catalogoItens";


import ImagemGato from "../../img/gato.jpg";
import ImagemFronha from "../../img/fronha-de-seda-02.jpg";
import ColchaoEsquenta from "../../img/colchaoQueEsquenta.png";
import Footer from "../../components/Footer";

import { itens } from "./itens";


function Catalogo() {

    const [itensC, setItensC] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itensPerPage] = useState(4);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    useEffect(() => {
        setItensC(itens);
    }, [])

    const indexOfLastItem = (currentPage + 1) * itensPerPage;
    const indexOfFirstItem = indexOfLastItem - itensPerPage;
    console.log(itensC)
    const currentItens = itensC.slice(indexOfFirstItem, indexOfLastItem);



    return (
        <div>
            <Teste />
            <NavbarComp />

            <CarroselCatalogo />

            <SearchArea />

            <hr className="mt-1" />

            <div className="container mb-1 mt-1 p-0">
                <div className="row">
                    <div className="col-sm-2 col-12 d-flex align-items-center flex-column text-justify container-fluid"
                        id="containerCategory">
                        <h2>Categorias</h2>
                        <div className="buttonsCategory">
                            <button className="btn btn-primary">Tudo</button>
                            <button className="btn btn-primary">Colchões</button>
                            <button className="btn btn-primary">Camas</button>
                            <button className="btn btn-primary">Acessórios</button>
                            <button className="btn btn-primary">Roupa de cama</button>
                        </div>
                    </div>
                    <div className="col-10">
                        
                            <CatalogoItens itens={currentItens}/>
                   
                    </div>
                </div>

                <div class="row">
                    <div class="col-12 col-md-5"/>
                    <div class="col-12 col-md-7 mt-3 d-flex flex-row-reverse justify-content-center justify-content-md-start">
                    {itens.length && 
                        <Pagination itensPerPage={itensPerPage} totalItens={itens.length} paginate={paginate}/>
                    }
                    </div>
                </div>

            </div>



            <div className="container p-0">
                <div className="row">
                    <div className="col-12 mb-2">
                        <h3>Novidades</h3>
                    </div>
                    <div className="col-md-4 col-sm-6 col-12">
                        <CardsCatalogo titulo="Gato acordado" desc="Dorme, come e some. Ele é bonzinho!" imagem={ImagemGato} />
                    </div>
                    <div className="col-md-4 col-sm-6 col-12">
                        <CardsCatalogo titulo="Fronha de Seda" desc="Impede que seus cabelos cacheados tenham freeza!" imagem={ImagemFronha} />
                    </div>
                    <div className="col-md-4 col-sm-6 col-12">
                        <CardsCatalogo titulo="Colchão que esquenta" desc="A companhia pra quando a morena for fria com você!" imagem={ColchaoEsquenta} />
                    </div>
                </div>
            </div>


            <Footer />
        </div>
    )
}

export default Catalogo;