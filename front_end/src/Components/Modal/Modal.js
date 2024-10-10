import SelectedItemCard from '../SelectedItemCard/SelectedItemCard';
import './Modal.scss';

const Modal = ({itemData, handleCloseCard}) => {

    return (
        <div className="Modal" >
            <div className='Modal__content'>
                <SelectedItemCard itemData={itemData} handleCloseCard={handleCloseCard}/>
            </div>
        </div>
    );
}

export default Modal;