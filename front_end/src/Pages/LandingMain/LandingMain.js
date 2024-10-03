import "./LandingMain.scss";
import { Link } from "react-router-dom";
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
                    <Link to="*/forHer" style={{ textDecoration: 'none', color:'inherit' }}>
                        <Button text="FOR HER"/>
                    </Link>
                </div>
                <div className="herButton titles">
                    <Link to="*/forHim" style={{ textDecoration: 'none',  color:'inherit' }}>
                        <Button text="FOR HIM"/>
                    </Link>
                </div>
            </div>
        </>
    );

}

export default LandingMain;