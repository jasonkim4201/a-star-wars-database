import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Characters from "./pages/Characters";
import Planets from "./pages/Planets";
import Starships from "./pages/Starships";
import Vehicles from "./pages/Vehicles";
import Saved from './pages/Saved';

const App = () => {
      return (
      <Router>
        <div>
          <Header />
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/characters" component={Characters} />
            <Route exact path="/planets" component={Planets} />
            <Route exact path="/starships" component={Starships} />
            <Route exact path="/vehicles" component={Vehicles} />
            <Route exact path="/saved" component={Saved}/>
            <Route render={() => <h1 className=" display-1 text-center font-weight-bold">404 NOT FOUND :(</h1>} />
          </Switch>
        </div>
      </Router>
    );
}

export default App;
