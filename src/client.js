import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Calendar from './components/Calendar'
import MCalendar from './components/MCalendar'


const Client = ()=> (
    <Router>
        <div style={{ width : '100%', height : '100%'}}>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/calendar">Calendar</Link>
                </li>
                <li>
                    <Link to="/mobile">MCalendar</Link>
                </li>
            </ul>

            <hr />

            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/mobile" component={MCalendar} />
            <Route path="/calendar" component={Calendar} />
        </div>
    </Router>
)

const Home = () => (
    <div>
        <h2>Home</h2>
    </div>
);

const About = () => (
    <div>
        <h2>About</h2>
    </div>
);


export default Client