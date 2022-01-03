const Card = () => {
    return (
        <div className="card">
        <div className="card-header">
            <div className="card-header-title">
            <h3>{referencia}</h3>
            </div>
            <div className="card-header-icon">
            <span className="icon">
                <i className="fas fa-angle-down"></i>
            </span>
            </div>
        </div>
        <div className="card-body">
            <p>texto de card</p>
        </div>
        </div>
    )
    }

    export default Card;