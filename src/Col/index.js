// @flow
/* globals document, window */

import React from "react";
import classNames from "classnames";
import withStyles from "../withStyles";

const ColContent = ({
  classes,
  className,
  xs,
  sm,
  md,
  lg,
  xsOffset,
  smOffset,
  mdOffset,
  lgOffset,
  xsSelfAlign,
  smSelfAlign,
  mdSelfAlign,
  lgSelfAlign,
  children
}: Props) => {
  const colClasses = {
    xs: {
      1: classes.col_xs_1,
      2: classes.col_xs_2,
      3: classes.col_xs_3,
      4: classes.col_xs_4,
      5: classes.col_xs_5,
      6: classes.col_xs_6,
      7: classes.col_xs_7,
      8: classes.col_xs_8,
      9: classes.col_xs_9,
      10: classes.col_xs_10,
      11: classes.col_xs_11,
      12: classes.col_xs_12
    },
    xsOffset: {
      0: classes.col_xs_offset_0,
      1: classes.col_xs_offset_1,
      2: classes.col_xs_offset_2,
      3: classes.col_xs_offset_3,
      4: classes.col_xs_offset_4,
      5: classes.col_xs_offset_5,
      6: classes.col_xs_offset_6,
      7: classes.col_xs_offset_7,
      8: classes.col_xs_offset_8,
      9: classes.col_xs_offset_9,
      10: classes.col_xs_offset_10,
      11: classes.col_xs_offset_11,
      12: classes.col_xs_offset_12
    },
    xsSelfAlign: {
      start: classes.col_xs_align_start,
      center: classes.col_xs_align_center,
      end: classes.col_xs_align_end
    },
    sm: {
      1: classes.col_sm_1,
      2: classes.col_sm_2,
      3: classes.col_sm_3,
      4: classes.col_sm_4,
      5: classes.col_sm_5,
      6: classes.col_sm_6,
      7: classes.col_sm_7,
      8: classes.col_sm_8,
      9: classes.col_sm_9,
      10: classes.col_sm_10,
      11: classes.col_sm_11,
      12: classes.col_sm_12
    },
    smOffset: {
      0: classes.col_sm_offset_0,
      1: classes.col_sm_offset_1,
      2: classes.col_sm_offset_2,
      3: classes.col_sm_offset_3,
      4: classes.col_sm_offset_4,
      5: classes.col_sm_offset_5,
      6: classes.col_sm_offset_6,
      7: classes.col_sm_offset_7,
      8: classes.col_sm_offset_8,
      9: classes.col_sm_offset_9,
      10: classes.col_sm_offset_10,
      11: classes.col_sm_offset_11,
      12: classes.col_sm_offset_12
    },
    smSelfAlign: {
      start: classes.col_sm_align_start,
      center: classes.col_sm_align_center,
      end: classes.col_sm_align_end
    },
    md: {
      1: classes.col_md_1,
      2: classes.col_md_2,
      3: classes.col_md_3,
      4: classes.col_md_4,
      5: classes.col_md_5,
      6: classes.col_md_6,
      7: classes.col_md_7,
      8: classes.col_md_8,
      9: classes.col_md_9,
      10: classes.col_md_10,
      11: classes.col_md_11,
      12: classes.col_md_12
    },
    mdOffset: {
      0: classes.col_md_offset_0,
      1: classes.col_md_offset_1,
      2: classes.col_md_offset_2,
      3: classes.col_md_offset_3,
      4: classes.col_md_offset_4,
      5: classes.col_md_offset_5,
      6: classes.col_md_offset_6,
      7: classes.col_md_offset_7,
      8: classes.col_md_offset_8,
      9: classes.col_md_offset_9,
      10: classes.col_md_offset_10,
      11: classes.col_md_offset_11,
      12: classes.col_md_offset_12
    },
    mdSelfAlign: {
      start: classes.col_md_align_start,
      center: classes.col_md_align_center,
      end: classes.col_md_align_end
    },
    lg: {
      1: classes.col_lg_1,
      2: classes.col_lg_2,
      3: classes.col_lg_3,
      4: classes.col_lg_4,
      5: classes.col_lg_5,
      6: classes.col_lg_6,
      7: classes.col_lg_7,
      8: classes.col_lg_8,
      9: classes.col_lg_9,
      10: classes.col_lg_10,
      11: classes.col_lg_11,
      12: classes.col_lg_12
    },
    lgOffset: {
      0: classes.col_lg_offset_0,
      1: classes.col_lg_offset_1,
      2: classes.col_lg_offset_2,
      3: classes.col_lg_offset_3,
      4: classes.col_lg_offset_4,
      5: classes.col_lg_offset_5,
      6: classes.col_lg_offset_6,
      7: classes.col_lg_offset_7,
      8: classes.col_lg_offset_8,
      9: classes.col_lg_offset_9,
      10: classes.col_lg_offset_10,
      11: classes.col_lg_offset_11,
      12: classes.col_lg_offset_12
    },
    lgSelfAlign: {
      start: classes.col_lg_align_start,
      center: classes.col_lg_align_center,
      end: classes.col_lg_align_end
    }
  };

  const css = [classes.col, classes.gutter];
  css.push(colClasses["xs"][xs]);
  css.push(colClasses["sm"][sm]);
  css.push(colClasses["md"][md]);
  css.push(colClasses["lg"][lg]);
  css.push(colClasses["xsOffset"][xsOffset]);
  css.push(colClasses["smOffset"][smOffset]);
  css.push(colClasses["mdOffset"][mdOffset]);
  css.push(colClasses["lgOffset"][lgOffset]);
  css.push(colClasses["xsSelfAlign"][xsSelfAlign]);
  css.push(colClasses["smSelfAlign"][smSelfAlign]);
  css.push(colClasses["mdSelfAlign"][mdSelfAlign]);
  css.push(colClasses["lgSelfAlign"][lgSelfAlign]);
  if (className) {
    css.push(className);
  }
  return <div className={classNames(css)}>{children}</div>;
};

const stylesCol = theme => {
  const base = {
    col: {
      boxSizing: "inherit",
      WebkitBoxFlex: "1",
      MsFlexPositive: "1",
      flexGrow: "1",
      MsFlexPreferredSize: "0",
      flexBasis: "0",
      maxWidth: "100%"
    },
    gutter: { padding: `0 ${theme.spacing.unit * 0.5}px;` }
  };
  const colXs = {
    col_xs_1: {
      MsFlexPreferredSize: "8.33333333%",
      flexBasis: "8.33333333%",
      maxWidth: "8.33333333%"
    },
    col_xs_2: {
      MsFlexPreferredSize: "16.66666667%",
      flexBasis: "16.66666667%",
      maxWidth: "16.66666667%"
    },
    col_xs_3: { MsFlexPreferredSize: "25%", flexBasis: "25%", maxWidth: "25%" },
    col_xs_4: {
      MsFlexPreferredSize: "33.33333333%",
      flexBasis: "33.33333333%",
      maxWidth: "33.33333333%"
    },
    col_xs_5: {
      MsFlexPreferredSize: "41.66666667%",
      flexBasis: "41.66666667%",
      maxWidth: "41.66666667%"
    },
    col_xs_6: { MsFlexPreferredSize: "50%", flexBasis: "50%", maxWidth: "50%" },
    col_xs_7: {
      MsFlexPreferredSize: "58.33333333%",
      flexBasis: "58.33333333%",
      maxWidth: "58.33333333%"
    },
    col_xs_8: {
      MsFlexPreferredSize: "66.66666667%",
      flexBasis: "66.66666667%",
      maxWidth: "66.66666667%"
    },
    col_xs_9: { MsFlexPreferredSize: "75%", flexBasis: "75%", maxWidth: "75%" },
    col_xs_10: {
      MsFlexPreferredSize: "83.33333333%",
      flexBasis: "83.33333333%",
      maxWidth: "83.33333333%"
    },
    col_xs_11: {
      MsFlexPreferredSize: "91.66666667%",
      flexBasis: "91.66666667%",
      maxWidth: "91.66666667%"
    },
    col_xs_12: {
      MsFlexPreferredSize: "100%",
      flexBasis: "100%",
      maxWidth: "100%"
    }
  };
  const colXsExtras = {
    col_xs_offset_0: { marginLeft: "0" },
    col_xs_offset_1: { marginLeft: "8.33333333%" },
    col_xs_offset_2: { marginLeft: "16.66666667%" },
    col_xs_offset_3: { marginLeft: "25%" },
    col_xs_offset_4: { marginLeft: "33.33333333%" },
    col_xs_offset_5: { marginLeft: "41.66666667%" },
    col_xs_offset_6: { marginLeft: "50%" },
    col_xs_offset_7: { marginLeft: "58.33333333%" },
    col_xs_offset_8: { marginLeft: "66.66666667%" },
    col_xs_offset_9: { marginLeft: "75%" },
    col_xs_offset_10: { marginLeft: "83.33333333%" },
    col_xs_offset_11: { marginLeft: "91.66666667%" },
    col_xs_offset_12: {
      boxSizing: "border-box",
      WebkitBoxFlex: "0",
      MsFlex: "0 0 auto",
      flex: "0 0 auto"
    },
    col_xs_align_start: {
      alignSelf: "flex-start",
      textAlign: "start"
    },
    col_xs_align_center: {
      alignSelf: "flex-center",
      textAlign: "center"
    },
    col_xs_align_end: {
      alignSelf: "flex-end",
      textAlign: "end"
    }
  };
  const colSm = {
    col_sm_1: {
      [theme.breakpoints(theme.breakpoint.sm)]: {
        MsFlexPreferredSize: "8.33333333%",
        flexBasis: "8.33333333%",
        maxWidth: "8.33333333%"
      }
    },
    col_sm_2: {
      [theme.breakpoints(theme.breakpoint.sm)]: {
        MsFlexPreferredSize: "16.66666667%",
        flexBasis: "16.66666667%",
        maxWidth: "16.66666667%"
      }
    },
    col_sm_3: {
      [theme.breakpoints(theme.breakpoint.sm)]: {
        MsFlexPreferredSize: "25%",
        flexBasis: "25%",
        maxWidth: "25%"
      }
    },
    col_sm_4: {
      [theme.breakpoints(theme.breakpoint.sm)]: {
        MsFlexPreferredSize: "33.33333333%",
        flexBasis: "33.33333333%",
        maxWidth: "33.33333333%"
      }
    },
    col_sm_5: {
      [theme.breakpoints(theme.breakpoint.sm)]: {
        MsFlexPreferredSize: "41.66666667%",
        flexBasis: "41.66666667%",
        maxWidth: "41.66666667%"
      }
    },
    col_sm_6: {
      [theme.breakpoints(theme.breakpoint.sm)]: {
        MsFlexPreferredSize: "50%",
        flexBasis: "50%",
        maxWidth: "50%"
      }
    },
    col_sm_7: {
      [theme.breakpoints(theme.breakpoint.sm)]: {
        MsFlexPreferredSize: "58.33333333%",
        flexBasis: "58.33333333%",
        maxWidth: "58.33333333%"
      }
    },
    col_sm_8: {
      [theme.breakpoints(theme.breakpoint.sm)]: {
        MsFlexPreferredSize: "66.66666667%",
        flexBasis: "66.66666667%",
        maxWidth: "66.66666667%"
      }
    },
    col_sm_9: {
      [theme.breakpoints(theme.breakpoint.sm)]: {
        MsFlexPreferredSize: "75%",
        flexBasis: "75%",
        maxWidth: "75%"
      }
    },
    col_sm_10: {
      [theme.breakpoints(theme.breakpoint.sm)]: {
        MsFlexPreferredSize: "83.33333333%",
        flexBasis: "83.33333333%",
        maxWidth: "83.33333333%"
      }
    },
    col_sm_11: {
      [theme.breakpoints(theme.breakpoint.sm)]: {
        MsFlexPreferredSize: "91.66666667%",
        flexBasis: "91.66666667%",
        maxWidth: "91.66666667%"
      }
    },
    col_sm_12: {
      [theme.breakpoints(theme.breakpoint.sm)]: {
        MsFlexPreferredSize: "100%",
        flexBasis: "100%",
        maxWidth: "100%"
      }
    }
  };
  const colSmExtras = {
    col_sm_offset_0: {
      [theme.breakpoints(theme.breakpoint.sm)]: { marginLeft: "0" }
    },
    col_sm_offset_1: {
      [theme.breakpoints(theme.breakpoint.sm)]: { marginLeft: "8.33333333%" }
    },
    col_sm_offset_2: {
      [theme.breakpoints(theme.breakpoint.sm)]: { marginLeft: "16.66666667%" }
    },
    col_sm_offset_3: {
      [theme.breakpoints(theme.breakpoint.sm)]: { marginLeft: "25%" }
    },
    col_sm_offset_4: {
      [theme.breakpoints(theme.breakpoint.sm)]: { marginLeft: "33.33333333%" }
    },
    col_sm_offset_5: {
      [theme.breakpoints(theme.breakpoint.sm)]: { marginLeft: "41.66666667%" }
    },
    col_sm_offset_6: {
      [theme.breakpoints(theme.breakpoint.sm)]: { marginLeft: "50%" }
    },
    col_sm_offset_7: {
      [theme.breakpoints(theme.breakpoint.sm)]: { marginLeft: "58.33333333%" }
    },
    col_sm_offset_8: {
      [theme.breakpoints(theme.breakpoint.sm)]: { marginLeft: "66.66666667%" }
    },
    col_sm_offset_9: {
      [theme.breakpoints(theme.breakpoint.sm)]: { marginLeft: "75%" }
    },
    col_sm_offset_10: {
      [theme.breakpoints(theme.breakpoint.sm)]: { marginLeft: "83.33333333%" }
    },
    col_sm_offset_11: {
      [theme.breakpoints(theme.breakpoint.sm)]: { marginLeft: "91.66666667%" }
    },
    col_sm_offset_12: {
      [theme.breakpoints(theme.breakpoint.sm)]: {
        boxSizing: "border-box",
        WebkitBoxFlex: "0",
        MsFlex: "0 0 auto",
        flex: "0 0 auto"
      }
    },
    col_sm_align_start: {
      [theme.breakpoints(theme.breakpoint.sm)]: {
        alignSelf: "flex-start",
        textAlign: "start"
      }
    },
    col_sm_align_center: {
      [theme.breakpoints(theme.breakpoint.sm)]: {
        alignSelf: "flex-center",
        textAlign: "center"
      }
    },
    col_sm_align_end: {
      [theme.breakpoints(theme.breakpoint.sm)]: {
        alignSelf: "flex-end",
        textAlign: "end"
      }
    }
  };
  const colMd = {
    col_md_1: {
      [theme.breakpoints(theme.breakpoint.md)]: {
        MsFlexPreferredSize: "8.33333333%",
        flexBasis: "8.33333333%",
        maxWidth: "8.33333333%"
      }
    },
    col_md_2: {
      [theme.breakpoints(theme.breakpoint.md)]: {
        MsFlexPreferredSize: "16.66666667%",
        flexBasis: "16.66666667%",
        maxWidth: "16.66666667%"
      }
    },
    col_md_3: {
      [theme.breakpoints(theme.breakpoint.md)]: {
        MsFlexPreferredSize: "25%",
        flexBasis: "25%",
        maxWidth: "25%"
      }
    },
    col_md_4: {
      [theme.breakpoints(theme.breakpoint.md)]: {
        MsFlexPreferredSize: "33.33333333%",
        flexBasis: "33.33333333%",
        maxWidth: "33.33333333%"
      }
    },
    col_md_5: {
      [theme.breakpoints(theme.breakpoint.md)]: {
        MsFlexPreferredSize: "41.66666667%",
        flexBasis: "41.66666667%",
        maxWidth: "41.66666667%"
      }
    },
    col_md_6: {
      [theme.breakpoints(theme.breakpoint.md)]: {
        MsFlexPreferredSize: "50%",
        flexBasis: "50%",
        maxWidth: "50%"
      }
    },
    col_md_7: {
      [theme.breakpoints(theme.breakpoint.md)]: {
        MsFlexPreferredSize: "58.33333333%",
        flexBasis: "58.33333333%",
        maxWidth: "58.33333333%"
      }
    },
    col_md_8: {
      [theme.breakpoints(theme.breakpoint.md)]: {
        MsFlexPreferredSize: "66.66666667%",
        flexBasis: "66.66666667%",
        maxWidth: "66.66666667%"
      }
    },
    col_md_9: {
      [theme.breakpoints(theme.breakpoint.md)]: {
        MsFlexPreferredSize: "75%",
        flexBasis: "75%",
        maxWidth: "75%"
      }
    },
    col_md_10: {
      [theme.breakpoints(theme.breakpoint.md)]: {
        MsFlexPreferredSize: "83.33333333%",
        flexBasis: "83.33333333%",
        maxWidth: "83.33333333%"
      }
    },
    col_md_11: {
      [theme.breakpoints(theme.breakpoint.md)]: {
        MsFlexPreferredSize: "91.66666667%",
        flexBasis: "91.66666667%",
        maxWidth: "91.66666667%"
      }
    },
    col_md_12: {
      [theme.breakpoints(theme.breakpoint.md)]: {
        MsFlexPreferredSize: "100%",
        flexBasis: "100%",
        maxWidth: "100%"
      }
    }
  };
  const colMdExtras = {
    col_md_offset_0: {
      [theme.breakpoints(theme.breakpoint.md)]: { marginLeft: "0" }
    },
    col_md_offset_1: {
      [theme.breakpoints(theme.breakpoint.md)]: { marginLeft: "8.33333333%" }
    },
    col_md_offset_2: {
      [theme.breakpoints(theme.breakpoint.md)]: { marginLeft: "16.66666667%" }
    },
    col_md_offset_3: {
      [theme.breakpoints(theme.breakpoint.md)]: { marginLeft: "25%" }
    },
    col_md_offset_4: {
      [theme.breakpoints(theme.breakpoint.md)]: { marginLeft: "33.33333333%" }
    },
    col_md_offset_5: {
      [theme.breakpoints(theme.breakpoint.md)]: { marginLeft: "41.66666667%" }
    },
    col_md_offset_6: {
      [theme.breakpoints(theme.breakpoint.md)]: { marginLeft: "50%" }
    },
    col_md_offset_7: {
      [theme.breakpoints(theme.breakpoint.md)]: { marginLeft: "58.33333333%" }
    },
    col_md_offset_8: {
      [theme.breakpoints(theme.breakpoint.md)]: { marginLeft: "66.66666667%" }
    },
    col_md_offset_9: {
      [theme.breakpoints(theme.breakpoint.md)]: { marginLeft: "75%" }
    },
    col_md_offset_10: {
      [theme.breakpoints(theme.breakpoint.md)]: { marginLeft: "83.33333333%" }
    },
    col_md_offset_11: {
      [theme.breakpoints(theme.breakpoint.md)]: { marginLeft: "91.66666667%" }
    },
    col_md_offset_12: {
      [theme.breakpoints(theme.breakpoint.md)]: {
        boxSizing: "border-box",
        WebkitBoxFlex: "0",
        MsFlex: "0 0 auto",
        flex: "0 0 auto"
      }
    },
    col_md_align_start: {
      [theme.breakpoints(theme.breakpoint.md)]: {
        alignSelf: "flex-start",
        textAlign: "start"
      }
    },
    col_md_align_center: {
      [theme.breakpoints(theme.breakpoint.md)]: {
        alignSelf: "flex-center",
        textAlign: "center"
      }
    },
    col_md_align_end: {
      [theme.breakpoints(theme.breakpoint.md)]: {
        alignSelf: "flex-end",
        textAlign: "end"
      }
    }
  };
  const colLg = {
    col_lg_1: {
      [theme.breakpoints(theme.breakpoint.lg)]: {
        MsFlexPreferredSize: "8.33333333%",
        flexBasis: "8.33333333%",
        maxWidth: "8.33333333%"
      }
    },
    col_lg_2: {
      [theme.breakpoints(theme.breakpoint.lg)]: {
        MsFlexPreferredSize: "16.66666667%",
        flexBasis: "16.66666667%",
        maxWidth: "16.66666667%"
      }
    },
    col_lg_3: {
      [theme.breakpoints(theme.breakpoint.lg)]: {
        MsFlexPreferredSize: "25%",
        flexBasis: "25%",
        maxWidth: "25%"
      }
    },
    col_lg_4: {
      [theme.breakpoints(theme.breakpoint.lg)]: {
        MsFlexPreferredSize: "33.33333333%",
        flexBasis: "33.33333333%",
        maxWidth: "33.33333333%"
      }
    },
    col_lg_5: {
      [theme.breakpoints(theme.breakpoint.lg)]: {
        MsFlexPreferredSize: "41.66666667%",
        flexBasis: "41.66666667%",
        maxWidth: "41.66666667%"
      }
    },
    col_lg_6: {
      [theme.breakpoints(theme.breakpoint.lg)]: {
        MsFlexPreferredSize: "50%",
        flexBasis: "50%",
        maxWidth: "50%"
      }
    },
    col_lg_7: {
      [theme.breakpoints(theme.breakpoint.lg)]: {
        MsFlexPreferredSize: "58.33333333%",
        flexBasis: "58.33333333%",
        maxWidth: "58.33333333%"
      }
    },
    col_lg_8: {
      [theme.breakpoints(theme.breakpoint.lg)]: {
        MsFlexPreferredSize: "66.66666667%",
        flexBasis: "66.66666667%",
        maxWidth: "66.66666667%"
      }
    },
    col_lg_9: {
      [theme.breakpoints(theme.breakpoint.lg)]: {
        MsFlexPreferredSize: "75%",
        flexBasis: "75%",
        maxWidth: "75%"
      }
    },
    col_lg_10: {
      [theme.breakpoints(theme.breakpoint.lg)]: {
        MsFlexPreferredSize: "83.33333333%",
        flexBasis: "83.33333333%",
        maxWidth: "83.33333333%"
      }
    },
    col_lg_11: {
      [theme.breakpoints(theme.breakpoint.lg)]: {
        MsFlexPreferredSize: "91.66666667%",
        flexBasis: "91.66666667%",
        maxWidth: "91.66666667%"
      }
    },
    col_lg_12: {
      [theme.breakpoints(theme.breakpoint.lg)]: {
        MsFlexPreferredSize: "100%",
        flexBasis: "100%",
        maxWidth: "100%"
      }
    }
  };
  const colLgExtras = {
    col_lg_offset_0: {
      [theme.breakpoints(theme.breakpoint.lg)]: { marginLeft: "0" }
    },
    col_lg_offset_1: {
      [theme.breakpoints(theme.breakpoint.lg)]: { marginLeft: "8.33333333%" }
    },
    col_lg_offset_2: {
      [theme.breakpoints(theme.breakpoint.lg)]: { marginLeft: "16.66666667%" }
    },
    col_lg_offset_3: {
      [theme.breakpoints(theme.breakpoint.lg)]: { marginLeft: "25%" }
    },
    col_lg_offset_4: {
      [theme.breakpoints(theme.breakpoint.lg)]: { marginLeft: "33.33333333%" }
    },
    col_lg_offset_5: {
      [theme.breakpoints(theme.breakpoint.lg)]: { marginLeft: "41.66666667%" }
    },
    col_lg_offset_6: {
      [theme.breakpoints(theme.breakpoint.lg)]: { marginLeft: "50%" }
    },
    col_lg_offset_7: {
      [theme.breakpoints(theme.breakpoint.lg)]: { marginLeft: "58.33333333%" }
    },
    col_lg_offset_8: {
      [theme.breakpoints(theme.breakpoint.lg)]: { marginLeft: "66.66666667%" }
    },
    col_lg_offset_9: {
      [theme.breakpoints(theme.breakpoint.lg)]: { marginLeft: "75%" }
    },
    col_lg_offset_10: {
      [theme.breakpoints(theme.breakpoint.lg)]: { marginLeft: "83.33333333%" }
    },
    col_lg_offset_11: {
      [theme.breakpoints(theme.breakpoint.lg)]: { marginLeft: "91.66666667%" }
    },
    col_lg_offset_12: {
      [theme.breakpoints(theme.breakpoint.lg)]: {
        boxSizing: "border-box",
        WebkitBoxFlex: "0",
        MsFlex: "0 0 auto",
        flex: "0 0 auto"
      }
    },
    col_lg_align_start: {
      [theme.breakpoints(theme.breakpoint.lg)]: {
        alignSelf: "flex-start",
        textAlign: "start"
      }
    },
    col_lg_align_center: {
      [theme.breakpoints(theme.breakpoint.lg)]: {
        alignSelf: "flex-center",
        textAlign: "center"
      }
    },
    col_lg_align_end: {
      [theme.breakpoints(theme.breakpoint.lg)]: {
        alignSelf: "flex-end",
        textAlign: "end"
      }
    }
  };
  return {
    ...base,
    ...colXs,
    ...colXsExtras,
    ...colSm,
    ...colSmExtras,
    ...colMd,
    ...colMdExtras,
    ...colLg,
    ...colLgExtras
  };
};
export default withStyles(stylesCol)(ColContent);
