import React, { Component } from "react";
import {
  Responsive,
  Button,
  Header,
  Icon,
  Modal,
  Table
} from "semantic-ui-react";

import { connect } from "react-redux";
import { reduxForm, formValueSelector } from "redux-form";
import moment from "moment-timezone";
import { fetchAppointment, getAvailableTime } from "../../actions";
import axios from "axios";

import Reschedule from "./Reschedule";

var today = moment(new Date(), "DD-MM-YYYY").format("YYYY-MM-DD");
class AppointmentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appointment: {},
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
  showCancel(id, technician, eventId, stripeId) {
    this.setState({
      id: id,
      technician: technician,
      eventId: eventId,
      stripeId: stripeId,
      cancelToggle: true
    });
  }
  showReschedule(id, technician, treatment, date, endDate, eventId) {
    this.setState({
      id: id,
      technician: technician,
      eventId: eventId,
      treatment: treatment,
      date: date,
      endDate: endDate,
      rescheduleToggle: true
    });
    this.props.change("startTime", date);
    const scheduleDay = moment(date, "YYYY-MM-DDTHH:mm:ss.SS").format(
      "DD-MM-YYYY"
    );
    this.props.change("date", scheduleDay);
    //refactor needed
    //this.props.getAvailableTime(date, technician, 1);
  }
  close() {
    this.setState({
      id: "",
      cancelToggle: false,
      rescheduleToggle: false,
      technician: "",
      eventId: "",
      treatment: "",
      date: "",
      endDate: ""
    });
  }

  formatDate(date) {
    const newDate = moment(date, "YYYY-MM-DDTHH:mm:ss.SS").format(
      "ddd MMM DD YYYY"
    );
    const time = date.slice(11, 16);
    return newDate + " " + time;
  }
  componentDidMount() {
    this.props.fetchAppointment();
    this.setState({ appointment: this.props.appointment });
  }
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.appointment !== nextProps.appointment ? true : false;
  }
  componentDidUpdate(prevProps) {
    if (this.props.appointment !== prevProps.appointment) {
      this.props.fetchAppointment();
    }
  }

  cancelAppointment(id, technician, eventId, stripeId) {
    const values = { id, technician, eventId, stripeId };
    axios.post("/api/refund", values);
    this.setState({ cancelToggle: false });
  }

  reschedule(id, date, endDate, eventId, technician, treatment) {
    const values = { id, date, endDate, eventId, technician, treatment };
    this.props.change("startTime", date);
    axios.post("/api/reschedule", values);
    this.setState({ rescheduleToggle: false });
  }
  getTableData(appointment) {
    return appointment
      .filter(app => {
        return app.date > today && !app.canceled;
      })
      .map((app, index) => {
        return (
          <Table.Row key={index}>
            <Responsive
              as={Table.Cell}
              minWidth={Responsive.onlyMobile.minWidth}
              style={{ width: "100%" }}
            >
              <Header as="h4">
                <Header.Content>
                  {this.formatDate(app.date)}
                  <br />
                  {app.technician}
                  <Header.Subheader>{app.treatment}</Header.Subheader>
                </Header.Content>
              </Header>
            </Responsive>

            <Responsive
              as={Table.Cell}
              minWidth={Responsive.onlyMobile.minWidth}
              verticalAlign="top"
            >
              <Button
                size="mini"
                icon
                onClick={() =>
                  this.showReschedule(
                    app._id,
                    app.technician,
                    app.treatment,
                    app.date,
                    app.endDate,
                    app.eventId
                  )
                }
              >
                <Icon name="pencil" />
                Reschedule
              </Button>
              <br />
              <Button
                onClick={() =>
                  this.showCancel(
                    app._id,
                    app.technician,
                    app.eventId,
                    app.stripeId
                  )
                }
                color="red"
                size="mini"
                icon
              >
                <Icon name="delete" />
                Cancel
              </Button>
            </Responsive>
          </Table.Row>
        );
      });
  }
  isEmpty(appointment) {
    var empty = appointment.filter(app => {
      return app.date > today && !app.canceled;
    });
    return empty.length === 0 ? true : false;
  }

  render() {
    const { appointment } = this.props;
    const { id, technician, treatment, stripeId, eventId } = this.state;

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
                Upcoming Appointments
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
        <div>
          <div>
            <Modal
              style={{
                width: "800px",
                height: "1200px",
                position: "absolute",
                top: "100px",
                left: "0",
                right: "0",
                bottom: "0",
                margin: "auto"
              }}
              size="small"
              open={this.state.rescheduleToggle}
              onClose={() => this.close()}
            >
              <Modal.Header>Reschedule Appointment</Modal.Header>
              <Modal.Content>
                <Reschedule technician={technician} treatment={treatment} />
              </Modal.Content>
              <Modal.Actions>
                <Button negative onClick={() => this.close()}>
                  No
                </Button>
                <Button
                  positive
                  icon="checkmark"
                  labelPosition="right"
                  content="Yes"
                  onClick={() =>
                    this.reschedule(
                      id,
                      this.props.startTimeValue,
                      this.props.endTimeValue,
                      eventId,
                      technician,
                      treatment
                    )
                  }
                />
              </Modal.Actions>
            </Modal>
            <Modal
              style={{
                width: "400px",
                height: "225px",
                position: "absolute",
                top: "100px",
                left: "0",
                right: "0",
                bottom: "0",
                margin: "auto"
              }}
              size="small"
              open={this.state.cancelToggle}
              onClose={() => this.close()}
            >
              <Modal.Header>Cancel Appointment</Modal.Header>
              <Modal.Content>
                <p>Are you sure you want to cancel appointment?</p>
                <p>You will be fully refunded</p>
              </Modal.Content>
              <Modal.Actions>
                <Button negative onClick={() => this.close()}>
                  No
                </Button>
                <Button
                  positive
                  icon="checkmark"
                  labelPosition="right"
                  content="Yes"
                  onClick={() =>
                    this.cancelAppointment(id, technician, eventId, stripeId)
                  }
                />
              </Modal.Actions>
            </Modal>
          </div>

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
                  Upcoming Appointments
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
        </div>
      );
    }
  }
}

function mapStateToProps({ appointment }) {
  return { appointment };
}

AppointmentList = connect(
  mapStateToProps,
  { fetchAppointment, getAvailableTime }
)(AppointmentList);

const selector = formValueSelector("schedule");
AppointmentList = connect(state => {
  const startTimeValue = selector(state, "startTime");
  const endTimeValue = selector(state, "endTime");
  return {
    startTimeValue,
    endTimeValue
  };
})(AppointmentList);

export default reduxForm({
  form: "schedule", // <------ same form name
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true // <------ unregister fields on unmount
})(AppointmentList);
