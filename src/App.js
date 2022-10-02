import React from 'react';
import './App.css';
import Slider from './sliderComponent/Slider';
import Navbar from './Navbar/Navbar';
import Covid from './covidComponent/Covid';

function App() {
  return (
    <div >
      <Navbar/>
      <Slider/>
      <Covid/>
     
    </div>
  );
}

export default App;
