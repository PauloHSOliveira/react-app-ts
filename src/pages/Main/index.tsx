import React from 'react';

import { Container, Content } from './styles';

import CardPrices from '../../components/CardPrices';

import api from '../../services/api';

const Main: React.FC = () => {
  const [low, setLow] = React.useState(0);
  const [high, setHigh] = React.useState(0);

  React.useEffect(() => {
    const getData = async () => {
      await api.get('api/BTC/ticker/').then((res) => {
        const { low: nLow, high: nHigh } = res.data.ticker;
        setLow(nLow);
        setHigh(nHigh);
      });
    };
    getData();
  }, []);

  return (
    <Container>
      <Content>
        <CardPrices low={low} high={high} />
      </Content>
    </Container>
  );
};

export default Main;
