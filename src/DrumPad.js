import React, { Component } from 'react';

class DrumPad extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };

    this.playAudio = this.playAudio.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.addActiveClass = this.addActiveClass.bind(this);
    this.removeActiveClass = this.removeActiveClass.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }

  addActiveClass() {
    document.getElementById(this.props.title).classList.add('active');
  }

  removeActiveClass() {
    document.getElementById(this.props.title).classList.remove('active');
  }

  handleKeyPress(e) {
    if(e.keyCode === parseInt(this.props.keyCode)) {
      this.playAudio();
      this.addActiveClass();
      setTimeout(() => this.removeActiveClass(), 200);
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
        <div className="pad-label">
          {this.props.keyMap}
        </div>
        <audio className="clip" id={this.props.keyMap} src={this.props.audioURL} />
      </div>
    )
  }
}

export default DrumPad;