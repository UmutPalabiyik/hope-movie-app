import "./App.scss";
import Header from "./containers/Header/Header";
import Home from "./containers/Home/Home";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import SingleMoviePage from "./containers/SingleMoviePage/SingleMoviePage";


const App = () => {

  return (
    <div className="app">
      <Router>
        <Switch>
          <Redirect exact from="/" to="/page/1" />
          <Route exact path={["/", "/page/:number"]}>
            <Header />
            <Home />
          </Route>
          <Route path="/movie/:page/:genre/:id" component={SingleMoviePage} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
