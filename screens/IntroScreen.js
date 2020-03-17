import React, { Component } from "react";
import Intro from "../components/Intro";

export class IntroScreen extends Component {
  _onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    this.setState({ showRealApp: true });
  };

  render() {
    return <Intro onDone={this._onDone} />;
  }
}

export default IntroScreen;
