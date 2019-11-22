// @flow
/* globals document, window */

import React from "react";
import classNames from "classnames";
import withStyles from "../withStyles";

type $Props = {|
  classes: Object,
  className: string,
  reverse?: boolean,
  start?: string,
  center?: string,
  end?: string,
  top?: string,
  middle?: string,
  bottom?: string,
  around?: string,
  between?: string,
  first?: string,
  last?: string,
  children: any,
|};

const RowContent = ({
  classes,
  className,
  reverse,
  start,
  center,
  end,
  top,
  middle,
  bottom,
  around,
  between,
  first,
  last,
  children,
}: $Props) => {
  const colClasses = {
    start: {
      xs: classes.start_xs,
      sm: classes.start_sm,
      md: classes.start_md,
      lg: classes.start_lg,
    },
    center: {
      xs: classes.center_xs,
      sm: classes.center_sm,
      md: classes.center_md,
      lg: classes.center_lg,
    },
    end: {
      xs: classes.end_xs,
      sm: classes.end_sm,
      md: classes.end_md,
      lg: classes.end_lg,
    },
    top: {
      xs: classes.top_xs,
      sm: classes.top_sm,
      md: classes.top_md,
      lg: classes.top_lg,
    },
    middle: {
      xs: classes.middle_xs,
      sm: classes.middle_sm,
      md: classes.middle_md,
      lg: classes.middle_lg,
    },
    bottom: {
      xs: classes.bottom_xs,
      sm: classes.bottom_sm,
      md: classes.bottom_md,
      lg: classes.bottom_lg,
    },
    around: {
      xs: classes.around_xs,
      sm: classes.around_sm,
      md: classes.around_md,
      lg: classes.around_lg,
    },
    between: {
      xs: classes.between_xs,
      sm: classes.between_sm,
      md: classes.between_md,
      lg: classes.between_lg,
    },
  };

  const css = [className, classes.row];
  if (reverse) {
    css.push(classes.row_reverse);
  }
  if (start) {
    css.push(colClasses["start"][start]);
  }
  if (center) {
    css.push(colClasses["center"][center]);
  }
  if (end) {
    css.push(colClasses["end"][end]);
  }
  if (top) {
    css.push(colClasses["top"][top]);
  }
  if (middle) {
    css.push(colClasses["middle"][middle]);
  }
  if (bottom) {
    css.push(colClasses["bottom"][bottom]);
  }
  if (around) {
    css.push(colClasses["around"][around]);
  }
  if (between) {
    css.push(colClasses["between"][between]);
  }

  return <div className={classNames(css)}>{children}</div>;
};

const setStyleExtras = (size: string) => {
  return JSON.parse(`
  {
    "start_${size}": {
      "[theme.breakpoints(theme.breakpoint.${size})]": {
        "WebkitBoxPack": "start",
        "MsFlexPack": "start",
        "justifyContent": "flex-start",
        "textAlign": "start"
      }
    },
    "center_${size}": {
      "[theme.breakpoints(theme.breakpoint.${size})]": {
        "WebkitBoxPack": "center",
        "MsFlexPack": "center",
        "justifyContent": "center",
        "textAlign": "center"
      }
    },
    "end_${size}": {
      "[theme.breakpoints(theme.breakpoint.${size})]": {
        "WebkitBoxPack": "end",
        "MsFlexPack": "end",
        "justifyContent": "flex-end",
        "textAlign": "end"
      }
    },
    "top_${size}": {
      "[theme.breakpoints(theme.breakpoint.${size})]": {
        "WebkitBoxAlign": "start",
        "MsFlexAlign": "start",
        "alignItems": "flex-start"
      }
    },
    "middle_${size}": {
      "[theme.breakpoints(theme.breakpoint.${size})]": {
        "WebkitBoxAlign": "center",
        "MsFlexAlign": "center",
        "alignItems": "center"
      }
    },
    "bottom_${size}": {
      "[theme.breakpoints(theme.breakpoint.${size})]": {
        "WebkitBoxAlign": "end",
        "MsFlexAlign": "end",
        "alignItems": "flex-end"
      }
    },
    "around_${size}": {
      "[theme.breakpoints(theme.breakpoint.${size})]": {
        "MsFlexPack": "distribute",
        "justifyContent": "space-around"
      }
    },
    "between_${size}": {
      "[theme.breakpoints(theme.breakpoint.${size})]": {
        "WebkitBoxPack": "justify",
        "MsFlexPack": "justify",
        "justifyContent": "space-between"
      }
    },
    "first_${size}": {
      "[theme.breakpoints(theme.breakpoint.${size})]": {
        "WebkitBoxOrdinalGroup": "0",
        "MsFlexOrder": "-1",
        "order": "-1"
      }
    },
    "last_${size}": {
      "[theme.breakpoints(theme.breakpoint.${size})]": {
        "WebkitBoxOrdinalGroup": "2",
        "MsFlexOrder": "1",
        "order": "1"
      }
    }
  }
  `);
};

const stylesRow = (theme) => {
  const sm = setStyleExtras("sm");
  const md = setStyleExtras("md");
  const lg = setStyleExtras("lg");
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
      marginLeft: `-${theme.spacing.unit * 0.5}px`,
    },
    row_reverse: {
      WebkitBoxOrient: "horizontal",
      WebkitBoxDirection: "reverse",
      MsFlexDirection: "row-reverse",
      flexDirection: "row-reverse",
    },

    start_xs: {
      WebkitBoxPack: "start",
      MsFlexPack: "start",
      justifyContent: "flex-start",
      textAlign: "start",
    },
    center_xs: {
      WebkitBoxPack: "center",
      MsFlexPack: "center",
      justifyContent: "center",
      textAlign: "center",
    },
    end_xs: {
      WebkitBoxPack: "end",
      MsFlexPack: "end",
      justifyContent: "flex-end",
      textAlign: "end",
    },
    top_xs: {
      WebkitBoxAlign: "start",
      MsFlexAlign: "start",
      alignItems: "flex-start",
    },
    middle_xs: {
      WebkitBoxAlign: "center",
      MsFlexAlign: "center",
      alignItems: "center",
    },
    bottom_xs: {
      WebkitBoxAlign: "end",
      MsFlexAlign: "end",
      alignItems: "flex-end",
    },
    around_xs: {
      MsFlexPack: "distribute",
      justifyContent: "space-around",
    },
    between_xs: {
      WebkitBoxPack: "justify",
      MsFlexPack: "justify",
      justifyContent: "space-between",
    },
    first_xs: {
      WebkitBoxOrdinalGroup: "0",
      MsFlexOrder: "-1",
      order: "-1",
    },
    last_xs: {
      WebkitBoxOrdinalGroup: "2",
      MsFlexOrder: "1",
      order: "1",
    },
    ...sm,
    ...md,
    ...lg,
  };
};

export default withStyles(stylesRow)(RowContent);
