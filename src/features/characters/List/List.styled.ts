import styled, { css } from "styled-components";

export const Card = styled.div`
  grid-column: span 6;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;

  ${({ theme: { colors, spaces } }) =>
    css`
      padding: ${spaces.md};
      border: 1px solid ${colors.white.dirty};
      background-color: ${colors.black.medium};

      &:hover {
        background-color: ${colors.black.light};
        cursor: pointer;
        border-color: ${colors.primary.medium};
        color: ${colors.primary.medium};
      }
    `};
`;
Card.displayName = "Card";

export const Title = styled.div`
  font-weight: bold;
  ${({ theme: { spaces } }) =>
    css`
      font-size: ${spaces.lg};
    `};
`;
Title.displayName = "Title";

export const Label = styled.div`
  ${({ theme: { spaces } }) =>
    css`
      padding: ${spaces.sm};
    `};
`;
Label.displayName = "Label";
