const MaskPrice = (price: number): string => {
  const formatNumber = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
  return formatNumber.format(price);
};

export default MaskPrice;
