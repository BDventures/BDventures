import React, {useState, useEffect} from "react";
import { LoginForm } from "./loginForm";
import "./login.css";
import axios from "axios";
import {SlackLanding} from '../SlackLanding/index'
import {Redirect,Switch,Route, Link} from 'react-router-dom'

export const SlackLogin = () => {
  const [loginInfo, setLoginInfo] = LoginForm({ login: "", password: "" });



  return (
    <div className="wrapper fadeInDown">
      <div id="formContent">
        <form>
          <input
            type="text"
            id="login"
            placeholder="enter username"
            name="login"
            onChange={setLoginInfo}
            className="fadeIn second"
          ></input>
          <input
            type="text"
            id="password"
            placeholder="enter password"
            name="password"
            onChange={setLoginInfo}
            className="fadeIn third"
          ></input>
          <input type="submit" className="fadeIn fourth" value="Log In"></input>
        </form>

        <div id="formFooter">
          <a className="underlineHover" href="#">
            Forgot Password?
          </a>
        </div>
      </div>
    </div>
  );
};
