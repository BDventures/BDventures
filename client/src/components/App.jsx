import React, {Component} from "react";
import User from './User/index';

class App extends Component {
  constructor() {
    super();
  }
  render() {
    return(
      <div>
        <User/>
      </div>
    )
  }
};

export default App;