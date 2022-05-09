import React, { useState } from 'react';
import ColorForm from './components/form';
import DisplayBox from './components/display';
    
    
function App() {
    const [boxes, setBoxes] = useState([]);

    const newBox = ( color ) => {
      setBoxes([...boxes, color]);
    }


    return (
        <>
          <ColorForm newBox={ newBox } />
          <DisplayBox boxes={ boxes } />
        </>
    );

}
    
export default App;