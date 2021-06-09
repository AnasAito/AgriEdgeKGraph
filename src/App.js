import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Screens/Home";
import Explorer from "./Screens/Explorer";
function App() {
  return (
    <Router>
      {/*   <Link to="/">Home</Link>*/}

      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/explorer">
          <Explorer />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
