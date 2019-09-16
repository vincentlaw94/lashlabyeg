import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Icon,
  Grid,
  Header,
  Message,
  Segment,
  Divider,
  Table
} from "semantic-ui-react";

import { reduxForm, formValueSelector, reset } from "redux-form";
import renderField from "../../utils/renderField";

import validate from "../../utils/validation";

import moment from "moment";
import Map from "../Landing/Components/Map";
import { Link } from "react-router-dom";

class ConfirmPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startTime: "",
      endTime: "",
      technician: "",
      treatment: "",
      email: ""
    };
  }

  componentDidMount() {
    this.setState({
      startTime: this.props.startTimeValue,
      endTime: this.props.endTimeValue,
      technician: this.props.technicianValue,
      treatment: this.props.treatmentValue,
      email: this.props.emailValue
    });
    this.props.dispatch(reset("schedule"));
  }
  formatDate(date) {
    const newDate = moment(date, "YYYY-MM-DD").format("ddd DD MMM YYYY");

    return newDate;
  }

  render() {
    const { startTime, endTime, technician, treatment, email } = this.state;
    return (
      <div>
        <Segment.Group stacked>
          <Segment inverted padded textAlign="center">
            <Header as="h3" icon>
              <Icon name="checkmark" />
              Thank you for booking with us!
            </Header>
          </Segment>
          <Message size="small">
            Confirmation summary has been emailed to {email}
          </Message>

          <Header as="h4" attached>
            Appointment details
          </Header>
          <Segment attached>
            <Grid columns={2} textAlign="left">
              <Divider vertical />

              <Grid.Column>
                <Table striped compact>
                  <Table.Body>
                    <Table.Row>
                      <Table.Cell>Appointment Time:</Table.Cell>
                      <Table.Cell>
                        {this.formatDate(startTime)} <br />{" "}
                        {startTime.slice(11, 16)} to {endTime.slice(11, 16)}
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>Technician:</Table.Cell>
                      <Table.Cell>{technician}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>Treatment:</Table.Cell>
                      <Table.Cell>{treatment}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>Location: </Table.Cell>
                      <Table.Cell>Lash Lab YEG Studio</Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table>
              </Grid.Column>

              <Grid.Column>
                <Map />
              </Grid.Column>
            </Grid>
          </Segment>

          <Message warning attached="bottom">
            <Icon name="warning" />
            Contact us with any question regarding your appointment. Please go
            over{" "}
            <Link to="policies" target="_blank">
              policy
            </Link>{" "}
            and{" "}
            <Link to="faq" target="_blank">
              FAQ
            </Link>{" "}
            before appointment.
          </Message>
        </Segment.Group>
      </div>
    );
  }
}

const selector = formValueSelector("schedule");
ConfirmPage = connect(state => {
  const technicianValue = selector(state, "technician");
  const treatmentValue = selector(state, "treatment");
  const dateValue = selector(state, "date");
  const startTimeValue = selector(state, "startTime");
  const endTimeValue = selector(state, "endTime");
  const emailValue = selector(state, "email");
  return {
    technicianValue,
    treatmentValue,
    dateValue,
    startTimeValue,
    endTimeValue,
    emailValue
  };
})(ConfirmPage);

export default reduxForm({
  form: "schedule", // <------ same form name
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(ConfirmPage);
