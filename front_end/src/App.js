import './App.scss';
import { Route, Routes } from "react-router-dom";
import LandingMain from './Pages/LandingMain/LandingMain';
import Nav from "../src/Components/Nav/Nav";

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
              Footer here
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
              Footer here
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
              Footer here
            </section>
          </div>
        }>
      </Route>
    </Routes>
  );
}

export default App;
