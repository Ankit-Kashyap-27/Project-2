import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import React, { Component } from 'react'
import News from './components/News'
import LoadingBar from "react-top-loading-bar";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App  =()=> {

  let apikey = import.meta.env.VITE_API_KEY;

  const [progressbar, setprogressbar] = useState(0);
  
  


 const setprogress = (progress) => {
    setprogressbar(progress)
    
  }


    return (
      <div className=''>
        <Router>
          <Navbar />
          <LoadingBar
            color="#f11946"
            progress={progressbar}
        
          />
          <Routes>
            <Route path="/" element={<News apikey={apikey} key='general' setprogress={setprogress} pageSize={15} country="us" category='general' />} />

            <Route path="/business" element={<News apikey={apikey} key='business' setprogress={setprogress} pageSize={15} country="us" category='business' />} />

            <Route path="/entertainment" element={<News apikey={apikey} key='entertainment' setprogress={setprogress} pageSize={15} country="us" category='entertainment' />} />

            <Route path="/health" element={<News apikey={apikey} key='health' setprogress={setprogress} pageSize={15} country="us" category='health' />} />

            <Route path="/science" element={<News apikey={apikey} key='science' setprogress={setprogress} pageSize={15} country="us" category='science' />} />

            <Route path="/sports" element={<News apikey={apikey} key='sports' setprogress={setprogress} pageSize={15} country="us" category='sports' />} />

            <Route path="/technology" element={<News apikey={apikey} key='technology' setprogress={setprogress} pageSize={15} country="us" category='technology' />} />



          </Routes>

        </Router>


      </div>
    )
  }
export default App
