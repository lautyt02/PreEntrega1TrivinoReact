import CartWidget from "./CartWidget.js"
import logoImg from "../images/logo-fhierros.png"
const NavBar = ()=>{
    return (
        <nav class="navbar">
        <img src={logoImg} alt="logo de FHierro's" class="logo"/>
        <ul class="menu">
            <li class="menu-item">
                <a href="#">
                    <h2>FHierro's</h2>
                </a>
            </li>
            <li class="menu-item">
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
                <CartWidget cant="5"/>
            </li>
            <li class="menu-item">
                <a href="#">
                    <h2>Contacto</h2>
                </a>
            </li>
        </ul>
    </nav>
    )
}
export default NavBar