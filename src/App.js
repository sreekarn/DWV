
import './App.css';
import React from 'react';
import DCMElement from './components/DCMElement';

function App() {

    // load dicom data
  return (
    <div className="App">
      
      <DCMElement 
        urls={["https://raw.githubusercontent.com/ivmartel/dwv/master/tests/data/bbmri-53323851.dcm"]}
        id = {"dwv1"}
      />
      <DCMElement 
        urls={["https://raw.githubusercontent.com/ivmartel/dwv/master/tests/data/bbmri-53323851.dcm"]}
        id = {"dwv2"}
      />
      <DCMElement 
        urls={["https://raw.githubusercontent.com/ivmartel/dwv/master/tests/data/bbmri-53323851.dcm"]}
        id = {"dwv3"}
      />

      <DCMElement 
        urls={["https://raw.githubusercontent.com/ivmartel/dwv/master/tests/data/bbmri-53323851.dcm"]}
        id = {"dwv3"}
      />
    </div>
  );
}



export default App;
