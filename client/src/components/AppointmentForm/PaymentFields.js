import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Dimmer,
  Loader,
  Button,
  Form,
  Header,
  Image,
  Message,
  Segment
} from "semantic-ui-react";
import icon1 from "../../images/icon.png";

import { Field, reduxForm, formValueSelector } from "redux-form";
import renderField from "../../utils/renderField";
import AvailableTime from "./AvailableTime";

import { CardElement } from "react-stripe-elements";

import validate from "../../utils/validation";

import { Input } from "semantic-ui-react";
const style = {
  margin: "0em",
  maxWidth: "100%",
  WebkitBoxFlex: "1",
  msFlex: " 1 0 auto",
  flex: " 1 0 auto",
  outline: "none",
  WebkitTapHighlightColor: "rgba(255, 255, 255, 0)",
  textAlign: "left",
  lineHeight: " 1.21428571em",
  fontFamily: "Lato",
  padding: " 0.67857143em 1em",
  background: "#FFFFFF",
  border: " 1px solid rgba(34, 36, 38, 0.15)",
  color: " rgba(0, 0, 0, 0.87)",
  borderRadius: " 0.28571429rem",
  WebkitTransition: " border-color 0.1s ease, WebkitBoxShadow 0.1s ease",
  transition: " border-color 0.1s ease, WebkitBoxShadow 0.1s ease",
  transition: " box-shadow 0.1s ease, border-color 0.1s ease",
  transition:
    "box-shadow 0.1s ease, border-color 0.1s ease, WebkitBoxShadow 0.1s ease",
  WebkitBoxShadow: "none",
  boxShadow: " none"
};
const label = {
  WebkitBoxFlex: "0",
  msFlex: "0 0 auto",
  flex: "0 0 auto",
  margin: "0px",
  fontSize: "1em",

  paddingBottom: "2px",
  borderTopRightRadius: "0px",
  borderBottomRightRadius: "0px",
  borderTopLeftRadius: "0px",
  borderBottomLeftRadius: "0px",
  borderLeftColor: "transparent",
  borderLeftColor: "#85B7D9",
  top: "1px",
  right: "1px",
  fontSize: "13px",
  borderRadius: "0em 0.28571429rem 0em 0em",
  fontColor: "rgba(0, 0, 0, 0.87)"
};
class PaymentFields extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { fetching, handleSubmit, previousPage, priceValue } = this.props;

    return (
      <div>
        {fetching && (
          <Dimmer active>
            <Loader size="massive" />
          </Dimmer>
        )}
        <Segment stacked>
          <Form size="large" onSubmit={handleSubmit}>
            <Header as="h1" color="black" textAlign="left">
              <Image src={icon1} />
              <Header.Content>Payment</Header.Content>
            </Header>
            <Message
              style={{ fontSize: "14px" }}
              color="yellow"
              header="Test card numbers with any three-digit CVC code and an expiration date in the future to try it out:"
              content="4000 0012 4000 0000"
            />
            <Segment padded>
              <Field
                as={Form.Input}
                component={renderField}
                name="email"
                type="text"
                label="E-mail"
                type="email"
                icon="user"
                iconPosition="left"
                placeholder="E-mail Address"
              />
              <Field
                name="name"
                label="Name on Card"
                type="text"
                icon="user"
                iconPosition="left"
                placeholder="Name"
                as={Form.Input}
                component={renderField}
              />

              <div style={label}>
                <b>Card Information</b>
              </div>
              <div style={style}>
                <CardElement />
              </div>
            </Segment>

            <Button
              type="submit"
              style={{ marginTop: "10px" }}
              color="black"
              floated="right"
              compact
              size="large"
            >
              Pay ${priceValue}.00
            </Button>
            <Button
              onClick={previousPage}
              style={{ marginTop: "10px" }}
              color="black"
              basic
              floated="left"
            >
              {" "}
              Back{" "}
            </Button>

            <br />
            <br />
          </Form>
        </Segment>
      </div>
    );
  }
}

const selector = formValueSelector("schedule");
PaymentFields = connect(state => {
  const priceValue = selector(state, "price");

  return {
    priceValue
  };
})(PaymentFields);

export default reduxForm({
  form: "schedule", // <------ same form name
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(PaymentFields);
