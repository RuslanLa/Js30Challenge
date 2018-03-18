import React, { Component } from 'react';

class SoundKey extends Component {
    onTransitionEnd = (e) => this.props.onTransitionEnd(e);
    render() {
        const soundPath = `./sounds/${this.props.sound}`;
        return (
            <div>
                <div className={"key"+(this.props.isPlaying?' playing':'')} onTransitionEnd={this.onTransitionEnd}>
                    <kbd>{String.fromCharCode(this.props.code)}</kbd>
                    <span className="sound">{this.props.sound}</span>
                </div>
                <audio data-key={this.props.code} src={soundPath}></audio>
            </div>
        );
    }

}

export default SoundKey;