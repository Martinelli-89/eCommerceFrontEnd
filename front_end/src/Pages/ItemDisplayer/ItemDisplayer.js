import './ItemDisplayer.scss';
import data from "../../Assets/Data/Data.js";
import ItemCard from '../../Components/ItemCard/ItemCard';
import ClothesSectionsScroller from '../../Components/ClothesSectionsScroller/ClothesSectionsScroller';

const ItemDisplayer = ({windowWidth}) => {

    const calculateCardSize = (width) => {
        return Math.floor((width-(width*0.05))/2.1);
    };

    const card = data.map(item => (
        item.new? <ItemCard 
            key={item.ID} 
            cardSize={calculateCardSize(windowWidth)} 
            picture={item.imageLink} 
            name={item.name}
            price={item.price}
            description={item.description}/> : <></>
      ));

    const sections = []; 
    data.forEach(item => {
        console.log(item.section);
        if(!sections.includes(item.section.toUpperCase())) {
            sections.push(item.section.toUpperCase());
        }
    }) 
      
    console.log(sections);

    return (
        <div className="ItemDisplayer">
            <div className="ItemDisplayer__cards">
                {card}
            </div>
            <div className="ItemDisplayer__sections" >
                <ClothesSectionsScroller clothesSections={sections} />
            </div>
        </div>

    );
}

export default ItemDisplayer;