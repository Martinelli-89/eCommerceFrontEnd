import './Button.scss';

const Button = ({text, handleClick, image}) => {

    return (
        <div className="Button" onClick={handleClick? handleClick : undefined}>
            {text? text : <img src={image} />}
        </div>
    );
}

export default Button;