import Navigation from './components/Navigation';
import UpcomingEvents from './components/UpcomingEvents';
import SelectBooking from './components/SelectBooking';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import './App.css';
import HomePage from './components/HomePage';
import axios from 'axios'
import CalaenderH from './components/CalaenderH'
import EventInfo from './components/EventInfo';
import Footer from './components/Footer';
import SelectHourDay from './components/SelectHourDay';
<<<<<<< HEAD
import Aboutus from './components/AboutUs';

=======
import ShowOneEvent from './components/ShowOneEvent';
>>>>>>> 80a77f4599d9977e0c272f1b8cef2d3f3971afd0


import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Calender from './components/Calaender'
import SelectHour from './components/SelectHour';


function App() {


  const [event, setEvent] = useState([]);
  const [show, setShow] = useState('')
  useEffect(() => {
    // for demo purposes, hardcoded URL
    axios.get("http://localhost:3001/api/events")
      .then(res => {

        setEvent(prev => [...prev, res.data])
        //setEvent(res.data)
      })
  }, [])

  const handleSelectBooking = (e) => {
    console.log("select booking", e.target.value)
    setShow(prev => prev = e.target.value)
  }

  return (
    <div className="App">
<<<<<<< HEAD
      <Router>
{/* 
        
        <Navigation />
=======
      {/* <EventInfo /> */}
      <Router>  
        <ShowOneEvent />
        {/* <Navigation />
>>>>>>> 80a77f4599d9977e0c272f1b8cef2d3f3971afd0
        <HomePage />
        <UpcomingEvents /> */}
        {/* <SelectBooking onSelect={handleSelectBooking}/>
        { show === 'hour' ?   <CalaenderH event = {event[0]}/> :   <Calender event= {event[0]}/>}
        <SignIn />
        <SignUp />
        <Calender event={event[0]} />
        <CalaenderH event={event[0]} />
<<<<<<< HEAD
        <EventInfo /> */}
        <Navigation />
=======
        <EventInfo />  */}
  
>>>>>>> 80a77f4599d9977e0c272f1b8cef2d3f3971afd0
        <Switch>

          <Route path="/eventinfo" exact component={EventInfo} />
          <Route path="/calender" exact component={SelectBooking} />
          <Route path="/signin" exact component={SignIn}/>
          <Route path="/signup" exact component={SignUp}/>
<<<<<<< HEAD
          <Route path="/selectdays">
            <Calender  event={event[0]}/>
          </Route>
          <Route path="/selecthours">
            <CalaenderH  event={event[0]}/>
          </Route>
  
          <Route path="/aboutus">
            <Aboutus />
            <Footer />
          </Route>
=======
          <Route path="/showoneevent" exact component={ShowOneEvent}/>
>>>>>>> 80a77f4599d9977e0c272f1b8cef2d3f3971afd0
   
          <Route path="/">
            <HomePage />
            <UpcomingEvents event={event[0]}/>
            <Footer />
          </Route>

        </Switch>



      </Router>

    </div >
  );
}

export default App;