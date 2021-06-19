import React, { useState } from "react";
import "../styles/MainPage.css";
import * as api from "../lib/api";
import { call } from "redux-saga/effects";
import { getTokenFromLocalStorage, setTokenForHeader, setTokenForHeader_v2, validateTokenByHeader } from "../lib/api";
import wait from "waait";
import axios from "axios";

const MainPage = () => {
  const [n, setN] = useState(10);
  const [userUUID, setUserUUID] = useState("userUUID");

  const ExperimentHeader = async () => {
    let timeInterval = [];
    // await setTokenForHeader();
    console.log("Header-based Authorization Start!");
    await wait(1000);
    let startTime = new Date();
    let endTime = new Date();
    for (let i = 0; i < n; i++) {
      const userToken = () => getTokenFromLocalStorage();
      const result = () => validateTokenByHeader(userToken, userUUID);
      if (result) {
        endTime = new Date();
        timeInterval.push(endTime - startTime);
        console.log(i + ': ' + (endTime - startTime));
        // setTheArray(oldArray => [...oldArray, newElement]); 과 같이 js 안에서 실행 시간을 저장할 수 있었지만 이 실행 자체에도 시간이 걸릴 수 있겠다고 생각함
      } else {
        break;
      }
    }
    console.log(timeInterval);
  };

  const ExperimentCookie = async () => {
    let timeInterval = [];
    console.log("Cookie-based Authorization Start!");
    let startTime = new Date();
    let endTime = new Date();
    for (let i = 0; i < n; i++) {
      const result = () => CookieValidate();
      if (result) {
        endTime = new Date();
        timeInterval.push(endTime - startTime);
        console.log(i + ': ' + (endTime-startTime));
        // setTheArray(oldArray => [...oldArray, newElement]); 과 같이 js 안에서 실행 시간을 저장할 수 있었지만 이 실행 자체에도 시간이 걸릴 수 있겠다고 생각함
      } else {
        break;
      }
    }
    console.log(timeInterval);
  };

  const HeaderValidate = async () => {
    const userToken = call(api.getTokenFromLocalStorage);
    return call(api.validateTokenByHeader, userToken, userUUID);
  };

  const CookieValidate = async () => {
    return call(api.validateTokenByCookie, userUUID);
  };

  const setToken_Header = async () => {
    axios.get(
      `/header-based/setting`
    ).then(function(response) {
      setUserUUID(response.data.uuid);
      localStorage.setItem("userToken", response.data.token);
    });
  };

  const setToken_Cookie = async () => {
    axios.get(
      `/cookie-based/setting`
    ).then(function(response) {
      setUserUUID(response.data.uuid);
    })
  };

  return (
    <div className="main-page-wrapper">
      <h2>Header based Authorization<br/>vs<br/>Cookie based Authorization</h2>
      <div>
        <p>userUUID: {userUUID}</p>
      </div>
      <div className="bodies-wrapper">
        <div className="body-wrapper">
          <h3>Header based Authorization</h3>
          <div className="setting-header-wrapper">
            <div className="setting-header-title">
              Setting Token
            </div>
            <button onClick={() => setToken_Header()}>Setting!</button>
          </div>
          <button className="experiment-button" onClick={() => ExperimentHeader()}>Experiment Start</button>
        </div>
        <hr/>
        <div className="body-wrapper">
          <h3>Cookie based Authorization</h3>
          <div className="setting-header-wrapper">
            <div className="setting-header-title">
              Setting Token
            </div>
            <button onClick={() => setToken_Cookie()}>Setting!</button>
          </div>
          <button className="experiment-button" onClick={() => ExperimentCookie()}>Experiment Start</button>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
