const CartWidget = ({cant}) => {
    return (
        <div className='carrito-widget'>
            <img src="/public/carrito.png"/>
            <p>{cant}</p>
        </div>
    )
}
export default CartWidget