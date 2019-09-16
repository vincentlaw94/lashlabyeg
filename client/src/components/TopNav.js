import _ from "lodash";
import React, { Component } from "react";
import { render } from "react-dom";
import {
  Container,
  Icon,
  Image,
  Menu,
  Sidebar,
  Responsive,
  Dropdown
} from "semantic-ui-react";

import "./TopNav.css";
import icon1 from "../images/icon.png";
import icon2 from "../images/elyse.png";
import axios from "axios";
import { withRouter } from "react-router-dom";

const avatar = <Image src={icon2} avatar />;

const NavBarMobile = ({
  children,

  onPusherClick,
  onToggle,
  rightItems,
  visible,
  handleMenu,
  history
}) => (
  <Sidebar.Pushable>
    <Sidebar
      as={Menu}
      animation="overlay"
      icon="labeled"
      inverted
      vertical
      visible={visible}
    >
      <Menu.Item name="Book Appointment" onClick={handleMenu} as="a">
        Book Appointment
      </Menu.Item>
      <Menu.Item as="a" onClick={handleMenu} name="Upcoming Appointments1">
        Upcoming Appointments
      </Menu.Item>

      <Menu.Item as="a" onClick={handleMenu} name="Appointment History">
        Appointment History
      </Menu.Item>

      <Menu.Item as="a" onClick={handleMenu} name="Account Management1">
        Account Management
      </Menu.Item>
    </Sidebar>
    <Sidebar.Pusher
      dimmed={visible}
      onClick={onPusherClick}
      style={{ minHeight: "100vh" }}
    >
      <Menu fixed="top">
        <Menu.Item>
          <Image size="mini" src={icon1} />
        </Menu.Item>
        <Menu.Item onClick={onToggle}>
          <Icon name="sidebar" />
        </Menu.Item>

        <Menu.Menu position="right">
          <Dropdown
            trigger={avatar}
            style={{ position: "relative", right: "50px", top: "15px" }}
          >
            <Dropdown.Menu>
              <Dropdown.Item
                text="Log Out"
                onClick={() =>
                  axios.get("/api/logout").then(res => {
                    history.push("/");
                  })
                }
              />
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Menu>
      </Menu>
      {children}
    </Sidebar.Pusher>
  </Sidebar.Pushable>
);

const NavBarDesktop = ({ leftItems, children, handleMenu, history }) => (
  <Container style={{ paddingBottom: "15px " }}>
    <Menu stackable>
      <Menu.Item as="a">
        <Image size="mini" src={icon1} />
      </Menu.Item>
      <Menu.Item as="a" onClick={handleMenu} name="Book Appointment">
        <Icon size="small" name="calendar alternate" />
        Book Appointment
      </Menu.Item>

      <Menu.Item as="a" onClick={handleMenu} name="Account Management">
        <Icon size="small" name="address card outline" />Account Management
      </Menu.Item>
      <Menu.Menu position="right">
        <Dropdown
          trigger={avatar}
          style={{ position: "relative", right: "50px", top: "15px" }}
        >
          <Dropdown.Menu style={{}}>
            <Dropdown.Item
              onClick={() =>
                axios.get("/api/logout").then(res => {
                  history.push("/");
                })
              }
              text="Log Out"
            />
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Menu>
    </Menu>
  </Container>
);

const NavBarChildren = ({ children }) => (
  <div style={{ marginTop: "80px" }}>{children}</div>
);

class TopNav extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    visible: false
  };

  handlePusher = () => {
    const { visible } = this.state;

    if (visible) this.setState({ visible: false });
  };

  handleToggle = () => this.setState({ visible: !this.state.visible });

  render() {
    const { children } = this.props;
    const { visible } = this.state;

    return (
      <div>
        <Responsive {...Responsive.onlyMobile}>
          <NavBarMobile
            onPusherClick={this.handlePusher}
            onToggle={this.handleToggle}
            visible={visible}
            handleMenu={this.props.handleMenu}
            history={this.props.history}
          >
            <NavBarChildren>{children}</NavBarChildren>
          </NavBarMobile>
        </Responsive>
        <Responsive minWidth={Responsive.onlyTablet.minWidth}>
          <NavBarDesktop
            leftItems={leftItems}
            handleMenu={this.props.handleMenu}
            history={this.props.history}
          />
          {children}
        </Responsive>
      </div>
    );
  }
}

const leftItems = [
  {
    as: "a",
    content: "Book Appointment",
    key: "home",
    icon: "calendar alternate"
  },
  { as: "a", content: "Account Mangement", key: "users", icon: "address card" }
];

export default withRouter(TopNav);
