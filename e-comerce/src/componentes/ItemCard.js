import { Link } from "react-router-dom"

const ItemCard = ({ titulo }, { img }, { descripcion }) => {
    return (
        <div className="item-card">
            <h2>{titulo}</h2>
            <img src={img} />
            <Link to={'/item/mi-item'} ><button>Detalle</button></Link>
            <p>
                {descripcion}
            </p>
        </div>
    )
}