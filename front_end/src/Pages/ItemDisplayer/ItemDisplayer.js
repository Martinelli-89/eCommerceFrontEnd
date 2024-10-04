import './ItemDisplayer.scss';
import ItemCard from '../../Components/ItemCard/ItemCard';

const ItemDisplayer = ({windowWidth}) => {

    const calculateCardSize = (width) => {

        return Math.floor((width-(width*0.05))/2.1);


    }

    return (
        <div className="ItemDisplayer">
            <ItemCard cardSize={calculateCardSize(windowWidth)} />
            <ItemCard cardSize={calculateCardSize(windowWidth)} />
            <ItemCard cardSize={calculateCardSize(windowWidth)} />
            <ItemCard cardSize={calculateCardSize(windowWidth)} />
            <ItemCard cardSize={calculateCardSize(windowWidth)} />
            <ItemCard cardSize={calculateCardSize(windowWidth)} />
            <ItemCard cardSize={calculateCardSize(windowWidth)} />
            <ItemCard cardSize={calculateCardSize(windowWidth)} />
            <ItemCard cardSize={calculateCardSize(windowWidth)} />
        </div>
    );
}

export default ItemDisplayer;