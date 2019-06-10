import React, { Component } from 'react';

class DrumPad extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <div className="drum-pad" id={this.props.title}>
        {this.props.keyMap}
        <audio className="clip" id={this.props.keyMap}>
          <source src={this.props.audioURL} />
        </audio>
      </div>
    )
  }
}

export default DrumPad;