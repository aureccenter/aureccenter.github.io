import './App.css';
import {Route, BrowserRouter as Router} from "react-router-dom";
import Home from './components/Home';
import Schedule from './components/Schedule'

function App() {
  return (
    <Router basename={"aureccenter.github.io"}>
    <div className="App">
    </div>
    <Route exact path="/" component={Home}/>
    <Route exact path="/employee-schedule" component={Schedule}/>
    </Router>
  );
}

export default App;
