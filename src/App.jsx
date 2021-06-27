import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import { Redirect, Route, Switch } from 'react-router';
import Home from './components/LandingPage/Home'
import ToDoList from './components/ToDoList/ToDoList';
import Timer from './components/Timer/Timer'
import Bmi from './components/Bmi/Bmi';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Chart from './components/Chart/Chart';
import Extension from './components/Extension/Extension';


const App = () => {
  return (<>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/extension" component={Extension} />
      <Route exact path="/todolist" component={ToDoList} />
      <Route exact path="/timer" component={Timer} />
      <Route exact path="/bmi" component={Bmi} />
      <Route exact path="/chart" component={Chart} />
      <Redirect to='/' />
    </Switch>
    <Footer />
  </>)
}

export default App;