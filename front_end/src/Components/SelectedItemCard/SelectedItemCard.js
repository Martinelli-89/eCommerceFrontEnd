import Button from '../Button/Button';
import './SelectedItemCard.scss';
import Close from "../../Assets/Images/Close.svg";

const SelectedItemCard = ({itemData, handleCloseCard}) => {

    return (
        <section className="SelectedItemCard">
            <div className="SelectedItemCard__closeCard">
                <Button handleClick={handleCloseCard} image={Close} />
            </div>
            <p className="SelectedItemCard__name">{itemData.name}</p> 
            <p className="SelectedItemCard__description">{itemData.description}</p>
            <img className="SelectedItemCard__pic" src={itemData.imageLink} /> 
            <div className="SelectedItemCard__sizes">
                SIZES: 
                {Object.keys(itemData.size).map(([key, value]) =>  { 
                    return (
                    <div className="sizesWrapper">
                        <Button text={key.toUpperCase()} /> 
                    </div> );
                } )}
            </div>
            <div className="SelectedItemCard__basket">
                <Button text={"ADD TO BASKET"} />
            </div>
        </section>
    );
}

export default SelectedItemCard;