const CartWidget = (cant) => {
    return (
        <div className='carrito-widget'>
            <img src="/public/carrito.png"></img>
            <p>{cant}</p>
        </div>
    )
}