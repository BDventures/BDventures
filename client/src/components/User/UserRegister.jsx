import React, { Component } from "react";
import LandingPage from "../LandingPage";

class UserRegister extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      address: "",
      state: "",
      city: "",
      zip: null,
      description: "",
      contactEmail: "",
      userLoggedIn: false
    };
  }

  updateInfo(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  submitUserInfo() {
    this.setState({
      userLoggedIn: !this.state.userLoggedIn
    });
  }

  render() {
    return (
      <div className="user_parent">
        {this.state.userLoggedIn ? (
          <LandingPage />
        ) : (
          <form
            className="user_register"
            onChange={e => {
              this.updateInfo(e);
            }}
          >
            <label className='user_register_label'>
              Name: <input type="text" name="name" />
              Address: <input type="text" name="address" />
              State: <input type="text" name="state" />
              City: <input type="text" name="city" />
              Zip: <input type="text" name="zip" />
              Description: <textarea rows="4" cols="50" name="description" />
              Contact Email: <input type="text" name="contactEmail" />
              <button
                type="button"
                onClick={() => {
                  this.submitUserInfo();
                }}
              >
                Submit
              </button>
            </label>
          </form>
        )}
      </div>
    );
  }
}

export default UserRegister;
