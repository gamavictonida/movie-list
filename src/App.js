import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from '../src/pages/home/Home'

function App() {
  return (
      <Router>
          <Switch>
              <Route path="/" component={Home}/>
          </Switch>
      </Router>
  );
}

export default App;
