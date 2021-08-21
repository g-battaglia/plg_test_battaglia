import { Navbar, Slider, Cards, Banners, Footer, Cookies } from "./sections";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookSquare,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

library.add(faBars, faTimes, faFacebookSquare, faInstagram, faLinkedinIn);

function App() {
  return (
    <div className="App">
      <Navbar />
      <Slider />
      <Cards />
      <Banners />
      <Footer />
      <Cookies />
    </div>
  );
}

export default App;
