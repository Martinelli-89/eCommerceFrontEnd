import './LandingPageCard.scss';

const LandingPageCard = (buttonText, image) => {;

  return (
    <div 
        className="LandingPageCard" 
        style={{ backgroundImage: `url(${image})` }}>
        <button>
            {buttonText}
        </button>
    </div>
  );
  
};

export default LandingPageCard;