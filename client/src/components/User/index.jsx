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
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    console.log(this.state, 'this is state from user parent')
    return(
      <div>
        <UserRegister stateInfo={this.state} updateInfo={(e) => {this.updateInfo(e)}}/>
      </div>
    )
  }
}

export default User;