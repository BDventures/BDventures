import React, { Component } from "react";
import User from "./User/index";
import LandingPage from "./LandingPage/index";
import ReactHooks from "./ReactHooks/index";
import WeatherHooks from "./WeatherHooks/index";
import SpotifyHooks from "./SpotifyHooks/index";
import TodoHooks from "./TodoHooks/index";
import TodoHooksMine from "./TodoHooksMine/index";
import ReactCalculator from "./CalculatorHooks/index";
import CalendarHook from "./Calendar/index";
import { SamplePosts } from "./scrape.jsx";
import { NumbersAPI } from "./NumbersAPI/index.jsx";
import { Calculate } from "./Calculate/index";
import { RealCalculator } from "./RealCalculator/index";
import { Guess } from "./Guess/index";
import { Slack } from "./Slack/index";
import { SlackLanding } from "./Slack/SlackLanding/index";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userLoggedIn: false,
      post: null,
      singlePost: false
    };
  }

  // changeStateInApp() {
  //   const {userLoggedIn} = this.state
  //   this.setState({
  //     userLoggedIn: !this.state.userLoggedIn

  //   })
  // }

  // handleClick(data) {
  //   this.setState({
  //     post: data,
  //     singlePost: true
  //   })
  // }

  // samplePosts() {
  //   return(
  //     <div>
  //       {SamplePosts.map(post => {
  //         let each = {post}
  //         return(
  //           <ul>
  //             <li onClick={() => {this.handleClick(each)}}>{post.title}</li>
  //             <li><img style={{width:'auto', height: '200px'}}src={post.imageUrl}/></li>
  //             <li>{post.body}</li>
  //           </ul>
  //         )
  //       })}
  //     </div>
  //   )
  // }

  render() {
    // console.log(this.state,'hello')
    // const {userLoggedIn} = this.state
    return (
      <div>
        {/* {userLoggedIn ? <LandingPage/> : <User changeStateInApp={() => {this.changeStateInApp()}} userLoggedIn={userLoggedIn}/>} */}
        {/* <ReactHooks/> */}
        {/* <WeatherHooks/> */}
        {/* <SpotifyHooks/> */}
        {/* <TodoHooks/> */}
        {/* <TodoHooksMine/> */}
        {/* <ReactCalculator/> */}
        {/* <CalendarHook/> */}
        {/* {this.samplePosts()} */}
        {/* <NumbersAPI/> */}
        {/* <RealCalculator/> */}
        {/* <Guess/> */}
        <Router>
          <Switch>
            <Route exact path="/" component={Slack}></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
