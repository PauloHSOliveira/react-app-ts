import React from 'react';
import { BiMoney, BiCoinStack } from 'react-icons/bi';

import MaskPrice from '../../utils/MaskPrice';

import api from '../../services/api';
import { Container, List, Item, Price, Quant } from './styles';

interface OrderBookProps {
  currency: string;
}

function OrderBook(props: OrderBookProps): React.ReactElement {
  const [asks, setAsks] = React.useState([]);
  const [bids, setBids] = React.useState([]);

  const { currency } = props;
  React.useEffect(() => {
    const getData = async () => {
      await api.get(`api/${currency}/orderbook/`).then((res) => {
        const { asks: nAsks, bids: nBids } = res.data;
        setAsks(nAsks);
        setBids(nBids);
      });
    };
    getData();
  }, [currency]);

  return (
    <Container>
      <List>
        {asks.map((item) => (
          <Item>
            <Price theme={{ color: '#09f069' }}>
              <BiMoney />
              {MaskPrice(item[0])}
            </Price>
            <Quant>
              <BiCoinStack />
              {item[1]}
            </Quant>
          </Item>
        ))}
      </List>

      <List>
        {bids.map((item) => (
          <Item>
            <Price theme={{ color: '#ff0c04' }}>
              <BiMoney />
              {MaskPrice(item[0])}
            </Price>
            <Quant>
              <BiCoinStack />
              {item[1]}
            </Quant>
          </Item>
        ))}
      </List>
    </Container>
  );
}

export default OrderBook;
