// @flow
/* globals document, window */

import React from "react";
import classNames from "classnames";
import withStyles from "../withStyles";

type $Props = {|
  classes: Object,
  className: string,
  xs?: number,
  sm?: number,
  md?: number,
  lg?: number,
  xsOffset?: number,
  smOffset?: number,
  mdOffset?: number,
  lgOffset?: number,
  xsSelfAlign?: "start" | "center" | "end",
  smSelfAlign?: "start" | "center" | "end",
  mdSelfAlign?: "start" | "center" | "end",
  lgSelfAlign?: "start" | "center" | "end",
  children: any,
|};

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
  children,
}: $Props) => {
  const colClasses = {
    xs: {
      col1: classes.col_xs_1,
      col2: classes.col_xs_2,
      col3: classes.col_xs_3,
      col4: classes.col_xs_4,
      col5: classes.col_xs_5,
      col6: classes.col_xs_6,
      col7: classes.col_xs_7,
      col8: classes.col_xs_8,
      col9: classes.col_xs_9,
      col10: classes.col_xs_10,
      col11: classes.col_xs_11,
      col12: classes.col_xs_12,
    },
    xsOffset: {
      col0: classes.col_xs_offset_0,
      col1: classes.col_xs_offset_1,
      col2: classes.col_xs_offset_2,
      col3: classes.col_xs_offset_3,
      col4: classes.col_xs_offset_4,
      col5: classes.col_xs_offset_5,
      col6: classes.col_xs_offset_6,
      col7: classes.col_xs_offset_7,
      col8: classes.col_xs_offset_8,
      col9: classes.col_xs_offset_9,
      col10: classes.col_xs_offset_10,
      col11: classes.col_xs_offset_11,
      col12: classes.col_xs_offset_12,
    },
    xsSelfAlign: {
      start: classes.col_xs_align_start,
      center: classes.col_xs_align_center,
      end: classes.col_xs_align_end,
    },
    sm: {
      col1: classes.col_sm_1,
      col2: classes.col_sm_2,
      col3: classes.col_sm_3,
      col4: classes.col_sm_4,
      col5: classes.col_sm_5,
      col6: classes.col_sm_6,
      col7: classes.col_sm_7,
      col8: classes.col_sm_8,
      col9: classes.col_sm_9,
      col10: classes.col_sm_10,
      col11: classes.col_sm_11,
      col12: classes.col_sm_12,
    },
    smOffset: {
      col0: classes.col_sm_offset_0,
      col1: classes.col_sm_offset_1,
      col2: classes.col_sm_offset_2,
      col3: classes.col_sm_offset_3,
      col4: classes.col_sm_offset_4,
      col5: classes.col_sm_offset_5,
      col6: classes.col_sm_offset_6,
      col7: classes.col_sm_offset_7,
      col8: classes.col_sm_offset_8,
      col9: classes.col_sm_offset_9,
      col10: classes.col_sm_offset_10,
      col11: classes.col_sm_offset_11,
      col12: classes.col_sm_offset_12,
    },
    smSelfAlign: {
      start: classes.col_sm_align_start,
      center: classes.col_sm_align_center,
      end: classes.col_sm_align_end,
    },
    md: {
      col1: classes.col_md_1,
      col2: classes.col_md_2,
      col3: classes.col_md_3,
      col4: classes.col_md_4,
      col5: classes.col_md_5,
      col6: classes.col_md_6,
      col7: classes.col_md_7,
      col8: classes.col_md_8,
      col9: classes.col_md_9,
      col10: classes.col_md_10,
      col11: classes.col_md_11,
      col12: classes.col_md_12,
    },
    mdOffset: {
      col0: classes.col_md_offset_0,
      col1: classes.col_md_offset_1,
      col2: classes.col_md_offset_2,
      col3: classes.col_md_offset_3,
      col4: classes.col_md_offset_4,
      col5: classes.col_md_offset_5,
      col6: classes.col_md_offset_6,
      col7: classes.col_md_offset_7,
      col8: classes.col_md_offset_8,
      col9: classes.col_md_offset_9,
      col10: classes.col_md_offset_10,
      col11: classes.col_md_offset_11,
      col12: classes.col_md_offset_12,
    },
    mdSelfAlign: {
      start: classes.col_md_align_start,
      center: classes.col_md_align_center,
      end: classes.col_md_align_end,
    },
    lg: {
      col1: classes.col_lg_1,
      col2: classes.col_lg_2,
      col3: classes.col_lg_3,
      col4: classes.col_lg_4,
      col5: classes.col_lg_5,
      col6: classes.col_lg_6,
      col7: classes.col_lg_7,
      col8: classes.col_lg_8,
      col9: classes.col_lg_9,
      col10: classes.col_lg_10,
      col11: classes.col_lg_11,
      col12: classes.col_lg_12,
    },
    lgOffset: {
      col0: classes.col_lg_offset_0,
      col1: classes.col_lg_offset_1,
      col2: classes.col_lg_offset_2,
      col3: classes.col_lg_offset_3,
      col4: classes.col_lg_offset_4,
      col5: classes.col_lg_offset_5,
      col6: classes.col_lg_offset_6,
      col7: classes.col_lg_offset_7,
      col8: classes.col_lg_offset_8,
      col9: classes.col_lg_offset_9,
      col10: classes.col_lg_offset_10,
      col11: classes.col_lg_offset_11,
      col12: classes.col_lg_offset_12,
    },
    lgSelfAlign: {
      start: classes.col_lg_align_start,
      center: classes.col_lg_align_center,
      end: classes.col_lg_align_end,
    },
  };

  const css = [classes.col, classes.gutter];
  if (xs) {
    css.push(colClasses["xs"][`col${xs}`]);
  }
  if (sm) {
    css.push(colClasses["sm"][`col${sm}`]);
  }
  if (md) {
    css.push(colClasses["md"][`col${md}`]);
  }
  if (lg) {
    css.push(colClasses["lg"][`col${lg}`]);
  }
  if (xsOffset) {
    css.push(colClasses["xsOffset"][`col${xsOffset}`]);
  }
  if (smOffset) {
    css.push(colClasses["smOffset"][`col${smOffset}`]);
  }
  if (mdOffset) {
    css.push(colClasses["mdOffset"][`col${mdOffset}`]);
  }
  if (lgOffset) {
    css.push(colClasses["lgOffset"][`col${lgOffset}`]);
  }
  if (xsSelfAlign) {
    css.push(colClasses["xsSelfAlign"][xsSelfAlign]);
  }
  if (smSelfAlign) {
    css.push(colClasses["smSelfAlign"][smSelfAlign]);
  }
  if (mdSelfAlign) {
    css.push(colClasses["mdSelfAlign"][mdSelfAlign]);
  }
  if (lgSelfAlign) {
    css.push(colClasses["lgSelfAlign"][lgSelfAlign]);
  }
  if (className) {
    css.push(className);
  }
  return <div className={classNames(css)}>{children}</div>;
};

const setStyleExtras = (size: string) => {
  return JSON.parse(`{
    "col_${size}_1": {
      "[theme.breakpoints(theme.breakpoint.${size})]": {
        "MsFlexPreferredSize": "8.33333333%", 
        "flexBasis": "8.33333333%", 
        "maxWidth": "8.33333333%"
      }
    },
    "col_${size}_2": {
      "[theme.breakpoints(theme.breakpoint.${size})]": {
        "MsFlexPreferredSize": "16.66666667%",
        "flexBasis": "16.66666667%",
        "maxWidth": "16.66666667%"
      }
    },
    "col_${size}_3": {
      "[theme.breakpoints(theme.breakpoint.${size})]": {
        "MsFlexPreferredSize": "25%",
        "flexBasis": "25%",
        "maxWidth": "25%"
      }
    },
    "col_${size}_4": {
      "[theme.breakpoints(theme.breakpoint.${size})]": {
        "MsFlexPreferredSize": "33.33333333%",
        "flexBasis": "33.33333333%",
        "maxWidth": "33.33333333%"
      }
    },
    "col_${size}_5": {
      "[theme.breakpoints(theme.breakpoint.${size})]": {
        "MsFlexPreferredSize": "41.66666667%",
        "flexBasis": "41.66666667%",
        "maxWidth": "41.66666667%"
      }
    },
    "col_${size}_6": {
      "[theme.breakpoints(theme.breakpoint.${size})]": {
        "MsFlexPreferredSize": "50%",
        "flexBasis": "50%",
        "maxWidth": "50%"
      }
    },
    "col_${size}_7": {
      "[theme.breakpoints(theme.breakpoint.${size})]": {
        "MsFlexPreferredSize": "58.33333333%",
        "flexBasis": "58.33333333%",
        "maxWidth": "58.33333333%"
      }
    },
    "col_${size}_8": {
      "[theme.breakpoints(theme.breakpoint.${size})]": {
        "MsFlexPreferredSize": "66.66666667%",
        "flexBasis": "66.66666667%",
        "maxWidth": "66.66666667%"
      }
    },
    "col_${size}_9": {
      "[theme.breakpoints(theme.breakpoint.${size})]": {
        "MsFlexPreferredSize": "75%",
        "flexBasis": "75%",
        "maxWidth": "75%"
      }
    },
    "col_${size}_10": {
      "[theme.breakpoints(theme.breakpoint.${size})]": {
        "MsFlexPreferredSize": "83.33333333%",
        "flexBasis": "83.33333333%",
        "maxWidth": "83.33333333%"
      }
    },
    "col_${size}_11": {
      "[theme.breakpoints(theme.breakpoint.${size})]": {
        "MsFlexPreferredSize": "91.66666667%",
        "flexBasis": "91.66666667%",
        "maxWidth": "91.66666667%"
      }
    },
    "col_${size}_12": {
      "[theme.breakpoints(theme.breakpoint.${size})]": {
        "MsFlexPreferredSize": "100%",
        "flexBasis": "100%",
        "maxWidth": "100%"
      }
    },
    "col_${size}_offset_0": {
      "[theme.breakpoints(theme.breakpoint.${size})]": { "marginLeft": "0" }
    },
    "col_${size}_offset_1": {
      "[theme.breakpoints(theme.breakpoint.${size})]": { "marginLeft": "8.33333333%" }
    },
    "col_${size}_offset_2": {
      "[theme.breakpoints(theme.breakpoint.${size})]": { "marginLeft": "16.66666667%" }
    },
    "col_${size}_offset_3": {
      "[theme.breakpoints(theme.breakpoint.${size})]": { "marginLeft": "25%" }
    },
    "col_${size}_offset_4": {
      "[theme.breakpoints(theme.breakpoint.${size})]": { "marginLeft": "33.33333333%" }
    },
    "col_${size}_offset_5": {
      "[theme.breakpoints(theme.breakpoint.${size})]": { "marginLeft": "41.66666667%" }
    },
    "col_${size}_offset_6": {
      "[theme.breakpoints(theme.breakpoint.${size})]": { "marginLeft": "50%" }
    },
    "col_${size}_offset_7": {
      "[theme.breakpoints(theme.breakpoint.${size})]": { "marginLeft": "58.33333333%" }
    },
    "col_${size}_offset_8": {
      "[theme.breakpoints(theme.breakpoint.${size})]": { "marginLeft": "66.66666667%" }
    },
    "col_${size}_offset_9": {
      "[theme.breakpoints(theme.breakpoint.${size})]": { "marginLeft": "75%" }
    },
    "col_${size}_offset_10": {
      "[theme.breakpoints(theme.breakpoint.${size})]": { "marginLeft": "83.33333333%" }
    },
    "col_${size}_offset_11": {
      "[theme.breakpoints(theme.breakpoint.${size})]": { "marginLeft": "91.66666667%" }
    },
    "col_${size}_offset_12": {
      "[theme.breakpoints(theme.breakpoint.${size})]": {
        "boxSizing": "border-box",
        "WebkitBoxFlex": "0",
        "MsFlex": "0 0 auto",
        "flex": "0 0 auto"
      }
    },
    "col_${size}_align_start": {
      "[theme.breakpoints(theme.breakpoint.${size})]": {
        "alignSelf": "flex-start",
        "textAlign": "start"
      }
    },
    "col_${size}_align_center": {
      "[theme.breakpoints(theme.breakpoint.${size})]": {
        "alignSelf": "flex-center",
        "textAlign": "center"
      }
    },
    "col_${size}_align_end": {
      "[theme.breakpoints(theme.breakpoint.${size})]": {
        "alignSelf": "flex-end",
        "textAlign": "end"
      }
    }
  }`);
};

const stylesCol = (theme) => {
  const sm = setStyleExtras("sm");
  const md = setStyleExtras("md");
  const lg = setStyleExtras("lg");
  const base = {
    col: {
      boxSizing: "inherit",
      WebkitBoxFlex: "1",
      MsFlexPositive: "1",
      flexGrow: "1",
      MsFlexPreferredSize: "0",
      flexBasis: "0",
      maxWidth: "100%",
    },
    gutter: { padding: `0 ${theme.spacing.unit * 0.5}px;` },
  };
  const colXs = {
    col_xs_1: {
      MsFlexPreferredSize: "8.33333333%",
      flexBasis: "8.33333333%",
      maxWidth: "8.33333333%",
    },
    col_xs_2: {
      MsFlexPreferredSize: "16.66666667%",
      flexBasis: "16.66666667%",
      maxWidth: "16.66666667%",
    },
    col_xs_3: { MsFlexPreferredSize: "25%", flexBasis: "25%", maxWidth: "25%" },
    col_xs_4: {
      MsFlexPreferredSize: "33.33333333%",
      flexBasis: "33.33333333%",
      maxWidth: "33.33333333%",
    },
    col_xs_5: {
      MsFlexPreferredSize: "41.66666667%",
      flexBasis: "41.66666667%",
      maxWidth: "41.66666667%",
    },
    col_xs_6: { MsFlexPreferredSize: "50%", flexBasis: "50%", maxWidth: "50%" },
    col_xs_7: {
      MsFlexPreferredSize: "58.33333333%",
      flexBasis: "58.33333333%",
      maxWidth: "58.33333333%",
    },
    col_xs_8: {
      MsFlexPreferredSize: "66.66666667%",
      flexBasis: "66.66666667%",
      maxWidth: "66.66666667%",
    },
    col_xs_9: { MsFlexPreferredSize: "75%", flexBasis: "75%", maxWidth: "75%" },
    col_xs_10: {
      MsFlexPreferredSize: "83.33333333%",
      flexBasis: "83.33333333%",
      maxWidth: "83.33333333%",
    },
    col_xs_11: {
      MsFlexPreferredSize: "91.66666667%",
      flexBasis: "91.66666667%",
      maxWidth: "91.66666667%",
    },
    col_xs_12: {
      MsFlexPreferredSize: "100%",
      flexBasis: "100%",
      maxWidth: "100%",
    },
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
      flex: "0 0 auto",
    },
    col_xs_align_start: {
      alignSelf: "flex-start",
      textAlign: "start",
    },
    col_xs_align_center: {
      alignSelf: "flex-center",
      textAlign: "center",
    },
    col_xs_align_end: {
      alignSelf: "flex-end",
      textAlign: "end",
    },
  };

  return {
    ...base,
    ...colXs,
    ...colXsExtras,
    ...sm,
    ...md,
    ...lg,
  };
};
export default withStyles(stylesCol)(ColContent);
