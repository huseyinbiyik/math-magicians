import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import  Home  from './components/Home'
import Calculator from './components/Calculator';
import Quote from './components/Quote';
import Header from './components/Header';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
      <Header/>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/quote" element={<Quote />} />
      </Routes>
      </>
    );
  }
}


export default App;
