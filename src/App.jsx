import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import React, { Component } from 'react'
import News from './components/News'
import LoadingBar from "react-top-loading-bar";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default class App extends Component {
  apikey = import.meta.env.VITE_API_KEY;

  
  state = {
    progress: 0
  }
  setprogress = (progress) => {
    this.setState({ progress: progress })
    
  }

  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
            color="#f11946"
            progress={this.state.progress}
        
          />
          <Routes>
            <Route path="/" element={<News apikey={this.apikey} key='general' setprogress={this.setprogress} pageSize={15} country="us" category='general' />} />

            <Route path="/business" element={<News apikey={this.apikey} key='business' setprogress={this.setprogress} pageSize={15} country="us" category='business' />} />

            <Route path="/entertainment" element={<News apikey={this.apikey} key='entertainment' setprogress={this.setprogress} pageSize={15} country="us" category='entertainment' />} />

            <Route path="/health" element={<News apikey={this.apikey} key='health' setprogress={this.setprogress} pageSize={15} country="us" category='health' />} />

            <Route path="/science" element={<News apikey={this.apikey} key='science' setprogress={this.setprogress} pageSize={15} country="us" category='science' />} />

            <Route path="/sports" element={<News apikey={this.apikey} key='sports' setprogress={this.setprogress} pageSize={15} country="us" category='sports' />} />

            <Route path="/technology" element={<News apikey={this.apikey} key='technology' setprogress={this.setprogress} pageSize={15} country="us" category='technology' />} />



          </Routes>

        </Router>


      </div>
    )
  }
}
