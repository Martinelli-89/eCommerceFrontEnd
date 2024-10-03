import './App.scss';
import { Route, Routes } from "react-router-dom";
import LandingMain from './Pages/LandingMain/LandingMain';
import Nav from "../src/Components/Nav/Nav";
import Footer from "../src/Components/Footer/Footer";

const App = () => {
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
              <h1>FOR HIM</h1>
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
