import "./SodaCard.css";

const SodaCard = ({ name, manufactor, calories}) => {
    return (
        <div className="soda-card">
            <img src="https://cdn-icons-png.flaticon.com/512/3184/3184409.png" className="soda-img"/>
            <div className="soda-info">
                <p><strong>Name:</strong> {name}</p>
                <p><strong>Manufactor:</strong> {manufactor}</p>
                <p><strong>calories:</strong> {calories}</p>
            </div>
            <div className="buttons-div">
                <button>Update Soda</button>
                <button>Favorite Soda</button>
            </div>
        </div>
    )
}

export default SodaCard;