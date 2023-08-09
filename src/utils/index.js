const formatCurrence = (value, price) => {
    return value.toLocaleString('pt-br', { style: 'currency', currency: price });
  }
  
  export default formatCurrence;
  