import _ from "lodash";
import React, { Component } from "react";
import { render } from "react-dom";
import {
  Container,
  Icon,
  Image,
  Menu,
  Sidebar,
  Responsive
} from "semantic-ui-react";

import icon1 from '../images/icon.png';
import icon2 from '../images/elyse.png';

const avatar =(<Image src={icon2} avatar />)

const NavBarMobile = ({
  children,
  leftItems,
  rightItems,
  visible
}) => (

      <Menu fixed="top" >
        <Menu.Item>
          <Image size="mini" src={icon1} />
        </Menu.Item>

        <Menu.Menu position="right">
          {_.map(rightItems, item => <Menu.Item {...item} />)}
        </Menu.Menu>
      </Menu>
      {children}


);

const NavBarDesktop = ({ leftItems, rightItems }) => (
  <Menu fixed="top" >
    <Menu.Item>
      <Image size="mini" src={icon1} />
    </Menu.Item>
    {_.map(leftItems, item => <Menu.Item {...item} />)}
    <Menu.Menu position="right">
      {_.map(rightItems, item => <Menu.Item {...item} />)}
      <Dropdown trigger={avatar} pointing="top right">
         <Dropdown.Menu>
           <Dropdown.Item text="Log Out"/>

         </Dropdown.Menu>
       </Dropdown>
    </Menu.Menu>
  </Menu>
);

const NavBarChildren = ({ children }) => (
  <Container style={{ marginTop: "5em" }}>{children}</Container>
);

class NavBar extends Component {




  render() {
    const { children, leftItems, rightItems } = this.props;


    return (
      <div>
        <Responsive {...Responsive.onlyMobile}>
          <NavBarMobile
            leftItems={leftItems}


            rightItems={rightItems}

          >
            <NavBarChildren>{children}</NavBarChildren>
          </NavBarMobile>
        </Responsive>
        <Responsive minWidth={Responsive.onlyTablet.minWidth}>
          <NavBarDesktop leftItems={leftItems} rightItems={rightItems} />
          <NavBarChildren>{children}</NavBarChildren>
        </Responsive>
      </div>
    );
  }
}

const leftItems = [
  { as: "a", content: "Home", key: "home" },
  { as: "a", content: "Users", key: "users" }
];
const rightItems = [
  { as: "a", content: "Login", key: "login" },
  { as: "a", content: "Register", key: "register" }
];
