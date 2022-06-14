import styled, { css } from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  ${({ theme: { colors, spaces } }) => css`
    color: ${colors.white.dirty};
    font-size: ${spaces.xxl};
  `}
`;
Container.displayName = "Container";
