import React from 'react';
import './App.css';
import AntOne from './components/AntOne';
import Datepicker from './components/datepicker/Datepicker'
import SimpleDatePicker from './components/datepicker/SimpleDatePicker'

function App () {
  return (
    <div className="App">
      <SimpleDatePicker></SimpleDatePicker>
    </div>
  );
}

export default App;
