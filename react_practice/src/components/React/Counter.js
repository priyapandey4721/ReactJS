import React, { Component } from "react";

export class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  increment() {
    // this.setState(
    //   {
    //     count: this.state.count + 1,
    //   },
    //   () => {
    //     console.log("Callback Vlaue", this.state.count);
    //   }
    // );
    this.setState(prevState => ({
        count : prevState.count + 1
    }))
    console.log(this.state.count)
  }
  incrementFive(){
      this.increment()
      this.increment()
      this.increment()
      this.increment()
      this.increment()
  }
  render() {
    return (
      <div>
        Count - {this.state.count}
        <button onClick={() => this.incrementFive()}>Increment</button>
      </div>
    );
  }
}

export default Counter;
