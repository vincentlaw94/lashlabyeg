import React, { Component } from "react";
import moment from "moment";
import { connect } from "react-redux";
import { Field, reduxForm, formValueSelector } from "redux-form";
import {
  Dimmer,
  Loader,
  Button,
  Header,
  Segment,
  Divider,
  Container
} from "semantic-ui-react";

import * as actions from "../../actions";
// need to set up redux, pass the available time to AppointmentForm

class AvailableTime extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startTime: "",
      selectedTime: ""
    };
  }

  formatDate(date) {
    const newDate = moment(date, "DD-MM-YYYY").format("ddd DD MMM YYYY");

    return date === undefined ? null : newDate;
  }

  formatTime(time) {
    this.props.change("startTime", time.start);
    this.props.change("endTime", time.end);

    this.setState({
      startTime: time.start.slice(11, 16),
      selectedTime: time.start
    });
  }

  isSelected(time) {
    return time === this.props.startTimeValue;
  }

  render() {
    const {
      schedule,

      dateValue
    } = this.props;

    if (schedule.availableTime && schedule.availableTime.length > 0) {
      return (
        <div>
          <Segment inverted padded>
            <Header
              as="h1"
              content={this.formatDate(dateValue)}
              textAlign="center"
            />
            <Divider horizontal inverted>
              Select Time
            </Divider>
            <Container style={{ overflowY: "auto", maxHeight: "150px" }}>
              {schedule.availableTime.map((time, index) => (
                <Button
                  type="button"
                  active={this.isSelected(time.start)}
                  inverted
                  onClick={() => this.formatTime(time)}
                  content={time.start.slice(11, 16)}
                  key={index}
                />
              ))}
            </Container>
            <div style={{ display: "none" }}>
              <Field name="startTime" component="input" type="radio" />
            </div>
          </Segment>
        </div>
      );
    } else if (
      schedule.availableTime &&
      schedule.availableTime.length === 0 &&
      this.props.touched &&
      !schedule.isEmpty
    ) {
      return (
        <Segment inverted padded>
          <Dimmer active>
            <Loader />
          </Dimmer>
        </Segment>
      );
    } else if (schedule.isEmpty) {
      return (
        <Segment inverted padded>
          <Header as="h1" textAlign="center">
            {" "}
            No Available Time on {this.formatDate(dateValue)}{" "}
          </Header>
        </Segment>
      );
    } else {
      return (
        <Segment inverted padded>
          <Divider inverted />
        </Segment>
      );
    }
  }
}

function mapStateToProps({ schedule }) {
  return { schedule };
}

AvailableTime = connect(
  mapStateToProps,
  actions
)(AvailableTime);

const selector = formValueSelector("schedule");
AvailableTime = connect(state => {
  const startTimeValue = selector(state, "startTime");
  const dateValue = selector(state, "date");
  return {
    startTimeValue,
    dateValue
  };
})(AvailableTime);

export default reduxForm({
  form: "schedule", // <------ same form name
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true // <------ unregister fields on unmount
})(AvailableTime);
