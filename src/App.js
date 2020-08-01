import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './containers/LandingPage/LandingPage';
import Home from './containers/Home/Home';
import Meals from './containers/Meals/Meals';
import Workouts from './containers/Workouts/Workouts';
import About from './containers/About/About';
import Blogs from './containers/Blogs/Blogs';
function App() {

  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/home" component={Home} />
          <Route path="/meals" component={Meals} />
          <Route path="/workouts" component={Workouts} />
          <Route path="/about" component={About} />
          <Route path="/blogs" component={Blogs} />
        </Switch>
      </Router>
    </React.Fragment>
  );

}

export default App;
