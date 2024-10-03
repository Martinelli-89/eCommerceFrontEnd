import './Footer.scss';
import instagram from "../../../src/Assets/Images/instagram.png";
import facebook from "../../../src/Assets/Images/facebook.png";

const Footer= () => {

    return (
        <div className='footerMenu'>
            <p className='text'>About us</p>
            <div className='footerMenu__socials'>
                <img className='footerMenu__instagram' src={instagram} alt="instagram" />
                <img className='footerMenu__facebook' src={facebook} alt="facebook" />
            </div>
            <p className='text'>Help</p>
        </div>
    );
}

export default Footer;