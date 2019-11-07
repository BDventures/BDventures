import React, {Component} from "react";
import User from './User/index';
// import SmartComponent from './User/SmartComponent'

class App extends Component {
  constructor() {
    super();
  }
  render() {
    return(
      <div>
        <User/>
        {/* <SmartComponent/> */}
      </div>
    )
  }
};

export default App;