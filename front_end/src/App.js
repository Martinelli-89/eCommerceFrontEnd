import './App.scss';
import imgCard from "../src/assets/manCardBackground.jpg";
import LandingPageCard from "../Components/LandingPageCard/LandingPageCard";

const App = () => {
  return (
    <div className="App">
      <div className="nav">
        Nav goes here, logo on the left, basket on the right
      </div>
      <div className="main">
        <LandingPageCard text="For Him" image={imgCard}/>
      </div>
      <div className="footer">
        Footer with company info
      </div>
    </div>
  );
}

export default App;
