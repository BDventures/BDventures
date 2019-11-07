import React, {Component} from 'react';
import SmartComponentChild from "./SmartComponentChild";

class SmartComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      age: undefined,
      address: '',
      city: '',
      state: '',
      zip: undefined,
      changePage: false,
      updatedDataFromChild: ''
    }
  }

  useDataFromChild = (data) => {
    //got this data from child component and can pass it to another child component
    console.log(data, 'what is this data')
    //setState to render, or i can pass it somewhere else without redux
    this.setState({
      updatedDataFromChild: data
    })
  }

  handleTextChange(e) {
    this.setState({
      [e.target.name] : e.target.value
    })
    e.preventDefault()
  }

  handleOnSubmitClick() {
    this.setState({
      changePage: true
    })
  }

  render() {
    return(
      <div className="user_information">
        {this.state.changePage ? <SmartComponentChild userInfo={this.state} useDataFromChild={this.useDataFromChild}/> : 

        <form onSubmit={() => {this.handleOnSubmitClick()}}>
          <label>
            Name: <input type="text" name="name" onChange={(e) => {this.handleTextChange(e)}}></input><br/>
            age: <input type="text" name="age" onChange={(e) => {this.handleTextChange(e)}}></input><br/>
            address: <input type="text" name="address" onChange={(e) => {this.handleTextChange(e)}}></input><br/>
            city: <input type="text" name="city" onChange={(e) => {this.handleTextChange(e)}}></input><br/>
            state: <input type="text" name="state" onChange={(e) => {this.handleTextChange(e)}}></input><br/>
            zip: <input type="text" name="zip" onChange={(e) => {this.handleTextChange(e)}}></input>
            <button type="button" onClick={() => {this.handleOnSubmitClick()}}>Submit</button>
          </label>
          <br/>
        </form>}
        {this.state.updatedDataFromChild}
      </div>
    )
  }
}

export default SmartComponent;