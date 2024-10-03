import './Button.scss';

const Button = ({text, handle}) => {

    const handleClick = () => {
        alert(handle);
    }

    return (
        <div 
            className="Button"
            onClick={handleClick}>
            {text}
        </div>
    );
}

export default Button;