// import 'bootstrap/dist/css/bootstrap.min.css'
// import { Nav, Container, Navbar, NavDropdown } from "react-bootstrap"
import "../css/mi-css.css"
import CartWidget from "./CartWidget.js"
import logoImg from "../images/logo-fhierros.png"
import { NavLink } from "react-router-dom"
import React from "react"
const MiNavBar = ({ nombre }) => {
    return (
        <nav className="navbar">
            <NavLink to={'/'}>
                <img src={logoImg} alt="logo de FHierro's" className="logo" />
            </NavLink>
            <ul className="menu">

                <li className="menu-item">
                    <NavLink to={'/'}>
                        <h2>{nombre}</h2>
                    </NavLink>
                </li>
                <li className="menu-item">
                    <NavLink to={'/'}>
                        <h2>Productos</h2>
                    </NavLink>
                    <ul>
                        <li >
                            <NavLink to={'/category/herreria'}>
                                <h3>Herreria</h3>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/category/automatizacion'}>
                                <h3>Automatización</h3>
                            </NavLink>
                        </li>
                    </ul>
                </li>
                <li>
                    <NavLink to={'/carrito/'}>
                        <CartWidget cant="5" />
                    </NavLink>
                </li>
                <li className="menu-item">
                    <NavLink to={"/contacto/"}>
                        <h2>Contacto</h2>
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}
export default MiNavBar


// 
{/* <nav className="navbar">
            <img src={logoImg} alt="logo de FHierro's" class="logo" />
            <ul className="menu">
                <li className="menu-item">
                    <a href="#">
                        <h2>FHierro's</h2>
                    </a>
                </li>
                <li className="menu-item">
                    <a href="#">
                        <h2>Productos</h2>
                    </a>
                    <ul>
                        <li >
                            <a href="#">
                                <h3>Herreria</h3>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <h3>Automatización</h3>
                            </a>
                        </li>
                    </ul>
                </li>
                <li>
                    <CartWidget cant="5" />
                </li>
                <li className="menu-item">
                    <a href="#">
                        <h2>Contacto</h2>
                    </a>
                </li>
            </ul>
        </nav> */}

//     <Navbar expand="lg" className="bg-body-tertiary">
//     <Container>
//       <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
//       <Navbar.Toggle aria-controls="basic-navbar-nav" />
//       <Navbar.Collapse id="basic-navbar-nav">
//         <Nav className="me-auto">
//           <Nav.Link href="#home">Home</Nav.Link>
//           <Nav.Link href="#link">Link</Nav.Link>
//           <NavDropdown title="Dropdown" id="basic-nav-dropdown">
//             <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//             <NavDropdown.Item href="#action/3.2">
//               Another action
//             </NavDropdown.Item>
//             <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//             <NavDropdown.Divider />
//             <NavDropdown.Item href="#action/3.4">
//               Separated link
//             </NavDropdown.Item>
//           </NavDropdown>
//         </Nav>
//       </Navbar.Collapse>
//     </Container>
//   </Navbar>