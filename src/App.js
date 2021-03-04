import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Report from './components/Report';
import Scan from './components/Scan';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Home from './components/Home';
import About from './components/About';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
      <Route path="/" exact component={ Home }></Route>
        <Route path="/scan" component={ Scan }></Route>
        <Route path="/report" component={ Report }></Route>
        <Route path="/login" component={ Login }></Route>
        <Route path="/signup" component={ SignUp }></Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
