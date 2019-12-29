//import React from "react";
export default {
  responsive: `
    <Row>
      <Col xs={12} sm={3} md={2} lg={1} />
      <Col xs={6} sm={6} md={8} lg={10} />
      <Col xs={6} sm={3} md={2} lg={1} />
    </Row>`,
  offset: `
    <Row>
      <Col xsOffset={11} xs={1} />
      <Col xsOffset={10} xs={2} />
      <Col xsOffset={9} xs={3} />
      <Col xsOffset={8} xs={4} />
      <Col xsOffset={7} xs={5} />
      <Col xsOffset={6} xs={6} />
      <Col xsOffset={5} xs={7} />
      <Col xsOffset={4} xs={8} />
      <Col xsOffset={3} xs={9} />
      <Col xsOffset={2} xs={10} />
      <Col xsOffset={1} xs={11} />
    </Row>
  `,
  autoWidth: `
    <Row>
      <Col xs />
      <Col xs />
    </Row>
    <Row>
      <Col xs />
      <Col xs />
      <Col xs />
    </Row>
  `,
  alignBottom: `
    <Row bottom="xs">
      <Col xs={6} />
      <Col xs={6} />
    </Row>`,
  alignStart: `
    <Row>
      <Col xs={12}>
        <Row start="xs">
          <Col xs={6} />
        </Row>
      </Col>
    <Row>`,
  alignCenter: `
    <Row>
      <Col xs={12}>
        <Row center="xs">
          <Col xs={6} />
        </Row>
      </Col>
    </Row>`,
  alignEnd: `
  <Row>
    <Col xs={12}>
      <Row end="xs">
        <Col xs={6} />
      </Row>
    </Col>
  </Row>`,
  top: `
    <Row top="xs">
      <Col xs={6} />
      <Col xs={6} />
    <Row>`,
  middle: `
    <Row middle="xs">
      <Col xs={6} />
      <Col xs={6} />
    <Row>`,
  bottom: `
    <Row bottom="xs">
      <Col xs={6} />
      <Col xs={6} />
    <Row>`,
  around: `
    <Row around="xs">
      <Col xs={2} />
      <Col xs={2} />
      <Col xs={2} />
    <Row>`,
  between: `
    <Row between="xs">
      <Col xs={2} />
      <Col xs={2} />
      <Col xs={2} />
    <Row>`,
};
