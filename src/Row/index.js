// @flow
/* globals document, window */

import React from "react";
import classNames from "classnames";
import withStyles from "../withStyles";

const RowContent = ({ classes, className, reverse, children }: Props) => (
  <div
    className={classNames(
      className,
      classes.row,
      reverse ? classes.row_reverse : null
    )}
  >
    {children}
  </div>
);

const stylesRow = theme => {
  const sm = {
    start_sm: {
      WebkitBoxPack: "start",
      MsFlexPack: "start",
      justifyContent: "flex-start",
      textAlign: "start"
    },
    center_sm: {
      WebkitBoxPack: "center",
      MsFlexPack: "center",
      justifyContent: "center",
      textAlign: "center"
    },
    end_sm: {
      WebkitBoxPack: "end",
      MsFlexPack: "end",
      justifyContent: "flex-end",
      textAlign: "end"
    },
    top_sm: {
      WebkitBoxAlign: "start",
      MsFlexAlign: "start",
      alignItems: "flex-start"
    },
    middle_sm: {
      WebkitBoxAlign: "center",
      MsFlexAlign: "center",
      alignItems: "center"
    },
    bottom_sm: {
      WebkitBoxAlign: "end",
      MsFlexAlign: "end",
      alignItems: "flex-end"
    },
    around_sm: { MsFlexPack: "distribute", justifyContent: "space-around" },
    between_sm: {
      WebkitBoxPack: "justify",
      MsFlexPack: "justify",
      justifyContent: "space-between"
    },
    first_sm: { WebkitBoxOrdinalGroup: "0", MsFlexOrder: "-1", order: "-1" },
    last_sm: { WebkitBoxOrdinalGroup: "2", MsFlexOrder: "1", order: "1" }
  };
  
  return {
    row: {
      boxSizing: "border-box",
      display: "flex",
      WebkitBoxFlex: "0",
      MsFlex: "0 1 auto",
      flex: "0 1 auto",
      WebkitBoxOrient: "horizontal",
      WebkitBoxDirection: "normal",
      MsFlexDirection: "row",
      flexDirection: "row",
      MsFlexWrap: "wrap",
      flexWrap: "wrap",
      marginRight: `-${theme.spacing.unit * 0.5}px`,
      marginLeft: `-${theme.spacing.unit * 0.5}px`
    },
    row_reverse: {
      WebkitBoxOrient: "horizontal",
      WebkitBoxDirection: "reverse",
      MsFlexDirection: "row-reverse",
      flexDirection: "row-reverse"
    },
    {...sm}
  };
}

export default withStyles(stylesRow)(RowContent);
