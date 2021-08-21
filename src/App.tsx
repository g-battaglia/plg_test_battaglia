import "./App.css";
import { Navbar, Slider, Cards } from "./components";
import CookieConsent from "react-cookie-consent";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

library.add(faBars, faTimes);

function App() {
  return (
    <div className="App">
      <Navbar />
      <Slider />
      <Cards />
      <CookieConsent
        location="bottom"
        buttonText="OK"
        cookieName="myAwesomeCookieName2"
        style={{
          background: "#fff",
          color: "#000",
          fontSize: "12px",
          marginTop: "1px solid #4a4949",
          boxShadow: "5px 5px 10px 2px #333333",
        }}
        buttonStyle={{
          background: "#000",
          color: "#fff",
          fontSize: "14px",
          width: "6rem",
          fontWeight: "bold",
        }}
        expires={150}
      >
        Our website uses cookies to improve your experience. To find out more
        about the cookies we use please see our Cookies Policy.
      </CookieConsent>
    </div>
  );
}

export default App;
