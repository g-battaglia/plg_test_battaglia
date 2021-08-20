import "./App.css";
import { Navbar, Slider } from "./components";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

library.add(faBars, faTimes);

function App() {
  return (
    <div className="App">
      <Navbar />
      <Slider />
    </div>
  );
}

export default App;
