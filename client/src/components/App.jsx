import React, {Component} from "react";
import User from './User/index';
import LandingPage from './LandingPage/index';
import ReactHooks from './ReactHooks/index';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userLoggedIn: false
    }
  }

  changeStateInApp() {
    const {userLoggedIn} = this.state
    this.setState({
      userLoggedIn: !this.state.userLoggedIn
    })
  }

  render() {
    const {userLoggedIn} = this.state
    return(
      <div>
        {/* {userLoggedIn ? <LandingPage/> : <User changeStateInApp={() => {this.changeStateInApp()}} userLoggedIn={userLoggedIn}/>} */}
        <ReactHooks/>
      </div>
    )
  }
};

export default App;