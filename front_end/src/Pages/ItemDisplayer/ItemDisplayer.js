import { useState } from 'react';
import './ItemDisplayer.scss';
import data from "../../Assets/Data/Data.js";
import ItemCard from '../../Components/ItemCard/ItemCard';
import ClothesSectionsScroller from '../../Components/ClothesSectionsScroller/ClothesSectionsScroller';
import Modal from '../../Components/Modal/Modal.js';

const ItemDisplayer = ({windowWidth}) => {

    const [sectionToDisplay, setSectionToDisplay] = useState("new");
    const [itemToView, setItemToView] = useState(undefined);
    let cards = [];

    const calculateCardSize = (width) => {
        return Math.floor((width-(width*0.05))/2.1);
    };

    const handleSectionToDisplay = e => {
        e.preventDefault();
        setSectionToDisplay(e.target.textContent.toLowerCase());
    }

    const handleCloseCard = () => {
        console.log("chiudi");
        setItemToView(undefined);
        console.log(itemToView);
    }

    if(sectionToDisplay == "new") {
        cards = data.map(item => (
            item.new ? <ItemCard 
                key={item.ID} 
                cardSize={calculateCardSize(windowWidth)} 
                picture={item.imageLink} 
                name={item.name}
                price={item.price}
                itemData={item}
                description={item.description}
                handleViewItem={setItemToView}/> : <></>
          ));
    } else {
        cards = data.map(item => (
            item.section == sectionToDisplay ? <ItemCard 
                key={item.ID} 
                cardSize={calculateCardSize(windowWidth)} 
                picture={item.imageLink} 
                name={item.name}
                price={item.price}
                itemData={item}
                description={item.description}
                handleViewItem={setItemToView} />: <></>
          ));
    }


    const sections = ["NEW"]; 
    data.forEach(item => {
        if(!sections.includes(item.section.toUpperCase())) {
            sections.push(item.section.toUpperCase());
        }
    }) 
      

    return (
        <div className="ItemDisplayer">
            <div className="ItemDisplayer__cards">
                {cards}
            </div>
            <div className="ItemDisplayer__sections" >
                <ClothesSectionsScroller clothesSections={sections} handleClick={handleSectionToDisplay} />
            </div>
            {itemToView? <Modal itemData={itemToView} handleCloseCard={handleCloseCard}/> : <></>}
        </div>

    );
}

export default ItemDisplayer;