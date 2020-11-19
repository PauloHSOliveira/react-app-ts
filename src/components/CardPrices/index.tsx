import React from 'react';

import MaskPrice from '../../utils/MaskPrice';
import { Container, CardItem, CardTitle, Low, High } from './styles';

interface CardProps {
  low: number;
  high: number;
  buy: number;
  sell: number;
}

function CardPrices(props: CardProps): React.ReactElement {
  const { low, high, buy, sell } = props;

  return (
    <Container>
      <CardItem>
        <CardTitle>Menor preço</CardTitle>
        <Low>{MaskPrice(low)}</Low>
      </CardItem>
      <CardItem>
        <CardTitle>Maior preço</CardTitle>
        <High>{MaskPrice(high)}</High>
      </CardItem>
      <CardItem>
        <CardTitle>Maior oferta de compra</CardTitle>
        <High>{MaskPrice(buy)}</High>
      </CardItem>
      <CardItem>
        <CardTitle>Menor oferta de venda</CardTitle>
        <Low>{MaskPrice(sell)}</Low>
      </CardItem>
    </Container>
  );
}

export default CardPrices;
