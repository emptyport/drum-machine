import React, { Component } from 'react';
import './App.css';
import DrumPad from './DrumPad';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayMsg: "Let's jam!"
    };

    this.updateDisplayMsg = this.updateDisplayMsg.bind(this);
  }

  updateDisplayMsg(msg) {
    this.setState({
      displayMsg: msg
    });
  }

  render() {

    return (
      <div>
        <div id="display">
          {this.state.displayMsg}
        </div>

        <div id="pad">
          <DrumPad title="Heater-1" keyMap="Q" keyCode="81" audioURL="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" updateMsgCallback={this.updateDisplayMsg}/>
          
          <DrumPad title="Heater-2" keyMap="W" keyCode="87" audioURL="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" updateMsgCallback={this.updateDisplayMsg}/>
          
          <DrumPad title="Heater-3" keyMap="E" keyCode="69" audioURL="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" updateMsgCallback={this.updateDisplayMsg}/>
          
          <DrumPad title="Heater-4" keyMap="A" keyCode="65" audioURL="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" updateMsgCallback={this.updateDisplayMsg}/>
          
          <DrumPad title="Clap" keyMap="S" keyCode="83" audioURL="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" updateMsgCallback={this.updateDisplayMsg}/>
          
          <DrumPad title="Open-HH" keyMap="D" keyCode="68" audioURL="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" updateMsgCallback={this.updateDisplayMsg}/>
          
          <DrumPad title="Kick-n'-Hat" keyMap="Z" keyCode="90" audioURL="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" updateMsgCallback={this.updateDisplayMsg}/>
          
          <DrumPad title="Kick" keyMap="X" keyCode="88" audioURL="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" updateMsgCallback={this.updateDisplayMsg}/>
          
          <DrumPad title="Closed-HH" keyMap="C" keyCode="67" audioURL="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" updateMsgCallback={this.updateDisplayMsg}/>
        </div>

      </div>

    );
  }
}

export default App;
