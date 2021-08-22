import {
  Banners,
  Cards,
  Contact,
  Cookies,
  Footer,
  Navbar,
  Slider,
  Tabs,
} from "./sections";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBars,
  faTimes,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookSquare,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

library.add(
  faBars,
  faChevronRight,
  faFacebookSquare,
  faInstagram,
  faLinkedinIn,
  faTimes
);

function App() {
  return (
    <div className="App">
      <Navbar />
      <Slider />
      <Cards />
      <Banners />
      <Tabs />
      <Contact />
      <Footer />
      <Cookies />
    </div>
  );
}

export default App;
