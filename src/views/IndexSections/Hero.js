import React from "react";
import evplaner from "../../assets/img/theme/evplaner.png";
import evuser from "../../assets/img/theme/evuser.png";
import auxser from "../../assets/img/theme/graph.jpg";
import logo1 from "../../assets/img/theme/pngwing.com.png"; // Replace with actual logo path
import logo2 from "../../assets/img/theme/iresenlogo.png"; // Replace with actual logo path
import logo3 from "../../assets/img/theme/cdtilogo.jpg"; // Replace with actual logo path
import logo4 from "../../assets/img/theme/zunderlogo.png"; // Replace with actual logo path
import Login from "../IndexSections/Login.js";

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import Tabs from "../IndexSections/Tabs.js";
import Cards from "./Cards.js";
import DemoNavbar from "components/Navbars/DemoNavbar.js";

class Landing extends React.Component {
  state = {};
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <main ref="main">
          <div className="position-relative">
            {/* shape Hero */}
            <section className="section section-lg section-shaped pb-250">
              <div className="shape  shape-default"></div>
              <Container className="py-lg-md d-flex">
                <div className="col px-0">
                  <Row>
                    <Col lg="6" style={{ marginTop: "0.7cm" }}>
                      <h1
                        className="display-3 text-white"
                        style={{ whiteSpace: "nowrap" }}
                      >
                        Discover Your EV Charging Oasis :
                        <span>Explore Our Suite of Solutions</span>
                      </h1>
                      <p className="lead text-white">
                        engage with the world’s largest community of ev drivers
                        with our suite of solutions to help with your
                        advertising, data, and research needs.
                      </p>
                      <div className="btn-wrapper">
                        <Button
                          className="btn-icon mb-3 mb-sm-0"
                          color="info"
                          href=""
                        >
                          <span className="btn-inner--text">GET STARTED</span>
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Container>
              {/* SVG separator */}
              <div className="separator separator-bottom separator-skew">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  x="0"
                  y="0"
                >
                  <polygon
                    className="fill-white"
                    points="2560 0 2560 100 0 100"
                  />
                </svg>
              </div>
            </section>
            {/* 1st Hero Variation */}
          </div>
          <section className="section section-lg pt-lg-0 mt--200">
            <Container style={{ marginTop: "0.5cm" }}>
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid">
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <a href="http://localhost:3001">
                          <Cards
                            title="EV-USER"
                            description="Locate nearby EV charging stations with our interactive map. Get details on availability, charging speeds, and user reviews to keep your electric vehicle powered on the go."
                            image={evuser}
                          />
                        </a>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <a href="http://localhost:5173">
                          <Cards
                            title="EV-PLANNER"
                            description="Utilize analytics to find optimal EV charging locations. Enhance accessibility, meet demand, and drive sustainable urban growth."
                            image={evplaner}
                          />
                        </a>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <a href="http://localhost:3002/#/">
                          <Cards
                            title="ANCILLIARY SERVICES "
                            description="Explore the pivotal role of EV charging stations in enhancing grid stability and efficiency through ancillary services provision."
                            image={auxser}
                          />
                        </a>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
          <Login />
        </main>
        <footer className="footer" style={{ minHeight: "100px" }}>
          <Row
            className="justify-content-around align-items-center text-center"
            style={{ margin: 0 }}
          >
            <Col lg="2" md="3" xs="6" className="my-3">
              <img src={logo2} alt="Logo 2" style={{ maxHeight: "50px" }} />
            </Col>
            <Col lg="2" md="3" xs="6" className="my-3">
              <img src={logo1} alt="Logo 1" style={{ maxHeight: "50px" }} />
            </Col>
            <Col lg="2" md="3" xs="6" className="my-3">
              <img src={logo4} alt="Logo 3" style={{ maxHeight: "50px" }} />
            </Col>

            <Col lg="2" md="3" xs="6" className="my-3">
              <img src={logo3} alt="Logo 3" style={{ maxHeight: "50px" }} />
            </Col>
          </Row>
          <Row className="text-center mt-4">
            <Col>
              <p className="text-muted">
                © {new Date().getFullYear()} EVPLAN. All rights reserved.
              </p>
            </Col>
          </Row>
        </footer>
      </>
    );
  }
}

export default Landing;
