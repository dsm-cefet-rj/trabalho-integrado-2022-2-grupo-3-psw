import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Badge from 'react-bootstrap/Badge';
import Navbar from 'react-bootstrap/Navbar';

import logo from "../img/DeepSleepLogo.png";

import styles from "./NavbarComp.module.css";

import { MdAccountCircle } from "react-icons/md";
import { MdShoppingCart } from "react-icons/md";
import { Link } from 'react-router-dom';

import useCartItem from "../Estados/useItemStore"

function NavbarComp() {

    const cartItem = useCartItem(state => state.quantityCartItens);
    console.log(cartItem);

    return (
        <Navbar style={{ backgroundColor: "#1052A8" }} fixed="top" expand="lg">
            <Container fluid className={styles.Espacamento}>
                <Navbar.Brand>
                    <Link className="text-decoration-none" style={{ color: "inherit" }} to={"/"}>
                        <img src={logo} style={{ width: "7rem" }} />
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll" className={styles.Espacamento}>
                    <Nav
                        navbarScroll
                    >
                        <Nav.Link style={{ color: "#fff" }}>
                            <Link className="text-decoration-none" style={{ color: "inherit" }} to={"/"}>
                                Home
                            </Link>
                        </Nav.Link>
                        <Nav.Link style={{ color: "#fff" }}>
                            <Link className="text-decoration-none" style={{ color: "inherit" }} to={"/catalogue"}>
                                Catalogo
                            </Link>
                        </Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link style={{ color: "#fff" }}>
                            <Link to = {"/user"} className="text-decoration-none" style={{ color: "inherit" }}><MdAccountCircle size={25} /></Link>
                        </Nav.Link>
                        <Nav.Link style={{ color: "#fff" }}>
                            <Link className="text-decoration-none" style={{ color: "inherit" }} to={"/cart"}>
                                {cartItem == 0 
                                ?
                                <MdShoppingCart size={25} />
                                :
                                <div>
                                    <MdShoppingCart size={25} /><Badge bg="danger">{cartItem}</Badge>
                                </div>
                                }

                            </Link>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarComp;