import React, { Component } from "react";
import { Grid, Row, Col, ThemeProvider } from "react-flexgrid";

export default class App extends Component {
  render() {
    return (
      <ThemeProvider theme={{ breakpoint: { sm: 2 } }}>
        <div>
          <Grid fluid>
            <Row>
              <Col xs={12} sm={3} md={2} lg={1}>
                <Box />
              </Col>
              <Col xs={6} sm={6} md={8} lg={10}>
                <Box />
              </Col>
              <Col xs={6} sm={3} md={2} lg={1}>
                <Box />
              </Col>
            </Row>
            <Row>
              <Col xs={12} sm={3} md={2} lg={1}>
                <Box />
              </Col>
              <Col xs={12} sm={9} md={10} lg={11}>
                <Box />
              </Col>
            </Row>
            <Row>
              <Col xs={10} sm={6} md={8} lg={10}>
                <Box />
              </Col>
              <Col xs={2} sm={6} md={4} lg={2}>
                <Box />
              </Col>
            </Row>
          </Grid>
        </div>
      </ThemeProvider>
    );
  }
}

const Box = () => (
  <div
    style={{ backgroundColor: "slateBlue", padding: "16px", margin: "16px" }}
  >
    &nbsp;
  </div>
);
