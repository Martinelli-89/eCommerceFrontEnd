import './Nav.scss';
import { Link } from "react-router-dom";
import menuIcon from "../../../src/Assets/Images/menuIcon.svg";
import searchIcon from "../../../src/Assets/Images/searchIcon.svg";
import basketIcon from "../../../src/Assets/Images/bagIcon.svg";
import userIcon from "../../../src/Assets/Images/userIcon.svg";

const Nav = () => {

    return (
        <section className='header'>
            <img className='header__menu' src={menuIcon} alt="menu icon" />
            <img className='header__search' src={searchIcon} alt="search icon" />
            <Link to="*" style={{ textDecoration: 'none',  color:'inherit' }}>
                <h2 className='header__logo brand'>EW</h2>
            </Link>
            <img className='header__user' src={userIcon} alt="user icon" />
            <img className='header__basket' src={basketIcon} alt="basket icon" />
        </section>
    );
}

export default Nav;