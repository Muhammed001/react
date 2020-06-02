import React from 'react';
import './App.css';
import AntOne from './components/AntOne';
import Datepicker from './components/datepicker/Datepicker'
import SimpleDatePicker from './components/datepicker/SimpleDatePicker'
import DntMobileDate from './components/datepicker/antMobileDate'
import ImagePickerExample from './components/ImagePickerExample/ImagePickerExample '
import SelectAnt from './components/SelectAnt'
import SelectInput from './components/selectInput/SelectInput'
import ImagNv from './components/imgUtils/img';
import DivCon from './components/divTop/index'

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
      {/* <SelectInput></SelectInput> */}
      {/* <ImagNv></ImagNv> */}
      <DivCon></DivCon>
    </div>
  );
}

export default App;
