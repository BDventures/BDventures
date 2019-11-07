import React, {Component} from 'react';
import SmartComponent from "./SmartComponent";

class SmartComponentChild extends Component {
  constructor(props) {
    super(props)

    const {name, age} = this.props.userInfo

    this.state = {
      name: '',
      age: age,
      text: '',
      parentComponent: false
    }
  }

  addToNames(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  buttonClick() {
    this.setState({
      parentComponent: !this.state.parentComponent
    })
    this.props.useDataFromChild(this.state.text)
  }

  componentWillUpdate(newProps, newState) {
    console.log(newProps, 'new props') //new props that will update
    console.log(newState, 'new state') //new state that will update
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(this.props, 'this is this.props')
    console.log(prevProps, 'prev props') //state from parent component
    console.log(prevState, 'prev state') //previous state before when im typing
  }

  render() {
    // console.log(this.props.userInfo, 'what is this')
    const {name, age} =this.state
    return(
      <div>
        {this.state.parentComponent ? <SmartComponent/> : <div> 
          <ul>
          <li>
            {name}
          </li>
        </ul>

        {/* <input type="text" name="name"></input> */}
        <input type="text" name="name" onChange={(e) => {this.addToNames(e)}}></input>
        <button onClick={() => {this.buttonClick()}}></button></div>}
      </div>
    )
  }
}

export default SmartComponentChild;