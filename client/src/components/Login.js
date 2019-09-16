import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  Button,
  Icon,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment,
  Divider
} from "semantic-ui-react";
import icon1 from "../images/icon.png";
import * as actions from "../actions";
import { Field, reduxForm } from "redux-form";
import renderField from "../utils/renderField";
import LoginField from "./Login/LoginField";
import { withRouter } from "react-router-dom";

class Login extends Component {
  renderMessage() {
    if (this.props.flashMessageType == "registrationComplete") {
      return (
        <Message
          style={{ textAlign: "left" }}
          success
          icon="check circle"
          header="Account Registration was Successful"
          list={["You must verify your email before logging in"]}
        />
      );
    }
    if (this.props.flashMessageType == "verifyEmail") {
      return (
        <Message
          style={{ textAlign: "left" }}
          icon="exclamation"
          warning
          header="Verified Email Required!"
          list={["You must verify your email before logging in"]}
        />
      );
    }
    if (this.props.flashMessageType == "failLogin") {
      return (
        <Message
          style={{ textAlign: "left" }}
          icon="times circle outline"
          error
          header="Invalid Email and Password"
        />
      );
    } else {
      return null;
    }
  }
  render() {
    const { onSubmit, submitLogin, history } = this.props;
    return (
      <div className="login-form">
        {/*
                Heads up! The styles below are necessary for the correct render of this example.
                You can do same with CSS, the main idea is that all the elements up to the `Grid`
                below must have a height of 100%.
              */}

        <Grid
          textAlign="center"
          style={{ height: "750px" }}
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as="h2" color="black" textAlign="center">
              <Image src={icon1} /> Login to your account
            </Header>
            {this.renderMessage()}
            <Form size="large" onSubmit={this.submitLogin}>
              <Segment stacked>
                <Button
                  href="/auth/google"
                  style={{ marginBottom: "10px" }}
                  fluid
                  size="large"
                >
                  <Icon name="google" />Login with Google
                </Button>
                <Divider horizontal> Or </Divider>

                <LoginField onSubmit={v => submitLogin(v, history)} />
              </Segment>
            </Form>
            <Message>
              New to us? <Link to="/signup">Sign Up</Link>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    flashMessageType: state.flashMessage.flashType
  };
}

export default connect(
  mapStateToProps,
  actions
)(withRouter(Login));
