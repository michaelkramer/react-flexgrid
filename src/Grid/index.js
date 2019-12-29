// @flow
/* globals document, window */

import React from "react";
import classNames from "classnames";
import withStyles from "../withStyles";

type $Props = {|
  classes: Object,
  className: string,
  fluid?: boolean,
  gutter?: boolean,
  children: any,
|};

const GridContent = ({
  classes,
  className,
  fluid,
  children,
  gutter,
}: $Props) => {
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

const stylesGrid = (theme) => ({
  container_fluid: {
    padding: `0 ${theme.spacing.unit}px`,
  },
  container: {
    marginRight: "auto",
    marginLeft: "auto",
    boxSizing: "border-box",
    maxWidth: "1200px",
    boxSizing: "inherit",
  },
});

export default withStyles(stylesGrid)(GridContent);
