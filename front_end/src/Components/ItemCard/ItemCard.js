import './ItemCard.scss';
import basket from "../../Assets/Images/bagIcon.svg"

const ItemCard = ({cardSize, picture, price, description, name}) => {

    const widthToPixel =  cardSize+"px";
    const heightToPixel = cardSize*1.2+"px";

    const divStyle = {
        width: widthToPixel,
        height: heightToPixel
      };

    const shiftBasket= {
        left: cardSize*0.85+'px',
        bottom: cardSize*0.98+'px',
        width: cardSize*0.1+'px'
      };
 

    return (
        <section    
            className="ItemCard"
            style={divStyle}   
        >
            <div className="ItemCard__wrapper">
                <img className="item" src={picture} alt={description} />
                <img className="addToBasket" src={basket} alt="add item to basket" style={shiftBasket}   />
            </div>
            <p className="ItemCard__description">{name}</p>
            <p className="ItemCard__price">{price}</p>
        </section>
    );
}

export default ItemCard;