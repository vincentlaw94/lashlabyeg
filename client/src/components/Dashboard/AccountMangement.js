import React, { Component } from "react";

import { connect } from "react-redux";
import {
  Button,
  Form,
  Header,
  Image,
  Message,
  Segment
} from "semantic-ui-react";
import icon1 from "../../images/icon.png";
import renderDateInput from "../../utils/renderDateInput";
import { Field, reduxForm } from "redux-form";
import renderField from "../../utils/renderField";

import { phone, date } from "../../utils/normalize";

import * as actions from "../../actions";

class AccountManagement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      user: {}
    };
  }
  componentDidMount() {
    this.props.fetchUser();
    this.setState({ user: this.props.user });
  }
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.user !== nextProps.user ? true : false;
  }
  componentDidUpdate(prevProps) {
    if (this.props.user !== prevProps.user) {
      this.props.fetchUser();
    }
  }
  renderMessage() {
    if (this.props.messageType === "saved") {
      return (
        <Message
          style={{ textAlign: "left" }}
          info
          size="small"
          compact
          icon="check circle"
          header="Account Information Saved"
        />
      );
    } else {
      return null;
    }
  }

  render() {
    const provinces = [
      { key: "Alberta", text: "Alberta", value: "Alberta" },
      {
        key: "British Columbia",
        text: "British Columbia",
        value: "British Columbia"
      },
      { key: "Manitoba", text: "Manitoba", value: "Manitoba" },
      {
        key: "Newfoundland and Labrador",
        text: "Newfoundland and Labrador",
        value: "Newfoundland and Labrador"
      },
      {
        key: "Northwest Territories",
        text: "Northwest Territories",
        value: "Northwest Territories"
      },
      { key: "Nova Scotia", text: "Nova Scotia", value: "Nova Scotia" },
      { key: "Nunavut", text: "Nunavut", value: "Nunavut" },
      { key: "Ontario", text: "Ontario", value: "Ontario" },
      {
        key: "Prince Edward Island",
        text: "Prince Edward Island",
        value: "Prince Edward Island"
      },
      { key: "Quebec", text: "Quebec", value: "Quebec" },
      { key: "Saskatchewan", text: "Saskatchewan", value: "Saskatchewan" },
      { key: "Yukon", text: "Yukon", value: "Yukon" }
    ];
    const { handleSubmit } = this.props;

    return (
      <Form size="large" onSubmit={handleSubmit}>
        <Segment stacked>
          <Header as="h1" color="black" textAlign="left">
            <Image src={icon1} />
            <Header.Content>Contact Information</Header.Content>
          </Header>
          <Segment>
            {this.renderMessage()}
            <Form.Group widths="equal">
              <Field
                name="firstName"
                label="First Name"
                component={renderField}
                as={Form.Input}
                type="text"
                icon="user"
                iconPosition="left"
                placeholder="First Name"
                value="ooooooo"
              />
              <Field
                name="lastName"
                label="Last Name"
                component={renderField}
                as={Form.Input}
                type="text"
                icon="user"
                iconPosition="left"
                placeholder="Last Name"
              />
            </Form.Group>
            <Field
              name="dob"
              component={renderDateInput}
              label="Date of Birth"
              normalize={date}
            />

            <Field
              name="phone"
              icon="phone"
              iconPosition="left"
              label="Phone"
              as={Form.Input}
              component={renderField}
              normalize={phone}
              placeholder="(999) 999-9999"
            />

            <Field
              name="address"
              label="Address"
              component={renderField}
              as={Form.Input}
              type="text"
              iconPosition="left"
              icon="address card"
              placeholder="Address"
            />

            <Form.Group widths="equal">
              <Field
                name="city"
                label="City"
                component={renderField}
                as={Form.Input}
                type="text"
                icon="world"
                placeholder="City"
                iconPosition="left"
              />
              <Field
                name="province"
                label="Province"
                component={renderField}
                as={Form.Select}
                options={provinces}
                placeholder="Province"
              />
            </Form.Group>
            <Field
              name="postalCode"
              label="Postal Code"
              component={renderField}
              as={Form.Input}
              icon="world"
              type="text"
              iconPosition="left"
              placeholder="Postal code"
            />

            <Header as="h3" color="black" textAlign="left">
              Emergency Contact Information
            </Header>
            <Field
              name="emergName"
              label="Name"
              component={renderField}
              as={Form.Input}
              type="text"
              icon="address book"
              iconPosition="left"
              placeholder="Name"
            />

            <Field
              name="emergRelationship"
              label="Relationship"
              component={renderField}
              as={Form.Input}
              iconPosition="left"
              type="text"
              icon="address book"
              placeholder="Relationship"
            />
            <Field
              name="emergPhone"
              icon="phone"
              iconPosition="left"
              label="Phone"
              as={Form.Input}
              component={renderField}
              normalize={phone}
              placeholder="(999) 999-9999"
            />
          </Segment>

          <Button
            type="submit"
            style={{ marginTop: "5px" }}
            color="black"
            floated="right"
            compact
            size="large"
          >
            Save
          </Button>

          <br />
          <br />
        </Segment>
      </Form>
    );
  }
}

// You have to connect() to any reducers that you wish to connect to yourself
function mapStateToProps(state) {
  return {
    messageType: state.message.flashType
  };
}

export default connect(
  mapStateToProps,
  actions
)(
  reduxForm({
    form: "wizard", // <------ same form name
    destroyOnUnmount: false, // <------ preserve form data
    forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
    enableReinitialize: true
  })(AccountManagement)
);
