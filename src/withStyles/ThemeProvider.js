// @flow
import React from "react";
import injectSheet, { ThemeProvider as JSSThemeProvider } from "react-jss";
import merge from "lodash/merge";

const breakpoints = (minWidth: number) => {
  if (!minWidth) {
    return new Error("Must enter a valid minWidth to use theme breakpoints");
  }
  return `@media (min-width: ${minWidth}px)`;
};

const spacing = {
  unit: 16,
};

const defaultTheme = {
  spacing,
  breakpoints,
  breakpoint: {
    sm: 600,
    md: 900,
    lg: 1200,
  },
};

const ThemeProvider = ({ children, theme, ...rest }: any) => {
  const mergedTheme = theme ? merge(defaultTheme, theme) : defaultTheme;
  return (
    <JSSThemeProvider theme={mergedTheme} {...rest}>
      {children}
    </JSSThemeProvider>
  );
};

export default ThemeProvider;
