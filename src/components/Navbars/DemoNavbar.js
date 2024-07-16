/*!

=========================================================
* Argon Design System React - v1.1.2
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { Link } from "react-router-dom";
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";

// reactstrap components
import {
  Button,
  UncontrolledCollapse,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  Nav,
  Row,
  Col,
} from "reactstrap";

class DemoNavbar extends React.Component {
  componentDidMount() {
    let headroom = new Headroom(document.getElementById("navbar-main"));
    // initialise
    headroom.init();
  }
  state = {
    collapseClasses: "",
    collapseOpen: false,
  };

  onExiting = () => {
    this.setState({
      collapseClasses: "collapsing-out",
    });
  };

  onExited = () => {
    this.setState({
      collapseClasses: "",
    });
  };

  render() {
    return (
      <>
        <header className="header-global MuiBox-root css-1yv1dw1">
          <Navbar
            className="navbar-main navbar-transparent navbar-light headroom"
            expand="lg"
            id="navbar-main"
          >
            <NavbarBrand className="mr-lg-5" to="/" tag={Link}>
              <img
                alt="..."
                src={require("assets/img/theme/logoevplaner.png")}
                height="90px"
                style={{ width: "auto", height: "135px", marginLeft : "6.2 cm"  }} // Adjust width and height as needed
              />
            </NavbarBrand>

            <button className="navbar-toggler" id="navbar_global">
              <span className="navbar-toggler-icon" />
            </button>
            <UncontrolledCollapse
              toggler="#navbar_global"
              navbar
              className={this.state.collapseClasses}
              onExiting={this.onExiting}
              onExited={this.onExited}
            >
              <div className="navbar-collapse-header">
                <Row>
                  <Col className="collapse-brand" xs="6">
                    <Link to="/">
                      <img
                        alt="..."
                        src={require("assets/img/theme/Logo.png")}
                      />
                    </Link>
                  </Col>
                  <Col className="collapse-close" xs="6">
                    <button className="navbar-toggler" id="navbar_global">
                      <span />
                      <span />
                    </button>
                  </Col>
                </Row>
              </div>
              <Nav
                className="navbar-nav-hover align-items-lg-center ml-auto mr-10cm"
                navbar
              >
                <UncontrolledDropdown nav>
                  <Link to="/">
                    <DropdownToggle nav>
                      <span className="nav-link-inner--text" to="/">
                        Home
                      </span>
                    </DropdownToggle>
                  </Link>
                </UncontrolledDropdown>
                <UncontrolledDropdown nav>
                  <DropdownToggle nav>
                    <i className="ni ni-collection d-lg-none mr-1" />
                    <span className="nav-link-inner--text">Services</span>
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem to="" tag={Link}>
                      EV-hub
                    </DropdownItem>
                    <DropdownItem to="" tag={Link}>
                      EV-user
                    </DropdownItem>
                    <DropdownItem to="" tag={Link}>
                      EV-planer
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <UncontrolledDropdown nav>
                  <DropdownToggle nav>
                    <span className="nav-link-inner--text">About us</span>
                  </DropdownToggle>
                </UncontrolledDropdown>
                <UncontrolledDropdown nav>
                  <DropdownToggle nav>
                    <span className="nav-link-inner--text">Contact us</span>
                  </DropdownToggle>
                </UncontrolledDropdown>
              </Nav>
              <Nav className="align-items-lg-center ml-lg-auto" navbar>
                <NavItem className="d-none d-lg-block ml-lg-4">
                  <Button
                    className="btn-neutral btn-icon"
                    color="default"
                    to="/login-page"
                    tag={Link}
                    target="_blank"
                    style={{ marginLeft: "-7cm" }}
                  >
                    <span className="nav-link-inner--text ml-1 ">Login</span>
                  </Button>
                </NavItem>
              </Nav>
            </UncontrolledCollapse>
          </Navbar>
        </header>
      </>
    );
  }
}

export default DemoNavbar;
