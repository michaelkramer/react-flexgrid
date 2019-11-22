import React, { Fragment } from "react";
import { Grid, Row, Col, ThemeProvider, withStyles } from "react-flexgrid";
import MD from "./markdown";

const styles = (theme) => ({
  headerWrap: {
    padding: theme.spacing.unit * 4,
    textAlign: "center",
    fontSize: theme.spacing.unit * 2,
    backgroundColor: "slateblue",
    fontFamily: `"Josefin Sans",Verdana,sans-serif`,
  },
  homeWrap: { fontFamily: `"Josefin Sans",Verdana,sans-serif` },
});

class BodyContent extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <header>
          <Grid fluid className={classes.headerWrap}>
            <Row>
              <Col xs={12}>
                <h2>This is a simple flexgrid. react-flexgrid</h2>
                <div>A flexgrid with Grid, Row &amp; Col using JSS</div>
              </Col>
            </Row>
          </Grid>
        </header>
        <article>
          <Grid fluid className={classes.homeWrap}>
            <Section
              title="Responsive"
              description="Responsive modifiers enable specifying different column sizes, offsets, alignment and distribution at xs, sm, md, lg & xl viewport widths."
            >
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
              <Row>
                <Markdown html={MD.responsive} />
              </Row>
            </Section>
            <Section title="Offsets" description="Offset a column.">
              <Row>
                <Col xsOffset={11} xs={1}>
                  <Box />
                </Col>
                <Col xsOffset={10} xs={2}>
                  <Box />
                </Col>
                <Col xsOffset={9} xs={3}>
                  <Box />
                </Col>
                <Col xsOffset={8} xs={4}>
                  <Box />
                </Col>
                <Col xsOffset={7} xs={5}>
                  <Box />
                </Col>
                <Col xsOffset={6} xs={6}>
                  <Box />
                </Col>
                <Col xsOffset={5} xs={7}>
                  <Box />
                </Col>
                <Col xsOffset={4} xs={8}>
                  <Box />
                </Col>
                <Col xsOffset={3} xs={9}>
                  <Box />
                </Col>
                <Col xsOffset={2} xs={10}>
                  <Box />
                </Col>
                <Col xsOffset={1} xs={11}>
                  <Box />
                </Col>
              </Row>
              <Row>
                <Markdown html={MD.offset} />
              </Row>
            </Section>
            <Section
              title="Auto Width"
              description="Add any number of auto sizing columns to a row. Let the grid figure it out."
            >
              <Row>
                <Col xs>
                  <Box />
                </Col>
                <Col xs>
                  <Box />
                </Col>
              </Row>
              <Row>
                <Col xs>
                  <Box />
                </Col>
                <Col xs>
                  <Box />
                </Col>
                <Col xs>
                  <Box />
                </Col>
              </Row>
              <Row>
                <Markdown html={MD.autoWidth} />
              </Row>
            </Section>
            <Section
              title="Alignment"
              description="Add classes to align elements to the start or end of row as well as the top, bottom, or center of a column"
            >
              <h3>
                <code>.start-</code>
              </h3>
              <Row>
                <Col xs={12}>
                  <Box color="darkslateblue">
                    <Row start="xs">
                      <Col xs={6}>
                        <Box />
                      </Col>
                    </Row>
                  </Box>
                </Col>
              </Row>
              <Row>
                <Markdown html={MD.alignStart} />
              </Row>
              <h3>
                <code>.center-</code>
              </h3>
              <Row>
                <Col xs={12}>
                  <Box color="darkslateblue">
                    <Row center="xs">
                      <Col xs={6}>
                        <Box />
                      </Col>
                    </Row>
                  </Box>
                </Col>
              </Row>
              <Row>
                <Markdown html={MD.alignCenter} />
              </Row>
              <h3>
                <code>.end-</code>
              </h3>
              <Row>
                <Col xs={12}>
                  <Box color="darkslateblue">
                    <Row end="xs">
                      <Col xs={6}>
                        <Box />
                      </Col>
                    </Row>
                  </Box>
                </Col>
              </Row>
              <Row>
                <Markdown html={MD.alignEnd} />
              </Row>
              <h3>
                <code>.top-</code>
              </h3>
              <Row top="xs">
                <Col xs={6}>
                  <Box />
                  <Box />
                  <Box />
                </Col>
                <Col xs={6}>
                  <Box />
                </Col>
              </Row>
              <Row>
                <Markdown html={MD.top} />
              </Row>
              <h3>
                <code>.middle-</code>
              </h3>
              <Row middle="xs">
                <Col xs={6}>
                  <Box />
                  <Box />
                  <Box />
                </Col>
                <Col xs={6}>
                  <Box />
                </Col>
              </Row>
              <Row>
                <Markdown html={MD.middle} />
              </Row>
              <h3>
                <code>.bottom-</code>
              </h3>
              <Row bottom="xs">
                <Col xs={6}>
                  <Box />
                  <Box />
                  <Box />
                </Col>
                <Col xs={6}>
                  <Box />
                </Col>
              </Row>
              <Row>
                <Markdown html={MD.alignBottom} />
              </Row>
            </Section>
            <Section
              title="Distribution"
              description="Add classes to distribute the contents of a row or column."
            >
              <h3>
                <code>.around-</code>
              </h3>
              <Row>
                <Col xs={12}>
                  <Box color="darkslateblue">
                    <Row around="xs">
                      <Col xs={2}>
                        <Box />
                      </Col>
                      <Col xs={2}>
                        <Box />
                      </Col>
                      <Col xs={2}>
                        <Box />
                      </Col>
                    </Row>
                  </Box>
                </Col>
              </Row>
              <Row>
                <Markdown html={MD.around} />
              </Row>
              <h3>
                <code>.between-</code>
              </h3>
              <Row>
                <Col xs={12}>
                  <Box color="darkslateblue">
                    <Row between="xs">
                      <Col xs={2}>
                        <Box />
                      </Col>
                      <Col xs={2}>
                        <Box />
                      </Col>
                      <Col xs={2}>
                        <Box />
                      </Col>
                    </Row>
                  </Box>
                </Col>
              </Row>
              <Row>
                <Markdown html={MD.between} />
              </Row>
            </Section>
          </Grid>
        </article>
      </Fragment>
    );
  }
}

const Box = (props) => (
  <div
    style={{
      backgroundColor: props.color ? props.color : "slateBlue",
      padding: "16px",
      margin: "16px",
    }}
  >
    {props.children ? props.children : " "}
  </div>
);

const Section = (props) => {
  return (
    <section className={"style_section"}>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      {props.children}
    </section>
  );
};

const htmlEntities = (str) => {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
};

const Markdown = (props) => {
  const html = {
    __html: htmlEntities(props.html),
  };
  return <pre dangerouslySetInnerHTML={html} />;
};

const Body = withStyles(styles)(BodyContent);

export default class App extends React.Component {
  render() {
    return (
      <Fragment>
        <link
          href="https://fonts.googleapis.com/css?family=Josefin+Sans&amp;subset=latin,latin-ext"
          rel="stylesheet"
          type="text/css"
        ></link>
        <ThemeProvider>
          <Body />
        </ThemeProvider>
      </Fragment>
    );
  }
}
