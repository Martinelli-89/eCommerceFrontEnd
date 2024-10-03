import "./LandingMain.scss";
import background from "../../Assets/Images/mainPagePhoto.jpg";
import Button from "../../Components/Button/Button.js";


const LandingMain = () => {

    return (
        <>
            <h1 className="brand">EVERYWARE</h1>
            <img className='main__background' src={background} alt="background" />
            <h3 className="text">SINCE 2024</h3>
            <div className="main__clothesSections">
                <div className="himButton titles">
                    <Button text="FOR HER" handle="Her section"/>
                </div>
                <div className="herButton titles">
                    <Button text="FOR HIM" handle="His section"/>
                </div>
            </div>
        </>
    );

}

export default LandingMain;