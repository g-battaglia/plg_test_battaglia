import "./App.css";
import { Navbar, Slider, Cards } from "./components";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

library.add(faBars, faTimes);

function App() {
  return (
    <div className="App">
      <Navbar />
      <Slider />
      <Cards />
    </div>
  );
}

export default App;
