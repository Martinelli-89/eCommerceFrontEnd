import './LandingPageCard.scss';

const LandingPageCard = (props) => {;

  return (
    <div className="LandingPageCard">
      <img className={ props.rotate? "CardImage": "CardImageHor"}  src={props.image} />
      <div className="button">
          {props.buttonText}
      </div>
    </div>
  );
  
};

export default LandingPageCard;