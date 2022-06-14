import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  font-weight: bold;
  opacity: 0.7;
  transition: opacity 200ms ease-in-out;
  &:hover {
    opacity: 1;
  }
  ${({ theme: { spaces, colors, utils } }) =>
    css`
      margin-top: ${spaces.sm};
      color: ${colors.primary.medium};
      font-size: ${spaces.lg};
      ${utils.downLG(
        css`
          font-size: ${spaces.md};
        `
      )}
    `};
`;
StyledLink.displayName = "StyledLink";

export const Wrapper = styled.div`
  display: block;
  ${({ theme: { spaces } }) =>
    css`
      margin-top: ${spaces.sm};
    `};
`;
Wrapper.displayName = "Wrapper";
