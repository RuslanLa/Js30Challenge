import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PageTitle from './PageTitle';
import Controls from './Controls';
import ScaledImage from './ScaledImage';
class App extends Component {
  constructor() {
    super();
    this.state = {
      imgStyle: {
        imgBorder: 10,
        imgBorderColor: '#ffc600',
        imgFilterBlur: 0
      }
    }
  }

  styleOnChange(style){
    this.setState({
      imgStyle: style
    });
  }
  render() {
    return (
      <React.Fragment>
        <PageTitle />
        <Controls styleOnChange={(style)=>this.styleOnChange(style)} values={this.state.imgStyle}/>
        <ScaledImage style={this.state.imgStyle}/>
      </React.Fragment>
    );
  }
}

export default App;
