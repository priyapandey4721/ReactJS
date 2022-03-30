import React, { Component } from 'react'
import ComponentF from './ComponentF'
import UserContext from './UserContext'

class ComponentE extends Component {
  render() {
    return (
      <div>
          Component E context {this.context}
          <ComponentF/></div>
    )
  }
}
Component.contextType = UserContext
export default ComponentE