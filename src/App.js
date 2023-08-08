import React from 'react';
import Home from './Pages/Home';
import Videos from './Pages/Videos';
import Navbar from './component/navbar/Navbar';
import Footer from './component/Footer/Footer';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/videos/:videoId' element={<Videos></Videos>}></Route>
      </Routes>
      <Footer></Footer>

    </Router>
  );
}

export default App;
