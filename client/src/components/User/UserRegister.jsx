import React, { Component } from "react";

class UserRegister extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      buttonEnabled: true
    }
  }

  enableButton() {
    this.setState({
      buttonEnabled: !this.state.buttonEnabled
    })
  }

  onSubmit() {
    this.props.changeStateInApp()
  }

  handleStateChange(e) {
    //this data gets passed to index.jsx file of User which handles all the changes made here in this form
    this.props.updateInfo(e)
  }

  componentWillUpdate(newProps, newState) {
    console.log(newProps, 'new props') //new props that's been passed so technically same as this.props from CDU?
    console.log(newState, 'new state') //new state on this component (UserRegister) which is this.state.counter
    //do not call this.setState = this will trigger an infinite loop
    //this.props, this.state is your old props and state:

      //componentWillUpdate(nextProps, nextState) {
      //if (nextState.open == true && this.state.open == false) {
      //this.props.onWillOpen();
      //}
  }

  // componentWillReceiveProps(newState, newProps)

  //similar to component did update?

  componentDidUpdate(prevProps, prevState) {
    const {counter} = this.state
    console.log(this.props.stateInfo.name, prevProps.stateInfo.name, 'props vs prevProps, you can see this if you cross out the SetState below')
    if(this.props.stateInfo !== prevProps.stateInfo) {
      this.setState({
        counter: this.state.counter+1
      })
    }
    if(this.props.stateInfo.userInfoFilled !== prevProps.stateInfo.userInfoFilled) this.enableButton()
    // console.log(prevProps, 'prev props') //previous props that's been passed before this.setState is ran on CDU
    console.log(prevState, 'prev state') //previous state of current component (UserRegister) of this.state.counter
  }

  render() {
    console.log(this.props, 'this is props')//first initial props passed from parent component
    //same thing:
    //on the label OnChange instead of just running it within another function 
    //I can just do onChange={(e) => this.props.updateInfo(e)}
    return (
      <div id="user_register">
          <form
            className="user_form" id="user_register_form"
          >
            <label className='user_register_form_label' onChange={(e) => {this.handleStateChange(e)}}>
              Name: <input type="text" name="name"/>
              Address: <input type="text" name="address" />
              State: <input type="text" name="state" />
              City: <input type="text" name="city" />
              Zip: <input type="text" name="zip" />
              Description: <textarea rows="4" cols="50" name="description" />
              Contact Email: <input type="text" name="contactEmail" />
              Counter: {this.state.counter}
            </label>
            <button disabled={this.state.buttonEnabled} type="submit" onClick={() => {this.onSubmit()}}>Submit</button>
          </form>
      </div>
    );
  }
}

export default UserRegister;
