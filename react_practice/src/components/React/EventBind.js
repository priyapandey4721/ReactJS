import React, { Component } from 'react'

export class EventBind extends Component {
    constructor(props){
        super(props)
        this.state={
            message:"Hello"
        }
        this.clickHandler=this.clickHandler.bind(this)
    }
    
    clickHandler(){
        this.setState({
            message:"Goodbye"
        })
    }
  render() {
    return (
      <div>
          {this.state.message}
          {/* <button onClick={this.clickHandler.bind(this)}>Click Bind</button> */}
          {/* <button onClick={() => this.clickHandler()}>Click Bind</button> */}
          <button onClick={this.clickHandler}>Click Bind</button>
      </div>
    )
  }
}

export default EventBind