import {Store} from './store';

export const FormD: Store = {
  currency: '$',
  labels: {
    maxPrice: {
        container: '.product-price'
    },
    outOfStock: {
        container: '.add-to-cart-text',
        text: ['Coming Soon!'],
    },
  },
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url: 'https://formdworks.com/products/t1',
    },
    {
      brand: 'formd',
      model: 't1v1.1',
      series: 't1',
      url: 'https://formdworks.com/products/t1',
    },
  ],
  name: 'formd',
};
