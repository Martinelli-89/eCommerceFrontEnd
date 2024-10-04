import './Footer.scss';
import instagram from "../../../src/Assets/Images/instagram.png";
import facebook from "../../../src/Assets/Images/facebook.png";

const Footer= () => {

    return (
        <div className='footerMenu'>
            <p className='text'>About us</p>
            <div className='footerMenu__socials'>
                <a href='http://www.instagram.com' target="_blank">
                    <img className='footerMenu__instagram' src={instagram} alt="instagram"  />
                </a>
                <a href="http://www.facebook.com" target="_blank">
                    <img className='footerMenu__facebook' src={facebook} alt="facebook" />
                </a>
            </div>
            <p className='text'>Help</p>
        </div>
    );
}

export default Footer;