import React from 'react';
import './App.css';
import DrumPad from './DrumPad';

function App() {
  return (
    <div>
      <div id="display">
      </div>

      <div id="pad">
        <DrumPad title="bass1" keyMap="Q" audioURL="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"/>
        
        <DrumPad title="bass2" keyMap="W" audioURL="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"/>
        
        <DrumPad title="bass3" keyMap="E" audioURL="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"/>
        
        <DrumPad title="bass4" keyMap="A" audioURL="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"/>
        
        <DrumPad title="bass5" keyMap="S" audioURL="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"/>
        
        <DrumPad title="bass6" keyMap="D" audioURL="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"/>
        
        <DrumPad title="bass7" keyMap="Z" audioURL="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"/>
        
        <DrumPad title="bass8" keyMap="X" audioURL="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"/>
        
        <DrumPad title="bass9" keyMap="C" audioURL="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"/>
      </div>

    </div>

  );
}

export default App;
