import './App.css';
import Home from './Components/Home';
import CreateAppointment from './Components/CreateAppointment';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Home />
      <Switch>
        <Route path="/year/:year/month/:month">
          <CreateAppointment />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
