import React from 'react';
import { Sidebar } from '../side-menu/sidebar.component';
import { Chart } from './chart.component';

import './chart.css';

interface ChartPageContainerProps {
  chartType: string;
  setChartType: (value: string) => void;
}

export const ChartPageContainer: React.FC<ChartPageContainerProps> = ({ chartType, setChartType }: ChartPageContainerProps) => {
  return (
    <React.Fragment>
      <Sidebar chartType={chartType} setChartType={setChartType} />
      <Chart chartType={chartType} />
    </React.Fragment>
  );
};
