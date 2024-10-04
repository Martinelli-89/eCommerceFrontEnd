import './ItemCard.scss';
import jumper from "../../Assets/Images/Jumper.png"
import basket from "../../Assets/Images/bagIcon.svg"

const ItemCard = () => {

    return (
        <section className="ItemCard">
            <div className="ItemCard__wrapper">
                <img className="item" src={jumper} alt="yelloish jumper" />
                <img className="addToBasket" src={basket} alt="add item to basket" />
            </div>
            <p className="ItemCard__description">Descrizione</p>
            <p className="ItemCard__price">10.7</p>
        </section>
    );
}

export default ItemCard;