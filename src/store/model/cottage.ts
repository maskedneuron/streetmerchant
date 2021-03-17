import {Store} from './store';

export const Cottage: Store = {
  currency: '$',
  labels: {
    outOfStock: {
        container: '.clearlabel',
        text: ['Error: '],
    },
  },
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url: 'https://mychart.sbch.org/mychart/openscheduling/SignupAndSchedule/EmbeddedSchedule?public=1&lang=english&vt=1170000443&dept=101001163',
    },
    {
      brand: 'cottage',
      model: 'goleta valley',
      series: 'covid',
      url: 'https://mychart.sbch.org/mychart/openscheduling/SignupAndSchedule/EmbeddedSchedule?public=1&lang=english&vt=1170000443&dept=101001163',
    },
    {
      brand: 'cottage',
      model: 'hollister village',
      series: 'covid',
      url: 'https://mychart.sbch.org/mychart/openscheduling/SignupAndSchedule/EmbeddedSchedule?public=1&lang=english&vt=1170000443&dept=105003001',
    },
  ],
  name: 'cottage',
};
