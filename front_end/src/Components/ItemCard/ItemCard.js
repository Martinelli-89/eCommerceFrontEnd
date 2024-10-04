import './ItemCard.scss';
import jumper from "../../Assets/Images/Jumper.png"
import basket from "../../Assets/Images/bagIcon.svg"

const ItemCard = ({cardSize}) => {

    const widthToPixel =  cardSize+"px";
    const heightToPixel = cardSize*1.2+"px";
    console.log(heightToPixel);

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
                <img className="item" src={jumper} alt="yelloish jumper" />
                <img className="addToBasket" src={basket} alt="add item to basket" style={shiftBasket}   />
            </div>
            <p className="ItemCard__description">Descrizione</p>
            <p className="ItemCard__price">10.7</p>
        </section>
    );
}

export default ItemCard;