import React from "react";
import "./styles.css";
import Footer from "../../components/Footer";
import NavbarComp from "../../components/NavbarComp";
import ImportaBootstrap from "../../components/ImportsBootStrap";
import WishListItem from "./WishListItem";
import useWishList from "../../Estados/useWishList";

import { BsHeartFill } from "react-icons/bs";
import { BsFillTrashFill } from "react-icons/bs"

function WishList () {
    return (
        <html lang="pt-br">
            <ImportaBootstrap/>

            <body>
                <NavbarComp/>

                <main>
                    <div className="container-fluid" id="suport">
                        <div className="container-fluid" id="tittle">
                            <h1 className="mt-4">Minha Lista de Desejos <i><BsHeartFill/></i></h1>
                        </div>
                        <div className="container-fluid mt-5 d-flex justify-content-around">
                        </div>
                        <div className="container-fluid" id="wishListItems"> 
                            <div className="row" id="wishListItem">
                                <WishListItem/> 
                            </div>
                        </div>
                    </div>
                </main>
                
            <Footer/>
            
            </body>
        </html>
    );
}

export default WishList