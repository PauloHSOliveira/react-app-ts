import React from 'react';

import { Container, CardItem, CardTitle, Low, High } from './styles';

interface CardProps {
  low: number;
  high: number;
}

function CardPrices(props: CardProps): React.ReactElement {
  const { low, high } = props;

  const MaskPrice = (price: number): string => {
    const formatNumber = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
    return formatNumber.format(price);
  };

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
    </Container>
  );
}

export default CardPrices;
