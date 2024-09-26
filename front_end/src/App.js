import './App.scss';
import imgCardHim from "../src/assets/manCardNoBackground.png";
import imgCardHer from "../src/assets/womanCardNoBackground.png";
import LandingPageCard from "./Components/LandingPageCard/LandingPageCard.js";

const App = () => {
  return (
    <div className="App">
      <div className="nav">
        Nav goes here, logo on the left, basket on the right
      </div>
      <div className="main">
        <LandingPageCard buttonText="FOR HIM" image={imgCardHim} rotate={true}/>
        <LandingPageCard buttonText="FOR HER" image={imgCardHim} rotate={false}/>
      </div>
      <div className="footer">
        Footer with company info
      </div>
    </div>
  );
}

export default App;
