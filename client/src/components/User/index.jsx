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
      userInfoFilled: false,
      finally: ''
    }
  }

  async updateInfo(e) {
    //information passed from userRegister child updates the state here // try to keep any state in root components
    //step 2) async and await the data I need that comes back from GetUserData

    //need to await set state since set state is async in nature
    await this.setState({
      [e.target.name]: e.target.value
    })
    let finalData = await GetUserData(this.state)
    // console.log(finalData, 'this is the final dataaa!') im awaiting the from GetUserData

    //finally I'm able to set this and display it regardless of the error message or the success
    if(finalData) this.setState({
      finally: finalData
    })
    if(finalData !== 'sorry not all data is filled out') {
      this.setState({
        userInfoFilled: true
      })
    }
  }
  render() {
    console.log(this.props, 'this is props passed from App')
    // console.log(this.state, 'this is state from user parent')
    
    //all we're doing is passing the state and the function declaration down to child component with this.updateInfo(e)
    //and this.state
    return(
      <div className="user_parent">
        <UserRegister stateInfo={this.state} changeStateInApp={() => {this.props.changeStateInApp()}} updateInfo={(e) => {this.updateInfo(e)}}/>
        {this.state.finally}
      </div>
    )
  }
}

export default User;