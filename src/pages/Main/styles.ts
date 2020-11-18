import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
  background: ${(props) => props.theme.primary};
  overflow: hidden;
`;

export const Content = styled.div`
  max-width: 1100px;
  width: 100%;
  height: 700px;
  background: ${(props) => props.theme.secondary};
  border-radius: 4px;
  margin: auto;
`;
