import React from "react";
import "./styles.css";
import Footer from "../../components/Footer";
import NavbarComp from "../../components/NavbarComp";
import ImportaBootstrap from "../../components/ImportsBootStrap";

function WishList () {
    return (
        <html lang="pt-br">
            <ImportaBootstrap/>

            <body>
                <NavbarComp/>

                <main>
                    <div id="suport">
                        <div className="container d-flex justify-content-center" id="tittle">
                            <h1>Minha Lista de Desejos</h1>
                        </div>
                    </div>
                </main>
                
            <Footer/>
            
            </body>
        </html>
    );
}

export default WishList