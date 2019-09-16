import React, { Component } from "react";
import { connect } from "react-redux";
import { Table, Segment } from "semantic-ui-react";

import { reduxForm } from "redux-form";

import _ from "lodash";
import { DateInput } from "semantic-ui-calendar-react";

import AvailableTime from "../AppointmentForm/AvailableTime";

import * as actions from "../../actions";
import moment from "moment";
import axios from "axios";

var date = new Date();
date.setDate(date.getDate() - 1);
class Reschedule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "",
      duration: 0
    };
  }

  componentDidMount() {
    axios.get("/api/technician").then(res => {
      var a = _.findIndex(res.data, { name: this.props.technician });
      var b = _.findIndex(res.data[a].treatments, {
        treatment: this.props.treatment
      });
      this.setState({ duration: res.data[a].treatments[b].duration });
    });
  }

  formatDate(date) {
    const newDate = moment(date, "YYYY-MM-DD").format("ddd DD MMM YYYY");
    const time = date.slice(11, 16);
    return newDate + " " + time;
  }

  handleChange = (event, { name, value }) => {
    if (this.state.hasOwnProperty(name)) {
      this.setState({ [name]: value });
    }
    this.props.change("date", value);
    this.props.getAvailableTime(
      this.state.date,
      this.props.technician,
      this.state.duration
    );
  };

  render() {
    return (
      <Segment>
        <Table definition>
          <Table.Body>
            <Table.Row>
              <Table.Cell>Technician</Table.Cell>
              <Table.Cell>{this.props.technician}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Treatment</Table.Cell>
              <Table.Cell>{this.props.treatment}</Table.Cell>
            </Table.Row>
          </Table.Body>
          <Table.Footer />
        </Table>
        <DateInput
          inline
          name="date"
          initialValues={this.state.date}
          startMode="day"
          placeholder="DD-MM-YYYY"
          dateFormat="DD-MM-YYYY"
          popupPosition="bottom center"
          value={this.state.date}
          iconPosition="left"
          onChange={this.handleChange}
          hideMobileKeyboard="true"
          minDate={date}
          inlineLabel
        />

        <AvailableTime />
      </Segment>
    );
  }
}

Reschedule = connect(
  null,
  actions
)(Reschedule);
export default reduxForm({
  form: "schedule", // <------ same form name
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true // <------ unregister fields on unmount
})(Reschedule);
