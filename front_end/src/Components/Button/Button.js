import './Button.scss';

const Button = ({text, handleClick}) => {

    return (
        <div className="Button" onClick={handleClick? handleClick : undefined}>
            {text}
        </div>
    );
}

export default Button;