import React, { Component } from 'react';

class DrumPad extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };

    this.playAudio = this.playAudio.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress(e) {
    if(e.keyCode === parseInt(this.props.keyCode)) {
      this.playAudio();
    }
  }

  playAudio(e) {
    const audioElem = document.getElementById(this.props.keyMap);
    audioElem.currentTime = 0;
    audioElem.play();
    this.props.updateMsgCallback(this.props.title);
  }

  render() {
    return (
      <div className="drum-pad" id={this.props.title} onClick={this.playAudio}>
        {this.props.keyMap}
        <audio className="clip" id={this.props.keyMap} src={this.props.audioURL} />
      </div>
    )
  }
}

export default DrumPad;