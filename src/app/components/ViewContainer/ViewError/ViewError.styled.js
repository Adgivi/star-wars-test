import styled, { css } from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  ${({ theme: { colors, spaces } }) => css`
    color: ${colors.white.dirty};
    font-size: ${spaces.colossal};
  `}
`;
Container.displayName = "Container";

export const Message = styled.div`
  ${({ theme: { colors, spaces } }) => css`
    color: ${colors.white.dirty};
    font-size: ${spaces.md};
    padding: ${spaces.md}; ;
  `}
`;
Message.displayName = "Message";
