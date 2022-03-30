import React, { Component} from 'react'
import Memo from './Memo'
import PureComp from './PureComp'
import RegularComponent from './RegularComponent'

class ParentComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name :"PRIYA"
      }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name:"PRIYA"
            })
        },2000)
    }
  render() {
      console.log('*****PARENT COMPONENT RENDER************');
    return (
      <div>Parent Component
          <Memo name={this.state.name}/>
          {/* <RegularComponent name={this.state.name}/>
          <PureComp name={this.state.name}/> */}
      </div>
    )
  }
}

export default ParentComponent