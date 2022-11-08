import React from 'react';
import { Tab, TabBar } from '../../react-style-comp/element-wrappers';
import './sidemenu.css';

interface SidebarProps {
  chartType: string;
  setChartType: (value: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ chartType, setChartType }: SidebarProps) => {
  return (
    <TabBar vertical>
      <Tab icon="chart-chartline" label="Line Chart" active={chartType === 'line' || undefined} onClick={() => setChartType('line')}>
        {' '}
      </Tab>
      <Tab icon="chart-area" label="Area Chart" active={chartType === 'area' || undefined} onClick={() => setChartType('area')}></Tab>
      <Tab icon="chart-bar" label="Bar Chart" active={chartType === 'bar' || undefined} onClick={() => setChartType('bar')}></Tab>
      <Tab
        icon="chart-candles"
        label="Candlestick Chart"
        active={chartType === 'candlestick' || undefined}
        onClick={() => setChartType('candlestick')}
      ></Tab>
      <Tab icon="chart-line-bar" label="Volume Chart" active={chartType === 'volume' || undefined} onClick={() => setChartType('volume')}></Tab>
      <Tab
        icon="chart-strong-magnet"
        label="Seasonality chart"
        active={chartType === 'season' || undefined}
        onClick={() => setChartType('season')}
      ></Tab>
      <Tab icon="ohlc-chart" label="Multiple charts" active={chartType === 'multiple' || undefined} onClick={() => setChartType('multiple')}></Tab>
      <Tab icon="play" label="Live" active={chartType === 'live' || undefined} onClick={() => setChartType('live')}></Tab>
    </TabBar>
  );
};

/*
    <ef-tab-bar vertical>
      <ef-tab icon="chart-chartline" label="Line Chart" active={chartType === 'line' || undefined} onClick={() => setChartType('line')}></ef-tab>
      <ef-tab icon="chart-area" label="Area Chart" active={chartType === 'area' || undefined} onClick={() => setChartType('area')}></ef-tab>
      <ef-tab icon="chart-bar" label="Bar Chart" active={chartType === 'bar' || undefined} onClick={() => setChartType('bar')}></ef-tab>
      <ef-tab
        icon="chart-candles"
        label="Candlestick Chart"
        active={chartType === 'candlestick' || undefined}
        onClick={() => setChartType('candlestick')}
      ></ef-tab>
      <ef-tab icon="chart-line-bar" label="Volume Chart" active={chartType === 'volume' || undefined} onClick={() => setChartType('volume')}></ef-tab>
      <div>
        <Select data={data} />
      </div>
    </ef-tab-bar>
*/
