const ItemCard = ({ titulo }, { img }, { descripcion }) => {
    return (
        <div className="item-card">
            <h2>{titulo}</h2>
            <img src={img} />
            <p>
                {descripcion}
            </p>
        </div>
    )
}