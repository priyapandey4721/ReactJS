import React, { Component } from "react";

export class Welcome extends Component {
  render() {
    const {name,heroname} =this.props
    return (
      <div>
        <h1>Welcome {name} a.k.a {heroname} in Class Component</h1>
      </div>
    );
  }
}

export default Welcome;
