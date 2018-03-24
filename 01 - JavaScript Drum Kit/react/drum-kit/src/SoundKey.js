import React, { Component } from 'react';

class SoundKey extends Component {
    onTransitionEnd = (e) => this.props.onTransitionEnd(e);
    render() {
        const soundPath = `./sounds/${this.props.sound}`;
        return (
            <div className={"key" + (this.props.isPlaying ? ' playing' : '')} onTransitionEnd={this.onTransitionEnd} onClick={()=>this.props.onClick()}>
                <kbd>{String.fromCharCode(this.props.code)}</kbd>
                <span className="sound">{this.props.sound}</span>
            </div>
        );
    }

}

export default SoundKey;