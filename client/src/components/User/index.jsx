import React, {Component} from 'react';
import UserRegister from './UserRegister';

class User extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: "",
      address: "",
      state: "",
      city: "",
      zip: null,
      description: "",
      contactEmail: "",
      userLoggedIn: false
    }
  }

  updateInfo(e) {
    //information passed from userRegister child updates the state here // try to keep any state in root components
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    console.log(this.state, 'this is state from user parent')
    //all we're doing is passing the state and the function declaration down to child component with this.updateInfo(e)
    //and this.state
    return(
      <div className="user_parent">
        <UserRegister stateInfo={this.state} updateInfo={(e) => {this.updateInfo(e)}}/>
      </div>
    )
  }
}

export default User;