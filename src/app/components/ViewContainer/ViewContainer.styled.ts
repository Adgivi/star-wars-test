import styled, { css } from "styled-components";

export const Container = styled.div`
  position: relative;
  min-height: 100vh;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  box-sizing: border-box;

  ${({ theme: { colors, spaces, utils } }) => css`
    background-color: ${colors.black.dark};
    color: ${colors.white.dirty};
    gap: ${spaces.md} ${spaces.md};
    padding: ${spaces.md};

    ${utils.downLG(
      css`
        grid-template-columns: repeat(6, 1fr);
      `
    )}
  `}
`;
Container.displayName = "Container";
