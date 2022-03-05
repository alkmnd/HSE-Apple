import React from 'react';
import './App.css';
import  {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar.js';
import Messages from './pages/Messages';
import Profile from './pages/Profile';
import Activity from './pages/Activity';
import Assignments from './pages/Assignments';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/'element={<Profile />} />
          <Route path='/messages' element={<Messages />} />
          <Route path='/assignments' element={<Assignments />} />
          <Route path='/activity' element={<Activity />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;