import React from 'react';

import { Container, Content, SectionRigth } from './styles';

import CardPrices from '../../components/CardPrices';
import AutoComplete from '../../components/SelectComponent';
import OrderBook from '../../components/OrderBook';

import api from '../../services/api';

const Main: React.FC = () => {
  const [low, setLow] = React.useState(0);
  const [high, setHigh] = React.useState(0);
  const [buy, setBuy] = React.useState(0);
  const [sell, setSell] = React.useState(0);

  const [currency, setCurrency] = React.useState('BTC');

  const currencys = ['BTC', 'BCH', 'CHZ', 'ETH', 'LTC', 'XRP'];

  React.useEffect(() => {
    const getData = async () => {
      await api.get(`api/${currency}/ticker/`).then((res) => {
        const { low: nLow, high: nHigh, buy: nBuy, sell: nSell } = res.data.ticker;
        setLow(nLow);
        setHigh(nHigh);
        setBuy(nBuy);
        setSell(nSell);
      });
    };
    getData();
  }, [currency]);

  return (
    <Container>
      <Content>
        <CardPrices low={low} high={high} buy={buy} sell={sell} />
        <SectionRigth>
          <OrderBook currency={currency} />
        </SectionRigth>

        <AutoComplete options={currencys} value={currency} onChange={setCurrency} />
      </Content>
    </Container>
  );
};

export default Main;
