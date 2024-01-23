import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import ReactGA from "react-ga"

const TRACKING_ID = "UA-250958744-1";
ReactGA.initialize(TRACKING_ID);

function App() {

  useEffect(() => {
    const script = document.createElement('script');
  
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
  
    document.body.appendChild(script);
  
    return () => {
      document.body.removeChild(script);
    }
  }, []);

  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);

  return (

      <Router>
        <Helmet>
        <link rel="canonical" href="/"/>
        <title>QuantCore Ventures</title>          
        <meta
          name="description"
          content="QuantCorr Ventures Empowering the tech stack"
          data-rh="true"
        />
        </Helmet>
      <Switch>
        <div className="App">
          <Route exact path='/'><Home/></Route>
        </div>
      </Switch> 
       
    </Router>
       
      
  );
}

export default App;
