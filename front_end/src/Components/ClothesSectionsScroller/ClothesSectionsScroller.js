import './ClothesSectionsScroller.scss';
import Button from '../Button/Button.js';

const ClothesSectionsScroller = ({clothesSections}) => {

    return (
        <div className="ClothesSectionsScroller">
            {clothesSections.map(section => (
            <div className="section">
                <Button text={section} />
            </div>
    ))}
        </div>
    );
}

export default ClothesSectionsScroller;