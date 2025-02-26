import styled from "styled-components";

export const RadioButtonWrapper = styled.div`
  position: absolute;
  right: 16px;
  top: 16px;
`;

export const SourceCardWrapper = styled.div`
  padding: 24px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 14px;
  cursor: pointer;
  .p {
    cursor: pointer !important;
  }
`;

export const ApplicationNameWrapper = styled.div`
  display: inline-block;
  text-overflow: ellipsis;
  max-width: 224px;
`;
