import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import LandingPage from './containers/LandingPage/LandingPage';
import Home from './containers/Home/Home';
import About from './containers/About/About';
import Meals from './containers/Meals/Meals';
import Workouts from './containers/Workouts/Workouts';
import Blogs from './containers/Blogs/Blogs';
import NotFound from './containers/NotFound/NotFound';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import MealPage from './containers/MealPage/MealPage';

const DefaultRoutes = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/meals" component={Meals} />
        <Route path="/workouts" component={Workouts} />
        <Route path="/about" component={About} />
        <Route path="/blogs" component={Blogs} />
        <Route path="/meal/:id" component={MealPage} />
        <Redirect to="/notfound" />
      </Switch>
      <Footer />
    </>
  );
};

function App() {
  return (
    <>
      <div className="">
        <Router>
          <Switch>
            <Route component={NotFound} path="/notfound" />
            <Route exact path="/" component={LandingPage} />
            <Route component={DefaultRoutes} />
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
