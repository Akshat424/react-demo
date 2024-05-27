import styled from "@emotion/styled";

export const LayoutContainerStyled = styled.div`
  display: flex;

  .main-content {
    flex: 1;
    min-height: 100vh;
    background: #f7f7ff;
    .main-inner {
      max-width: 69.375rem;
      margin-inline: auto;
    }
  }
`;
