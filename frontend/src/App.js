import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Search from './components/SearchedPapers';
import LinearAlgebraCompute from './components/LinearAlgebraCompute';
import LinearAlgebraChat from './components/LinearAlgebraChat';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/Search' element={<Search/>}/>
        <Route path='/Compute' element={<LinearAlgebraCompute/>}/>
        <Route path='/LinearAlgebraChat' element={<LinearAlgebraChat/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App;
