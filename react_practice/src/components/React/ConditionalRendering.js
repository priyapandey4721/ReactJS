import React, { Component } from "react";

class ConditionalRendering extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }
  render() {
    return this.state.isLoggedIn && <div>Welcome World</div>


    this.state.isLoggedIn ? <div>Welcome Wrold</div> : <div>Welcome Guest</div>;

    let message;
    if (this.state.isLoggedIn) {
      message = <div>Welcome World</div>;
    } else {
      message = <div>Welcome Guest</div>;
    }
    return <div>{message}</div>;

    if (this.state.isLoggedIn) {
      return <div>Welcome World</div>;
    } else {
      return <div>Welcome Guest</div>;
    }
    // return (
    //   <div>
    //       <div>Welcome World</div>
    //       <div>Welcome Guest</div>
    //   </div>
    // )
  }
}

export default ConditionalRendering;
