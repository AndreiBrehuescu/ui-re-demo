import { useEffect, useRef } from 'react';
import './grid.css';
import '@refinitiv-ui/efx-grid';

// npm install @refinitiv-ui/efx-grid --save

export const GridComponent = () => {
  const gridRef = useRef({ current: {}, config: {} });

  useEffect(() => {
    var fields = ['companyName', 'market', 'CF_LAST', 'CF_NETCHNG', 'date1', 'industry'];
    var records = [
      {
        companyName: 'haag-Feest',
        market: 'HSCEI',
        CF_LAST: 133.02,
        CF_NETCHNG: 122.01,
        date1: '09/29/2002',
        industry: 'Oilfield Services/Equipment',
      },
    ];
    var configObj = {
      freezeColumn: 0,
      columns: [
        { title: 'Company', field: fields[0], width: 300 },
        { title: 'Market', field: fields[1], width: 150 },
        { title: 'Last', field: fields[2], width: 120 },
        {
          title: 'Pct. Chng',
          field: fields[3],
          width: 200,
        },
        { title: 'IPO Date', field: fields[4], width: 180, alignment: 'center', formatType: 'dateTime' },
        { title: 'Industry', field: fields[5], width: 250 },
      ],
      staticDataRows: records,
    };

    gridRef.current.config = configObj;
  });

  return <div className="grid-container">{/* <efx-grid></efx-grid> */}</div>;
};
