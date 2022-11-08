import { InteractiveChartConfig } from '@refinitiv-ui/elements/interactive-chart';
import React, { useEffect, useState } from 'react';
import { InteractiveChart } from '../../react-style-comp/element-wrappers';
import { data_graph, generateData2, months, multiple_chart_series, seasonal_series } from '../constants';

interface ChartProps {
  chartType: string;
}

export const Chart: React.FC<ChartProps> = ({ chartType }: ChartProps) => {
  const [chartConfig, setChartConfig] = useState({} as InteractiveChartConfig);

  useEffect(() => {
    if (chartType === 'multiple') {
      setChartConfig({
        options: {
          timeScale: {
            timeVisible: true,
            secondsVisible: true,
          },
        },
        series: multiple_chart_series,
      });

      return;
    } else if (chartType === 'season') {
      setChartConfig({
        options: {
          localization: {
            timeFormatter: (date: any) => date.day + ' ' + months[date.month],
          },
          rightPriceScale: {
            visible: true,
          },
          leftPriceScale: {
            visible: true,
          },
        },
        series: seasonal_series,
      });

      return;
    } else if (chartType === 'live') {
      setChartConfig({
        options: {
          timeScale: {
            timeVisible: true,
            secondsVisible: true,
            fixLeftEdge: true,
            fixRightEdge: true,
          },
        },
        series: [
          {
            type: 'candlestick',
            data: generateData2(100),
          },
        ],
      });

      return;
    }

    setChartConfig({
      options: {
        timeScale: {
          timeVisible: true,
          secondsVisible: true,
        },
      },
      series: [
        {
          symbol: 'Price',
          type: chartType,
          data: data_graph,
        },
      ],
    });
  }, [chartType]);

  return (
    <React.Fragment>
      <div className="chart-container">
        <InteractiveChart config={chartConfig}></InteractiveChart>
      </div>
    </React.Fragment>
  );
};
