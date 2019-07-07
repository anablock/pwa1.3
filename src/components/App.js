import React, { Component } from 'react';
import { BrowserRouter as Router, 
          Switch,
          Route, 
          Link,
          Redirect 
        } from "react-router-dom";
import Header from './Header';
import ChatContainer from './ChatContainer';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <Route component={Header} />
        </p>
        <p>
          <Route component={ChatContainer} />
        </p>
      </header>

      <div id="container">
        <h3>FirebaseUI</h3>
        <div id="firebaseui-spa">
          <p>
            <button id="sign-in-with-redirect">Sign In with Redirect</button>
            <button id="sign-in-with-popup">Sign In with Popup</button>
          </p>
          <div id="firebaseui-container">
            <div id="firebaseui-container firebaseui-page-provider-sign-in firebaseui-id-page-provider-sign-in firebaseui-use-spinner" />
            <div id="firebaseui-card-content">
              <ul class="firebaseui-idp-list">
                <li class="firebaseui-list-item">
                  <button class="firebaseui-idp-button mdl-button mdl-js-button mdl-button--raised firebaseui-idp-facebook firebaseui-id-idp-button">
                    <span class="firebaseui-idp-icon-wrapper">
                    <img class="firebaseui-idp-icon" alt="" src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/facebook.svg" /></span>
                    <span class="firebaseui-idp-text firebaseui-idp-text-long">Sign in with Facebook</span>
                    <span class="firebaseui-idp-text firebaseui-idp-text-short">Facebook</span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
