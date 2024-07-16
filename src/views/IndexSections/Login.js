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


// Define your custom theme
import React from "react";
import { Container, Row, Col, Button, Card, CardBody, FormGroup, Input, InputGroup, InputGroupAddon, InputGroupText } from "reactstrap";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import classnames from "classnames";

class AboutUs extends React.Component {
  state = {};
  render() {
    return (
      <>
        <section className="section section-cnt section-shaped">
          <div className="shape shape-style-1 shape-default"></div>
          <Container className="py-md">
            <Row className="row-grid justify-content-between align-items-center">
              <Col lg="6">
                <div className="px-4 px-md-0">
                  <h3 className="display-9 text-white with-underline1">About us</h3>
                  <p className="leadcnt text-white">
                  Welcome to EVPLAN, your comprehensive solution for electric vehicle infrastructure planning and management
                   in Moroccan and African cities. Our mission is to support the transition to a sustainable future by providing 
                   city planners, EV sector companies, and EV users with powerful tools for identifying optimal charging locations,
                    managing infrastructure, and integrating EV stations into the energy grid. We deliver accurate and reliable data 
                   through an intuitive interface, leveraging advanced analysis to support informed decision-making.
                   Join us in driving the future of electric mobility, one charge at a time.                   </p>
                </div>
              </Col>
              <Col className="mb-lg-auto" lg="5">
                <div className="transform-perspective-right">
                  <Card className="bg-gradient-secondary shadow" style={{padding: "2rem !important;"}}>
                    <CardBody className="p-lg-5" style={{padding: "2rem !important;"}}>
                      <h3 className="display-3 text-black" style={{textAlign:"center"}}>
                        Contact us
                      </h3>
                      <FormGroup className={classnames("mt-5", {focused: this.state.nameFocused})}>
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-circle-08" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Your name"
                            type="text"
                            onFocus={(e) => this.setState({ nameFocused: true })}
                            onBlur={(e) => this.setState({ nameFocused: false })}
                          />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup className={classnames({focused: this.state.emailFocused})}>
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-email-83" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Email address"
                            type="email"
                            onFocus={(e) => this.setState({ emailFocused: true })}
                            onBlur={(e) => this.setState({ emailFocused: false })}
                          />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup className="mb-4">
                        <Input
                          className="form-control-alternative"
                          cols="80"
                          name="name"
                          placeholder="Type a message..."
                          rows="4"
                          type="textarea"
                        />
                      </FormGroup>
                      <div>
                        <Button
                          block
                          className="btn-round"
                          color="default"
                          size="lg"
                          type="button"
                        >
                          Send Message
                        </Button>
                      </div>
                    </CardBody>
                  </Card>
                </div>
              </Col>
            </Row>
            <Row className="row-grid justify-content-between align-items-center mt-2">
  <Col lg="6">
    <div className="px-4 px-md-0">
    <h3 className="display-9 text-white with-underline">Contacts</h3>
      <div className="information">
        <div className="info-item leadcnt">
          <div className="iconinfo"><LocalPhoneIcon /></div>
          <p className=" text-white">+212 (0) 537 68 22 36</p>
        </div>
        <div className="info-item">
          <div className="iconinfo"><EmailIcon /></div>
          <p className=" text-white">contact@greenenergypark.ma</p>
        </div>
        <div className="info-item">
          <div className="iconinfo"><LocationOnIcon /></div>
          <p className=" text-white">Route Régionale R206 Benguerir, Maroc</p>
        </div>
      </div>
    </div>
  </Col>
</Row>


          </Container>
          <div className="separator separator-bottom separator-skew">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon className="fill-white" points="2560 0 2560 100 0 100" />
            </svg>
          </div>
        </section>
      </>
    );
  }
}

export default AboutUs;
