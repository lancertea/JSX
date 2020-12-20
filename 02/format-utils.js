function formatPrice(price) {
  if (typeof price !== 'number') {
    price = Number(price) || 0;
  }
  return '💰' + price.toFixed(2);
}
