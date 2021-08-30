import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from '../src/pages/home/Home'
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
      <Router>
          <Navbar/>
          <Switch>
              <Route path="/" component={Home}/>
          </Switch>
      </Router>
  );
}

export default App;
