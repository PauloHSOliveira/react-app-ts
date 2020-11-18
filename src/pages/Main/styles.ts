import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
  background: ${(props) => props.theme.primary};
  overflow: hidden;
`;

export const Content = styled.div`
  max-width: 700px;
  width: 100%;
  height: 500px;
  background: ${(props) => props.theme.secondary};
  margin: auto;
`;
