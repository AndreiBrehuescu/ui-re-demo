import { UTCTimestamp } from 'lightweight-charts';

export const treeData = [
  {
    value: 'AFR',
    label: 'Africa',
    selected: false,
    expanded: true,
    items: [
      {
        value: 'DZA',
        label: 'Algeria',
        selected: false,
        expanded: true,
        items: [
          {
            value: 'ADR',
            label: 'Adrar',
            selected: false,
            items: [],
          },
          {
            value: 'TAM',
            label: 'Tamanghasset',
            selected: false,
            items: [],
          },
          {
            value: 'GUE',
            label: 'Guelma',
            selected: false,
            items: [],
          },
        ],
      },
      {
        value: 'AGO',
        label: 'Angola',
        selected: false,
        items: [],
      },
      {
        value: 'BEN',
        label: 'Benin',
        selected: false,
        items: [],
      },
      {
        value: 'BWA',
        label: 'Botswana',
        selected: false,
        items: [],
      },
    ],
  },
];

export const suggestions = [
  { label: 'Cornelius Martin' },
  { label: 'Memphis Hoover' },
  { label: 'Angela Lloyd' },
  { label: 'Emilee Gay' },
  { label: 'Selah Richardson' },
  { label: 'Christina Erickson' },
  { label: 'Elaina Welch' },
  { label: 'Houston Tran' },
  { label: 'Richard Peterson' },
  { label: 'Andrew Lin' },
  { label: 'Isabell Kaiser' },
  { label: 'Brent Glass' },
  { label: 'Martha Jones' },
  { label: 'Anton Mcclain' },
  { label: 'Jamir Martin' },
  { label: 'Kassandra Manning' },
  { label: 'Madisyn Mccormick' },
  { label: 'Anabel Savage' },
  { label: 'Tyler Phillips' },
  { label: 'Ronan Deleon' },
];

export const data_graph = [
  {
    time: (Date.parse('2019-04-10T08:40:10') / 1000) as UTCTimestamp,
    open: 141.77,
    high: 170.39,
    low: 120.25,
    close: 145.72,
    value: 145.32,
  },
  {
    time: (Date.parse('2019-04-10T09:40:10') / 1000) as UTCTimestamp,
    open: 145.72,
    high: 147.99,
    low: 100.11,
    close: 108.19,
    value: 124.05000000000001,
  },
  {
    time: (Date.parse('2019-04-10T10:40:10') / 1000) as UTCTimestamp,
    open: 108.19,
    high: 118.43,
    low: 74.22,
    close: 75.16,
    value: 96.325,
  },
  {
    time: (Date.parse('2019-04-10T11:40:10') / 1000) as UTCTimestamp,
    open: 75.16,
    high: 82.84,
    low: 36.16,
    close: 45.72,
    value: 59.5,
  },
  {
    time: (Date.parse('2019-04-10T12:40:10') / 1000) as UTCTimestamp,
    open: 45.72,
    high: 120.12,
    low: 44.1,
    close: 90.5,
    value: 82.11,
  },
  {
    time: (Date.parse('2019-04-10T13:40:10') / 1000) as UTCTimestamp,
    open: 90.5,
    high: 95.89,
    low: 75.58,
    close: 105.55,
    value: 85.735,
  },
];

export const generateData = (total: number) => {
  let initVal = 20;
  const startDate = new Date();
  let ret = [];
  total = total < 0 ? 10 : total;
  for (let i = 0; i < total; i++) {
    const volatility = (Math.random() * 4.5 - 2) / 100; // random % volatility
    const date = new Date(startDate.setDate(startDate.getDate() + i));
    const val = initVal + initVal * volatility;
    initVal = val;
    const point = {
      open: 45.72,
      high: 120.12,
      low: 44.1,
      close: 90.5,
      time: (date.getTime() / 1000.0) as UTCTimestamp,
      value: parseFloat(val.toFixed(2)),
    };
    ret.push(point);
  }
  return ret;
};

export const multiple_chart_series = [
  {
    symbol: 'GOOGL.O',
    type: 'line',
    data: generateData(100),
  },
  {
    symbol: 'AMZN.OQ',
    type: 'line',
    data: generateData(100),
  },
  {
    symbol: 'EBAY.OQ',
    type: 'line',
    data: generateData(100),
  },
  {
    symbol: 'NFLX.OQ',
    type: 'area',
    data: generateData(100),
  },
  {
    symbol: 'BIDU.OQ',
    type: 'line',
    data: generateData(100),
  },
  {
    symbol: 'CRTO.OQ',
    type: 'line',
    data: generateData(100),
  },
  {
    symbol: 'BABA.N',
    type: 'area',
    data: generateData(100),
  },
];

export const seasonal_series = [
  {
    symbol: '2011-2020',
    symbolName: 'Avg. 2011-2020',
    type: 'line',
    seriesOptions: {
      priceLineVisible: false,
      lastValueVisible: false,
      // priceScaleId: 'left',
    },
    data: [
      { time: '2020-01-11', value: 20.31 },
      { time: '2020-02-12', value: 30.27 },
      { time: '2020-03-13', value: 70.28 },
      { time: '2020-04-11', value: 20.31 },
      { time: '2020-05-12', value: 30.27 },
      { time: '2020-06-13', value: 70.28 },
      { time: '2020-07-11', value: 49.29 },
      { time: '2020-08-12', value: 20.31 },
      { time: '2020-09-13', value: 30.27 },
      { time: '2020-10-11', value: 70.28 },
      { time: '2020-11-12', value: 49.29 },
      { time: '2020-12-13', value: 70.28 },
    ],
  },
  {
    symbol: '2021',
    symbolName: '2021',
    type: 'area',
    seriesOptions: {
      priceScaleId: 'right',
    },
    data: [
      { time: '2020-01-11', value: 45.01 },
      { time: '2020-02-12', value: 60.63 },
      { time: '2020-03-13', value: 166.64 },
      { time: '2020-04-11', value: 180.01 },
      { time: '2020-05-12', value: 156.63 },
      { time: '2020-06-13', value: 166.64 },
      { time: '2020-07-11', value: 181.89 },
    ],
  },
];

export const months: any = {
  1: 'January',
  2: 'February',
  3: 'March',
  4: 'April',
  5: 'May',
  6: 'June',
  7: 'July',
  8: 'August',
  9: 'September',
  10: 'October',
  11: 'November',
  12: 'December',
};

let initVal = 20;
const maxVal = initVal * 2;
export const generateData2 = (total: number, start?: Date) => {
  const startDate = start || new Date();
  let ret = [];
  total = total < 0 ? 10 : total;
  for (let i = 0; i < total; i++) {
    const volatility = (Math.random() * 4.5 - 2) / 100; // random % volatility
    const date = start || new Date(startDate.setDate(startDate.getDate() + 1));
    const openVal = initVal + initVal * volatility;
    const closeVal = openVal + openVal * volatility * 1.5;
    const highVal = openVal > closeVal ? openVal + 0.1 : closeVal + 0.5;
    const lowVal = openVal < closeVal ? openVal - 0.5 : closeVal - 0.2;
    initVal = closeVal > maxVal ? closeVal - closeVal * 0.2 : closeVal;
    const point = {
      time: (date.getTime() / 1000.0) as UTCTimestamp,
      open: parseFloat(openVal.toFixed(2)),
      high: parseFloat(highVal.toFixed(2)),
      low: parseFloat(lowVal.toFixed(2)),
      close: parseFloat(closeVal.toFixed(2)),
    } as any;
    ret.push(point);
  }
  return ret;
};
export const generateCurrent = (prevDate: Date) => {
  const newPoint = generateData2(1, prevDate);
  return newPoint[0] || {};
};
