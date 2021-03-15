import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Report from './components/Report';
import Scan from './components/Scan';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Home from './components/Home';
import About from './components/About';
import auth from './components/auth';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App(props) {
  return (
    <Router>
    <div className="App">
    <button
        onClick = {() => { 
          auth.logout(() => {
            props.history.push("/");
          })
        }}>
          Logout
      </button>
      <Switch>
      <Route path="/" exact component={ Home }></Route>
        <Route path="/scan" component={ Scan }></Route>
        <Route path="/report" component={ Report }></Route>
        <Route path="/login" component={ Login }></Route>
        <Route path="/signup" component={ SignUp }></Route>
        <Route path="/about" component={ About }></Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
