import React from 'react';
import './App.css';
import AntOne from './components/AntOne';
import Datepicker from './components/datepicker/Datepicker'
import SimpleDatePicker from './components/datepicker/SimpleDatePicker'
import DntMobileDate from './components/datepicker/antMobileDate'
import ImagePickerExample from './components/ImagePickerExample/ImagePickerExample '
import SelectAnt from './components/SelectAnt'
import SelectInput from './components/selectInput/SelectInput'

function App () {

  return (
    <div className="App">
      {/* <SimpleDatePicker></SimpleDatePicker> */}
      {/* <Datepicker></Datepicker> */}
      {/* <DntMobileDate></DntMobileDate> */}
      {/* <div className = 'selectClass'>
        <SelectAnt></SelectAnt>
      </div>
      <div>
        <ImagePickerExample></ImagePickerExample>
      </div> */}
      <SelectInput></SelectInput>
    </div>
  );
}

export default App;
