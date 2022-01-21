import { BrowserRouter, Route, Switch } from "react-router-dom";
import Booknow from "./components/booknow/Booknow";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Inspiration from "./components/inspiration/Inspiration";
import Landing from "./components/landing/landing";
import Ngo from "./components/ngopage/ngo";
import Pickup from "./components/Pickup/Pickup";

import "./resources/App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/pickup" component={Pickup} />
        <Route exact path="/book" component={Booknow} />
        <Route exact path="/inspiration" component={Inspiration} />
        <Route exact path="/ngo" component={Ngo} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
