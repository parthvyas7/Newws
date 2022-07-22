import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<News country="in" pageSize={9} category="general" key="general"/>}></Route>
        <Route path="/business" element={<News country="in" pageSize={9} category="business" key="business"/>}></Route>
        <Route path="/entertainment" element={<News country="in" pageSize={9} category="entertainment" key="entertainment"/>}></Route>
        <Route path="/health" element={<News country="in" pageSize={9} category="health" key="health"/>}></Route>
        <Route path="/science" element={<News country="in" pageSize={9} category="science" key="science"/>}></Route>
        <Route path="/sports" element={<News country="in" pageSize={9} category="sports" key="sports"/>}></Route>
        <Route path="/technology" element={<News country="in" pageSize={9} category="technology" key="technology"/>}></Route>
      </Routes>
    </BrowserRouter>
    )
  }
}