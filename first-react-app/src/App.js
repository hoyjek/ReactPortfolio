import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header.js";
import AboutPage from "./components/AboutPage/AboutPage";
import FoodMenu from "./components/FoodMenu/FoodMenu";
import Location from "./components/Location/Location";
import Contacts from "./components/Contacts/Contacts";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <AboutPage />
      <FoodMenu />
      <Location />
      <Contacts />
    </div>
  );
}

export default App;
