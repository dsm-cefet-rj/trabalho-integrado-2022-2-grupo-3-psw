import React, {useState} from "react";
import NavbarComp from "../../components/NavbarComp";
import ImportaBootstrap from "../../components/ImportsBootStrap";
import Container from "react-bootstrap/esm/Container";
import Footer from "../../components/Footer";
// import "./";


function VisualizarSatisfacao(){
    return (
        <>
        <ImportaBootstrap/>
        <body>
            <NavbarComp/>

            <Container id = "title">Satisfação do Cliente</Container>

            <Footer/>

        </body>
        </>
    );
}

export default VisualizarSatisfacao;