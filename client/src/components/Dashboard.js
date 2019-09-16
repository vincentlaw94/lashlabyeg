import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import AuthForm from "./AuthForm/SignUpForm";
import TopNav from "./TopNav";
import AppointmentForm from "./AppointmentForm/AppointmentForm";
import AccountMenu from "./Dashboard/AccountMenu";
import UpcomingAppointment from "./Dashboard/AppointmentList";
import AppointmentHistory from "./Dashboard/AppointmentHistory";
import AccountManagement from "./Dashboard/AccountMangement";
import { StripeProvider, Elements } from "react-stripe-elements";

import { fetchAppointment, submitUpdate } from "../actions";
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = { page: "Book Appointment" };
    this.handleMenu = this.handleMenu.bind(this);
  }
  componentDidMount() {
    this.props.fetchAppointment();
  }

  handleMenu(e, { name }) {
    this.setState({ page: name });
  }

  renderDashboard() {
    if (this.props.auth === false) {
      return <Redirect to="/login" />;
    }
    if (this.props.auth.waiver === false) return <AuthForm />;
    else if (this.state.page === "Book Appointment")
      return (
        <StripeProvider apiKey="pk_test_tpJy37RdzZMIuZGZeB5QvXnF">
          <Elements>
            <AppointmentForm />
          </Elements>
        </StripeProvider>
      );
    else if (this.state.page === "Account Management") {
      return <AccountMenu />;
    } else if (this.state.page === "Upcoming Appointments1")
      return <UpcomingAppointment />;
    else if (this.state.page === "Appointment History")
      return <AppointmentHistory />;
    else if (this.state.page === "Account Management1")
      return <AccountManagement />;
    else return null;
  }
  render() {
    return (
      <div>
        <TopNav handleMenu={this.handleMenu}>{this.renderDashboard()}</TopNav>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(
  mapStateToProps,
  { fetchAppointment, submitUpdate }
)(Dashboard);
