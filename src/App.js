import "./App.scss";
import Header from "./containers/Header/Header";
import Home from "./containers/Home/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SingleMoviePage from "./containers/SingleMoviePage/SingleMoviePage";

const App = () => {
  return (
    <Router>
      <Switch>
        <div className="app">
          <Route exact path="/">
            <Header />
            <Home />
          </Route>
          <Route path="/movie/:page/:genre/:id" component={SingleMoviePage} />
        </div>
      </Switch>
    </Router>
  );
};

export default App;
