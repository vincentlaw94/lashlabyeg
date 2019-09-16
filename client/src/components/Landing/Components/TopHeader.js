import PropTypes from "prop-types";
import React, { Component } from "react";
import { HashLink as Link } from "react-router-hash-link";
import {
  Button,
  Container,
  Divider,
  Icon,
  Image,
  Menu,
  Responsive,
  Segment,
  Sidebar
} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import Logo from "../images/lashlabyeglogo.jpg";
import Message from "./Message";

class DesktopContainer extends Component {
  state = {};

  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });

  render() {
    const { children } = this.props;

    return (
      <Responsive minWidth={768}>
        <Container style={{ position: "fixed", zIndex: 10 }}>
          <Message />
        </Container>
        <Container textAlign="center">
          <Segment textAlign="center" vertical>
            <p style={{ marginTop: "50px" }} />
            <Image src={Logo} style={{ height: "225px", margin: "auto" }} />

            <Menu size="large" borderless compact color="pink" text>
              <Menu.Item as={Link} to="/#About">
                ABOUT
              </Menu.Item>
              <Menu.Item as={Link} to="/#Services">
                SERVICES
              </Menu.Item>
              <Menu.Item as={Link} to="/#Lashmenu">
                LASH MENU
              </Menu.Item>
              <Menu.Item as={Link} to="/#Contacts">
                CONTACT
              </Menu.Item>
              <Menu.Item as={Link} to="/onlinebooking">
                <Button
                  color="black"
                  compact
                  icon
                  labelPosition="right"
                  size="mini"
                >
                  BOOK ONLINE<Icon name="calendar alternate outline" />
                </Button>
              </Menu.Item>
            </Menu>

            <Divider />
          </Segment>
        </Container>

        {children}
      </Responsive>
    );
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node
};

class MobileContainer extends Component {
  state = {};

  handlePusherClick = () => {
    const { sidebarOpened } = this.state;

    if (sidebarOpened) this.setState({ sidebarOpened: false });
  };

  handleToggle = () =>
    this.setState({ sidebarOpened: !this.state.sidebarOpened });

  render() {
    const { children } = this.props;
    const { sidebarOpened } = this.state;

    return (
      <Responsive maxWidth={767}>
        <Container style={{ position: "fixed", zIndex: 10 }}>
          <Message />
        </Container>
        <Sidebar.Pushable>
          <Sidebar
            as={Menu}
            animation="overlay"
            direction="left"
            inverted
            vertical
            visible={sidebarOpened}
            style={{ zIndex: 11 }}
          >
            <Menu.Item as={Link} to="/#About">
              ABOUT
            </Menu.Item>
            <Menu.Item as={Link} to="/#Services">
              SERVICES
            </Menu.Item>
            <Menu.Item as={Link} to="/#About">
              ABOUT
            </Menu.Item>
            <Menu.Item as={Link} to="/#Services">
              SERVICES
            </Menu.Item>
            <Menu.Item as={Link} to="/#Lashmenu">
              LASH MENU
            </Menu.Item>
            <Menu.Item as={Link} to="/#Contacts">
              CONTACT
            </Menu.Item>
            <Menu.Item as="a">BOOK ONLINE</Menu.Item>
          </Sidebar>

          <Sidebar.Pusher onClick={this.handlePusherClick}>
            <Segment textAlign="center" vertical>
              <Container>
                <Image src={Logo} style={{ marginTop: "100px" }} />
                <Menu size="large" borderless compact color="pink" text>
                  <Menu.Item onClick={this.handleToggle}>
                    <Icon name="sidebar" />
                  </Menu.Item>
                </Menu>
              </Container>
            </Segment>

            {children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Responsive>
    );
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node
};

const TopHeader = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
);

TopHeader.propTypes = {
  children: PropTypes.node
};

export default TopHeader;
