import React, { Component } from "react";
import { compose } from "redux";

import { Link } from "react-router-dom";
import {
  Button,
  Icon,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment,
  Divider,
  TextArea,
  Checkbox
} from "semantic-ui-react";
import icon1 from "../../images/icon.png";
import renderDateInput from "../../utils/renderDateInput";
import { Field, reduxForm } from "redux-form";
import renderField from "../../utils/renderField";

import MaskedInput from "react-text-mask";
import validate from "../../utils/validation";
import asyncValidate from "../../utils/asyncValidate";
import { lower } from "../../utils/normalize";

class AccountFields extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <Form size="large" onSubmit={handleSubmit}>
        <Header as="h1" color="black" textAlign="left">
          <Image src={icon1} />
          <Header.Content>
            Create your Account
            <Header.Subheader> to make an online appointment</Header.Subheader>
          </Header.Content>
        </Header>

        <Field
          name="email"
          label="E-mail"
          component={renderField}
          as={Form.Input}
          type="email"
          icon="user"
          iconPosition="left"
          placeholder="E-mail Address"
          normalize={lower}
        />

        <Form.Group widths="2">
          <Field
            name="password"
            label="Password"
            component={renderField}
            as={Form.Input}
            type="password"
            icon="lock"
            iconPosition="left"
            placeholder="Password"
          />

          <Field
            name="password1"
            label="Confirm Password"
            icon="lock"
            iconPosition="left"
            component={renderField}
            as={Form.Input}
            type="password"
            placeholder="Confirm Password"
          />
        </Form.Group>
        <Button
          type="submit"
          style={{ marginTop: "5px" }}
          color="black"
          floated="right"
          compact
          size="large"
        >
          Next
        </Button>
        <Link to="/login">
          <Button
            style={{ marginTop: "5px" }}
            color="black"
            basic
            floated="left"
          >
            Log In Instead{" "}
          </Button>
        </Link>

        <br />
        <br />
      </Form>
    );
  }
}

export default reduxForm({
  form: "wizard", // <------ same form name
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
  asyncValidate,
  asyncBlurFields: ["email"]
})(AccountFields);
