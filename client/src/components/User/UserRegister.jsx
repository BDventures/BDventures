import React, { Component } from "react";

class UserRegister extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 1
    }
  }

  handleStateChange(e) {
    this.props.updateInfo(e)
  }

  componentWillUpdate(newProps, newState) {
    console.log(newProps, 'new props') //new props that will update
    console.log(newState, 'new state') //new state that will update
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log(this.props, 'this is this.props')
    if(this.props.stateInfo.name !== prevProps.stateInfo.name) {
      this.setState({
        counter: this.state.counter+1
      })
    }
    console.log(prevProps, 'prev props') //state from parent component
    console.log(prevState, 'prev state') //previous state before when im typing
  }

  render() {
    return (
      <div className="user_parent">
          <form
            className="user_register"
          >
            <label className='user_register_label' onChange={(e) => {this.handleStateChange(e)}}>
              Name: <input type="text" name="name"/>
              Address: <input type="text" name="address" />
              State: <input type="text" name="state" />
              City: <input type="text" name="city" />
              Zip: <input type="text" name="zip" />
              Description: <textarea rows="4" cols="50" name="description" />
              Contact Email: <input type="text" name="contactEmail" />
              Counter: {this.state.counter}
            </label>
          </form>
      </div>
    );
  }
}

export default UserRegister;
