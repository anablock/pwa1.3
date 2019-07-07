import React, { Component } from 'react';
import { TransitionGroup, CSSTransition } from "react-transition-group";
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
    <Router>
      <Route
        render={({ location }) => (
          <div style={styles.fill}>
            <Route
              exact
              path="/"
              render={() => <Redirect to="/hsl/10/90/50" />}
            />

            <ul style={styles.nav}>
              <NavLink to="/hsl/10/90/50">Red</NavLink>
              <NavLink to="/hsl/120/100/40">Green</NavLink>
              <NavLink to="/rgb/33/150/243">Blue</NavLink>
              <NavLink to="/rgb/240/98/146">Pink</NavLink>
            </ul>

            <div style={styles.content}>
              <TransitionGroup>
                {/* no different than other usage of
                CSSTransition, just make sure to pass
                `location` to `Switch` so it can match
                the old location as it animates out
            */}
                <CSSTransition
                  key={location.key}
                  classNames="fade"
                  timeout={300}
                >
                  <Switch location={location}>
                    <Route exact path="/hsl/:h/:s/:l" component={HSL} />
                    <Route exact path="/rgb/:r/:g/:b" component={RGB} />
                    {/* Without this `Route`, we would get errors during
                    the initial transition from `/` to `/hsl/10/90/50`
                */}
                    <Route render={() => <div>Not Found</div>} />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            </div>
          </div>
        )}
      />
    </Router>
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

function NavLink(props) {
  return (
    <li style={styles.navItem}>
      <Link {...props} style={{ color: "inherit" }} />
    </li>
  );
}

function HSL({ match: { params } }) {
  return (
    <div
      style={{
        ...styles.fill,
        ...styles.hsl,
        background: `hsl(${params.h}, ${params.s}%, ${params.l}%)`
      }}
    >
      hsl(
      {params.h}, {params.s}
      %, {params.l}
      %)
    </div>
  );
}

function RGB({ match: { params } }) {
  return (
    <div
      style={{
        ...styles.fill,
        ...styles.rgb,
        background: `rgb(${params.r}, ${params.g}, ${params.b})`
      }}
    >
      rgb(
      {params.r}, {params.g}, {params.b})
    </div>
  );
}

const styles = {};

styles.fill = {
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0
};

styles.content = {
  ...styles.fill,
  top: "40px",
  textAlign: "center"
};

styles.nav = {
  padding: 0,
  margin: 0,
  position: "absolute",
  top: 0,
  height: "40px",
  width: "100%",
  display: "flex"
};

styles.navItem = {
  textAlign: "center",
  flex: 1,
  listStyleType: "none",
  padding: "10px"
};

styles.hsl = {
  ...styles.fill,
  color: "white",
  paddingTop: "20px",
  fontSize: "30px"
};

styles.rgb = {
  ...styles.fill,
  color: "white",
  paddingTop: "20px",
  fontSize: "30px"
};

export default App;
