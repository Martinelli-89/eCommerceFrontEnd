import './App.scss';
import { Route, Routes } from "react-router-dom";
import {React, useState, useEffect} from "react";
import LandingMain from './Pages/LandingMain/LandingMain';
import Nav from "../src/Components/Nav/Nav";
import Footer from "../src/Components/Footer/Footer";
import ItemDisplayer from './Pages/ItemDisplayer/ItemDisplayer';

const App = () => {

  const getWindowSize = () => {
    const {innerWidth, innerHeight} = window;
    return {innerWidth, innerHeight};
  }

  const [windowSize, setWindowSize] = useState(getWindowSize());
  
  useEffect(()=> {
      
    const handleWindowResize = () => {
  
      setWindowSize(getWindowSize());
  
    }
  
    window.addEventListener('resize', handleWindowResize);
  
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    }
  
  },[])

  return (
    <Routes>
      <Route
        path="*"
        element = {
          <div className="App">
            <Nav />
            <section className='main'>
              <LandingMain />
            </section>
            <section className='footer'>
              <Footer />
            </section>
          </div>
        }>
      </Route>
      <Route
        path="*/forHer"
        element = {
          <div className="App">
            <Nav />
            <section className='main'>
              <h1>FOR HER</h1>
            </section>
            <section className='footer'>
              <Footer />
            </section>
          </div>
        }>
      </Route>
      <Route
        path="*/forHim"
        element = {
          <div className="App">
            <Nav />
            <section className='main'>
              <ItemDisplayer windowWidth={windowSize.innerWidth} />
            </section>
            <section className='footer'>
              <Footer />
            </section>
          </div>
        }>
      </Route>
    </Routes>
  );
}

export default App;
