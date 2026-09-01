import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import LoadingBar  from 'react-top-loading-bar';

const  App =()=>{
  const apikey=process.env.REACT_APP_NEWS_API_KEY
  

const [progress, setProgress] = useState(0)

 
 
    return (
      <Router>
        <Navbar />
        <LoadingBar
        height={3}
        color='#f11946'
          progress={progress}
          
          />

        <Routes>
          <Route
            path="/"
            element={<News setProgress={setProgress} apikey={apikey} pageSize={5} country="us" category="general" />}
          />

          <Route
            path="/business"
            element={<News setProgress={setProgress} apikey={apikey} pageSize={5} country="us" category="business" />}
          />

          <Route
            path="/entertainment"
            element={<News setProgress={setProgress} apikey={apikey} pageSize={5} country="us" category="entertainment" />}
          />

          <Route
            path="/general"
            element={<News setProgress={setProgress} apikey={apikey} pageSize={5} country="us" category="general" />}
          />

          <Route
            path="/health"
            element={<News setProgress={setProgress} apikey={apikey} pageSize={5} country="us" category="health" />}
          />

          <Route
            path="/science"
            element={<News setProgress={setProgress} apikey={apikey} pageSize={5} country="us" category="science" />}
          />

          <Route
            path="/sports"
            element={<News setProgress={setProgress} apikey={apikey} pageSize={5} country="us" category="sports" />}
          />

          <Route
            path="/technology"
            element={<News setProgress={setProgress} apikey={apikey} pageSize={5} country="us" category="technology" />}
          />
        </Routes>

         

        

      </Router>
    );
  
}

export default App;