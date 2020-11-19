import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 200px;
  margin-top: 10px;
`;

export const SelectContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  border: 1px solid #cecece;
  height: 50px;
  border-radius: 4px;
  padding: 8px;
`;

export const StyledList = styled.ul`
  position: absolute;
  border: 1px solid #cecece;
  border-radius: 4px;
  width: 100%;
`;

export const StyledListItem = styled.li`
  background: #fff;
  cursor: pointer;
  padding: 8px;
  :hover {
    filter: brightness(80%);
  }
`;
