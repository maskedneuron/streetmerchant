import {Store} from './store';

export const FormD: Store = {
  currency: '$',
  labels: {
    maxPrice: {
        container: '.product-price'
    },
    outOfStock: {
        container: '.variant-quantity',
        text: ['There are no products left'],
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
      cartUrl: 'https://formdworks.com/cart/add?id=36941655474338',
      model: 't1v1.1 black',
      series: 't1v1.1',
      url: 'https://formdworks.com/products/t1?variant=36941655474338',
    },
    {
      brand: 'formd',
      cartUrl: 'https://formdworks.com/cart/add?id=36941655703714',
      model: 't1v1.1 silver',
      series: 't1v1.1',
      url: 'https://formdworks.com/products/t1?variant=36941655703714',
    },
    {
      brand: 'formd',
      cartUrl: 'https://formdworks.com/cart/add?id=36941655736482',
      model: 't1v1.1 titanium',
      series: 't1v1.1',
      url: 'https://formdworks.com/products/t1?variant=36941655736482',
    },
    {
      brand: 'formd',
      cartUrl: 'https://formdworks.com/cart/add?id=36941655933090',
      model: 't1v1.1 titanium silver',
      series: 't1v1.1',
      url: 'https://formdworks.com/products/t1?variant=36941655933090',
    },
    {
      brand: 'formd',
      cartUrl: 'https://formdworks.com/cart/add?id=36941656391842',
      model: 't1v1.1 e-white',
      series: 't1v1.1',
      url: 'https://formdworks.com/products/t1?variant=36941656391842',
    },
  ],
  name: 'formd',
};
