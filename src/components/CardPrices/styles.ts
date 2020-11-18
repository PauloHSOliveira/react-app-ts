import styled from 'styled-components';

export const Container = styled.div`
  width: 250px;
  height: 100px;
  display: flex;
  justify-content: space-between;
`;

export const CardItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
`;

export const CardTitle = styled.span`
  font-size: 17px;
  margin-bottom: 10px;
  color: #bfbfbf;
`;

export const Low = styled.span`
  color: ${(props) => props.theme.red};
`;

export const High = styled.span`
  color: ${(props) => props.theme.green};
`;
