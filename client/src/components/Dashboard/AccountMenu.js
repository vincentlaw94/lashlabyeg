import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Menu, Segment } from "semantic-ui-react";

import UpcomingAppointments from "./AppointmentList";
import AccountHistory from "./AppointmentHistory";
import AccountManagement from "./AccountMangement";

import { fetchAppointment, submitUpdate } from "../../actions";

class AccountMenu extends Component {
  constructor(props) {
    super(props);
    this.state = { activeItem: "Upcoming Appointments" };
  }

  renderPage(activeItem) {
    switch (activeItem) {
      case "Upcoming Appointments":
        return <UpcomingAppointments />;
      case "History":
        return <AccountHistory />;
      case "Account Settings":
        return (
          <AccountManagement
            initialValues={this.props.auth.info}
            onSubmit={v => this.props.submitUpdate(v)}
          />
        );
      default:
        return null;
    }
  }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Container>
        <Segment>
          <Menu tabular>
            <Menu.Item
              name="Upcoming Appointments"
              active={activeItem === "Upcoming Appointments"}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name="History"
              active={activeItem === "History"}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name="Account Settings"
              active={activeItem === "Account Settings"}
              onClick={this.handleItemClick}
            />
          </Menu>
          {this.renderPage(this.state.activeItem)}
        </Segment>
      </Container>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(
  mapStateToProps,
  { fetchAppointment, submitUpdate }
)(AccountMenu);
