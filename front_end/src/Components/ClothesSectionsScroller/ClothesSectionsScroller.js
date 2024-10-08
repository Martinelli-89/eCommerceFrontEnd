import './ClothesSectionsScroller.scss';
import Button from '../Button/Button.js';

const ClothesSectionsScroller = ({clothesSections, handleClick}) => {

    return (
        <div className="ClothesSectionsScroller">
            {clothesSections.map(section => (
            <div className="section">
                <Button text={section} handleClick={handleClick} />
            </div>
    ))}
        </div>
    );
}

export default ClothesSectionsScroller;