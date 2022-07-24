import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  state = {
    progress:0
  }

  setProgress = (progress) => {
    this.setState({progress: progress})
  }
  render() {
    return (
      <BrowserRouter>
      <Navbar/>
      <LoadingBar
        color='#f11946'
        progress={this.state.progress}
      />
      <Routes>
        <Route path="/" element={<News setProgress={this.setProgress} country="in" pageSize={9} category="general" key="general"/>}></Route>
        <Route path="/business" element={<News setProgress={this.setProgress} country="in" pageSize={9} category="business" key="business"/>}></Route>
        <Route path="/entertainment" element={<News setProgress={this.setProgress} country="in" pageSize={9} category="entertainment" key="entertainment"/>}></Route>
        <Route path="/health" element={<News setProgress={this.setProgress} country="in" pageSize={9} category="health" key="health"/>}></Route>
        <Route path="/science" element={<News setProgress={this.setProgress} country="in" pageSize={9} category="science" key="science"/>}></Route>
        <Route path="/sports" element={<News setProgress={this.setProgress} country="in" pageSize={9} category="sports" key="sports"/>}></Route>
        <Route path="/technology" element={<News setProgress={this.setProgress} country="in" pageSize={9} category="technology" key="technology"/>}></Route>
      </Routes>
    </BrowserRouter>
    )
  }
}