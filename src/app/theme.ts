import { css, CSSProp } from "styled-components";

const breakpoints = { lg: 992 };

const down = (breakpoint: number, stylesCss: CSSProp) => css`
  @media only screen and (max-width: ${breakpoint}px) {
    ${stylesCss}
  }
`;

export const downLG = (css: CSSProp) => down(breakpoints.lg, css);

const colors = {
  black: {
    light: "#2e2e2e",
    medium: "#1c1819",
    dark: "#0d0d0d",
  },
  white: {
    clean: "#fff",
    dirty: "#f2f3f4",
  },
  primary: { medium: "#eee33d" },
};

const spaces = {
  xxs: "4px",
  xs: "8px",
  sm: "12px",
  md: "20px",
  lg: "32px",
  xl: "52px",
  xxl: "84px",
  huge: "140px",
  colossal: "340px",
};

const theme = { colors, breakpoints, spaces, utils: { downLG } };

export default theme;
