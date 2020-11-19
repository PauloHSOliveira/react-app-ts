import styled from 'styled-components';

export const Container = styled.div`
  height: 100px;
  display: flex;
  justify-content: space-between;
  background: ${(props) => props.theme.primary};
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
`;

export const CardItem = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  width: 200px;
`;

export const CardTitle = styled.span`
  font-size: 15px;
  margin-bottom: 10px;
  color: #bfbfbf;
`;

export const Low = styled.span`
  color: ${(props) => props.theme.red};
  font-size: 14px;
`;

export const High = styled.span`
  color: ${(props) => props.theme.green};
  font-size: 14px;
`;
