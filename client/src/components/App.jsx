import React, {Component} from "react";
import SmartComponent from "./SmartComponent.jsx";

class App extends Component {
  constructor() {
    super();
  }
  render() {
    return(
      <div>
        <SmartComponent/>
      </div>
    )
  }
};

export default App;