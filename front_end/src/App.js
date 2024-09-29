import './App.scss';
import menuIcon from "../src/Assets/Images/menuIcon.svg";
import searchIcon from "../src/Assets/Images/searchIcon.svg";
import basketIcon from "../src/Assets/Images/bagIcon.svg";
import userIcon from "../src/Assets/Images/userIcon.svg";
import background from "../src/Assets/Images/mainPagePhoto.jpg";

const App = () => {
  return (
    <div className="App">
      <section className='header'>
        <img className='header__menu' src={menuIcon} alt="menu icon" />
        <img className='header__search' src={searchIcon} alt="search icon" />
        <h2 className='header__logo'>EW</h2>
        <img className='header__user' src={userIcon} alt="user icon" />
        <img className='header__basket' src={basketIcon} alt="basket icon" />
      </section>
      <section className='main'>
        <p>EVERYWARE</p>
        <img className='main__background' src={background} alt="background photo" />
        <p>SINCE 2024</p>
      </section>
      <section className='footer'>
        Footer here
      </section>
    </div>
  );
}

export default App;
