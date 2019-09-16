import React, { Component } from "react";
import {
  Button,
  Form,
  Header,
  Icon,
  Modal,
  Message,
  Segment,
  Table
} from "semantic-ui-react";

import { connect } from "react-redux";
import { reduxForm, formValueSelector, reset } from "redux-form";
import moment from "moment";
import { fetchAppointment } from "../../actions";
import axios from "axios";

class AppointmentHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      technician: "",
      eventId: "",
      stripeId: "",
      date: "",
      endDate: "",
      treatment: "",
      cancelToggle: false,
      rescheduleToggle: false
    };
  }

  formatDate(date) {
    const newDate = moment(date, "YYYY-MM-DDTHH:mm:ss.SS").format(
      "ddd MMM DD YYYY"
    );
    const time = date.slice(11, 16);
    return newDate + " " + time;
  }

  getTableData(appointment) {
    return appointment
      .filter(app => {
        return !app.canceled;
      })
      .map((app, index) => {
        return (
          <Table.Row key={index} style={{ width: "100%" }}>
            <Table.Cell style={{ width: "100%" }}>
              <Header as="h4">
                <Header.Content>
                  {this.formatDate(app.date)}
                  <br />
                  {app.technician}
                  <Header.Subheader>{app.treatment}</Header.Subheader>
                </Header.Content>
              </Header>
            </Table.Cell>
            <Table.Cell />
          </Table.Row>
        );
      });
  }
  isEmpty(appointment) {
    var empty = appointment.filter(app => {
      return !app.canceled;
    });
    return empty.length === 0 ? true : false;
  }

  render() {
    const { appointment } = this.props;
    const {
      id,
      technician,
      treatment,
      stripeId,
      eventId,
      date,
      endDate
    } = this.state;

    if (this.isEmpty(appointment)) {
      return (
        <Table
          padded
          striped
          celled
          singleLine
          unstackable
          collapsing
          columns={2}
          style={{ width: "100%" }}
        >
          <Table.Header fullWidth>
            <Table.Row>
              <Table.HeaderCell colSpan="2">
                Appointments History
              </Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Header as="h4" textAlign="center">
            No Appointments
          </Header>

          <Table.Footer>
            <Table.Row>
              <Table.HeaderCell colSpan={4} />
            </Table.Row>
          </Table.Footer>
        </Table>
      );
    } else {
      return (
        <Table
          padded
          striped
          celled
          singleLine
          unstackable
          collapsing
          columns={2}
          style={{ width: "100%" }}
        >
          <Table.Header fullWidth>
            <Table.Row>
              <Table.HeaderCell colSpan="2">
                Appointments History
              </Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body
            style={{ display: "block", overflow: "auto", height: "400px" }}
          >
            {this.getTableData(appointment)}
          </Table.Body>

          <Table.Footer>
            <Table.Row>
              <Table.HeaderCell colSpan={4} />
            </Table.Row>
          </Table.Footer>
        </Table>
      );
    }
  }
}

function mapStateToProps({ appointment }) {
  return { appointment };
}

AppointmentHistory = connect(
  mapStateToProps,
  { fetchAppointment }
)(AppointmentHistory);

const selector = formValueSelector("schedule");
AppointmentHistory = connect(state => {
  const startTimeValue = selector(state, "startTime");
  const endTimeValue = selector(state, "endTime");
  return {
    startTimeValue,
    endTimeValue
  };
})(AppointmentHistory);

export default reduxForm({
  form: "schedule", // <------ same form name
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true // <------ unregister fields on unmount
})(AppointmentHistory);
