import React, {Component} from 'react';
import UserRegister from './UserRegister';
import {GetUserData} from "./GetUserData";

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
      userLoggedIn: false,
      newData: '',
      finally: ''
    }
  }

  async updateInfo(e) {
    //information passed from userRegister child updates the state here // try to keep any state in root components
    //step 2) async and await the data I need that comes back from GetUserData
    await this.setState({
      [e.target.name]: e.target.value
    })
    let finalData = await GetUserData(this.state)
    // console.log(finalData, 'this is the final dataaa!') im awaiting the from GetUserData

    //finally I'm able to set this and display it!!!!! WELL DONE!
    if(finalData) this.setState({
      finally: finalData
    })
  }
  render() {
    console.log(this.state, 'this is state from user parent')
    
    //all we're doing is passing the state and the function declaration down to child component with this.updateInfo(e)
    //and this.state
    return(
      <div className="user_parent">
        <UserRegister stateInfo={this.state} updateInfo={(e) => {this.updateInfo(e)}}/>
        {this.state.finally}
      </div>
    )
  }
}

export default User;