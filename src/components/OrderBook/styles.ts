import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  height: 340px;
`;

export const List = styled.ul`
  height: 150px;
  overflow-y: hidden;
  width: 300px;
  background: ${(props) => props.theme.primary};
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  margin-top: 10px;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;

export const Price = styled.span`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.color};
`;

export const Quant = styled.span`
  display: flex;
  align-items: center;
  color: #bfbfbf;
`;
