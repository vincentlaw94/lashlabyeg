import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

import Dashboard from "./Dashboard";
import Login from "./Login";
import Signup from "./Registration/SignUpForm";
import Landing from "./Landing/Landing";

import Policies from "./Landing/Components/Policies";
import FAQ from "./Landing/Components/FAQ";

class App extends Component {
  componentDidMount() {
    // method is within the app state.
    this.props.fetchUser();
  }
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route exact path="/" component={Landing} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/login" component={Login} />

            <Route exact path="/onlinebooking" component={Dashboard} />

            <Route exact path="/policies" component={Policies} />
            <Route exact path="/faq" component={FAQ} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

//redux is used to wrapped around the root component app using
//the method 'connect'. 2 arguments are passed, connect (mapStateToProps, mapDispatchtoProps, actions)(root components)
//connect give you access to the store. Able to call dispatch.
export default connect(
  null,
  actions
)(App);
