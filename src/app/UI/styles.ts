import styled, { css } from "styled-components";

export const PageContainer = styled.div`
  grid-column: span 12;
  ${({ theme: { utils } }) =>
    utils.downLG(
      css`
        grid-column: span 6;
      `
    )}
`;
PageContainer.displayName = "PageContainer";

export const Title = styled.div`
  font-weight: bold;
  ${({ theme: { spaces, utils } }) =>
    css`
      font-size: ${spaces.huge};
      ${utils.downLG(
        css`
          font-size: ${spaces.xl};
        `
      )}
    `};
`;
Title.displayName = "Title";

export const SubTitle = styled.div`
  font-weight: bold;
  ${({ theme: { spaces } }) =>
    css`
      margin-top: ${spaces.lg};
      font-size: ${spaces.lg};
    `};
`;
SubTitle.displayName = "SubTitle";

export const Label = styled.div`
  ${({ theme: { spaces, utils } }) =>
    css`
      margin-top: ${spaces.sm};
      font-size: ${spaces.lg};
      ${utils.downLG(
        css`
          font-size: ${spaces.md};
        `
      )}
    `};
`;
Label.displayName = "Label";
