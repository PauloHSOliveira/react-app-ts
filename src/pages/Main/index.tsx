import React from 'react';

import { Container, Content } from './styles';

import CardPrices from '../../components/CardPrices';

import api from '../../services/api';

const Main: React.FC = () => {
  const [low, setLow] = React.useState(0);
  const [high, setHigh] = React.useState(0);
  const [buy, setBuy] = React.useState(0);
  const [sell, setSell] = React.useState(0);

  React.useEffect(() => {
    const getData = async () => {
      await api.get('api/BTC/ticker/').then((res) => {
        const { low: nLow, high: nHigh, buy: nBuy, sell: nSell } = res.data.ticker;
        setLow(nLow);
        setHigh(nHigh);
        setBuy(nBuy);
        setSell(nSell);
      });
    };
    getData();
  }, []);

  return (
    <Container>
      <Content>
        <CardPrices low={low} high={high} buy={buy} sell={sell} />
      </Content>
    </Container>
  );
};

export default Main;
