import carritoImg from '../../public/carrito.png'
const CartWidget = ({cant}) => {
    return (
        <div className='carrito-widget'>
            <img src={carritoImg}/>
            <p>{cant}</p>
        </div>
    )
}
export default CartWidget