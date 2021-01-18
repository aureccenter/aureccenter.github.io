import './App.css';
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import Home from './components/Home';
import Schedule from './components/Schedule';

function App() {
  return (
    <Router basename={"aureccenter.github.io"}>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/employee-schedule" component={Schedule}/>
      </Switch>
    </Router>
  );
}

export default App;
