import React, {Component} from 'react';
import SmartComponent from "./SmartComponent";

class SmartComponentChild extends Component {
  constructor(props) {
    super(props)

    const {name, age} = this.props.userInfo

    this.state = {
      name: name,
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
    console.log(newProps, 'new props')
    console.log(newState, 'new state')
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps, 'prev props')
    console.log(prevState, 'prev state')
  }

  render() {
    const {name, age} =this.state
    return(
      <div>
        {this.state.parentComponent ? <SmartComponent/> : <div> 
          <ul>
          <li>
            {name}
          </li>
        </ul>

        <input type="text" name="text" onChange={(e) => {this.addToNames(e)}}></input>
        <button onClick={() => {this.buttonClick()}}></button></div>}
      </div>
    )
  }
}

export default SmartComponentChild;