import styled from 'styled-components';

import Background from '../../assets/btcWallpaper.jpg';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
  background-image: url(${Background});
  background-size: cover;
  overflow: hidden;
`;

export const Content = styled.div`
  max-width: 1100px;
  width: 100%;
  height: 700px;
  background: ${(props) => props.theme.primary};
  border-radius: 4px;
  margin: auto;
  padding: 10px;
  box-sizing: border-box;
  opacity: 0.9;
`;
