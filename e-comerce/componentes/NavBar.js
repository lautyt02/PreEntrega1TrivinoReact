import CartWidget from "./CartWidget.js"
const NavBar = ()=>{
    return (
        <nav class="navbar">
        <img src="/images/logo-fhierros.png" alt="logo de FHierro's" class="logo"/>
        <ul class="menu">
            <li class="menu-item">
                <a href="/index.html">
                    <h2>Inicio</h2>
                </a>
            </li>
            <li class="menu-item">
                <a href="/pages/about.html">
                    <h2>Sobre Nosotros</h2>
                </a>
            </li>
            <li class="menu-item">
                <a href="/pages/products.html">
                    <h2>Productos</h2>
                </a>
                <ul>
                    <li >
                        <a href="/pages/products.html">
                            <h3>Herreria</h3>
                        </a>
                    </li>
                    <li>
                        <a href="/pages/products.html">
                            <h3>Automatización</h3>
                        </a>
                    </li>
                </ul>
            </li>
            <li class="menu-item">
                <a href="/pages/technical-service.html">
                    <h2>Servicio Técnico</h2>
                </a>
            </li>
            <li class="menu-item">
                <a href="/pages/contact.html">
                    <h2>Contacto</h2>
                </a>
            </li>
        </ul>
    </nav>
    )
}