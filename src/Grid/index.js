// @flow
/* globals document, window */

import React from "react";
import classNames from "classnames";
import withStyles from "../withStyles";

type Props = {
  classes: Object,
  className: string,
  fluid?: boolean,
  gutter?: boolean,
  spacing?: number
};

const GridContent = ({
  classes,
  className,
  fluid,
  children,
  gutter,
  spacing = 16
}: Props) => {
  return (
    <div
      className={classNames(
        className,
        classes.container,
        fluid ? classes.container_fluid : null
      )}
    >
      {children}
    </div>
  );
};

const stylesGrid = theme => ({
  container_fluid: {
    padding: props => `0 ${props.spacing}px`
  },
  container: {
    marginRight: "auto",
    marginLeft: "auto",
    boxSizing: "border-box",
    maxWidth: "1200px",
    boxSizing: "inherit"
  }
});
export default withStyles(stylesGrid)(GridContent);
