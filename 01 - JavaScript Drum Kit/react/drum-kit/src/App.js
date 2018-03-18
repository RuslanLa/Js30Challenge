import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import keyInfos from './KeyInformations';
import SoundKey from './SoundKey';
import boomSound from './sounds/boom.wav';;

class App extends Component {
  constructor() {
    super();
    let infos = Array.from(keyInfos.keys()).map(key=>[key, {
      sound: keyInfos.get(key),
      isPlaying: false
    }]);
    this.state = {
      keyInfos: new Map(infos)
    };
    this.audios = {};
   for(var k of this.state.keyInfos.keys()){
      const audioSrc = require(`./sounds/${this.state.keyInfos.get(k).sound}.wav`);
      this.audios[k]=new Audio(audioSrc);
    };
  }
  componentDidMount(){
    this.mainRef.focus();
  }
  play(e){
    if(!this.state.keyInfos.get(e.keyCode) || !this.audios[e.keyCode]||this.state.keyInfos.get(e.keyCode).isPlaying){
      return;
    }
    console.log(`play${e.keyCode}`);
    const newMap = new Map(this.state.keyInfos);    
    newMap.get(e.keyCode).isPlaying = true;    
    let newState = {
      ...this.state,
      keyInfos: newMap
    };
    this.setState(newState);
    const sound = this.audios[e.keyCode];
    sound.currentTime = 0;
    sound.play();
  }
  onTransitionEnd(key, event){
    console.log('end'+event.propertyName);    
    if(!this.state.keyInfos.get(key) || !this.state.keyInfos.get(key).isPlaying){
      return;
    }
    console.log(`end${key}`);
    let newState = {
      ...this.state
    };
    newState.keyInfos.get(key).isPlaying = false;
    this.setState(newState);
  }
  render() {
    const keys = Array.from(this.state.keyInfos.keys()).map((key) => {
      return (<SoundKey onTransitionEnd={(e)=>this.onTransitionEnd(key,e)} key={key} code={key} sound={this.state.keyInfos.get(key).sound} isPlaying={this.state.keyInfos.get(key).isPlaying} />);
    });
    return (<main tabIndex="1" onKeyDown={(e)=>this.play(e)} ref={(ref)=>this.mainRef = ref}>
      <div className="keys">
        {keys}
      </div>
    </main>);
  }
}

export default App;
