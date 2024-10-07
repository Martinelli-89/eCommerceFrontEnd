import './ItemDisplayer.scss';
import ItemCard from '../../Components/ItemCard/ItemCard';
import ClothesSectionsScroller from '../../Components/ClothesSectionsScroller/ClothesSectionsScroller';

const ItemDisplayer = ({windowWidth}) => {

    const calculateCardSize = (width) => {

        return Math.floor((width-(width*0.05))/2.1);


    }

    const mockSectionData = ["SHOES", "TROUSERS", "SHIRTS", "JACKETS","ACCESSORIES", "HOODIES"]

    return (
        <div className="ItemDisplayer">
            <div className="ItemDisplayer__cards">
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
            <div className="ItemDisplayer__sections" >
                <ClothesSectionsScroller clothesSections={mockSectionData} />
            </div>
        </div>

    );
}

export default ItemDisplayer;