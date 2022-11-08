import { InteractiveChartConfig } from '@refinitiv-ui/elements/interactive-chart';
import { useEffect, useState } from 'react';
import { Button, Card, Dialog, Icon, InteractiveChart, Label, Layout, Panel, ProgressBar } from '../../react-style-comp/element-wrappers';
import { data_graph } from '../constants';

import './containers.css';

export const CointainersPage = () => {
  const [chartConfig, setChartConfig] = useState({} as InteractiveChartConfig);
  const [dialogOpened, setDialogOpened] = useState(false);
  const [progressValue, setProgressValue] = useState(101);

  useEffect(() => {
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
          type: 'area',
          data: data_graph,
        },
      ],
    });
  }, []);

  useEffect(() => {
    const max = 100;
    let i = 0;
    let shift = 0;
    let val;
    setInterval(() => {
      val = (100 / max) * (((i + shift) % max) + 1);
      i += 25;
      setProgressValue(val);
      if (i % max === 0) {
        shift++;
      }
      console.log(shift);
    }, 1200);
  }, []);

  return (
    <div className="content-c">
      <div className="page-slice">
        <Card header="Card Header" footer="Source: Reuters">
          <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has</div>
        </Card>
      </div>
      <div className="page-slice">
        <Card className="chart-container-card">
          <InteractiveChart config={chartConfig}></InteractiveChart>
        </Card>
      </div>
      <div className="page-slice">
        <Button onClick={() => setDialogOpened(!dialogOpened)}> Open custom dialog </Button>
        <div className="wrapper">
          <Label className="animation" lineClamp={0}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
            release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
          </Label>

          <Label lineClamp={1} className="animation">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
            release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishingt.
          </Label>

          <Label lineClamp={2} className="animation">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
            release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
          </Label>
        </div>
      </div>
      <div className="page-slice">
        <Layout className="layout-size" debug flex container>
          <Layout className="header" debug noflex>
            HEADER Lorem Ipsum is simply dummy text o
          </Layout>
          <Layout className="content-layout" flex nowrap>
            <Layout debug className="left">
              {' '}
              LEFT Lorem Ipsum is simply
            </Layout>
            <Layout debug className="right">
              {' '}
              RIGHT Lorem Ipsum is simply
            </Layout>
          </Layout>
          <Layout className="footer" debug noflex>
            FOOTER Lorem Ipsum is simply dummy text o
          </Layout>
        </Layout>
      </div>
      <div className="page-slice">
        <Panel spacing>
          <h3> This is a PANEL</h3>
          <p>
            Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster
            collaborative thinking to further the overall value proposition.
          </p>
        </Panel>
      </div>
      <div className="page-slice">
        <ProgressBar className="progress-red" value={progressValue.toString()}>
          <Icon className="thumb" icon="like-empty" slot="label"></Icon>
        </ProgressBar>
        <ProgressBar className="progress-red" label="Potatoes"></ProgressBar>
      </div>
      <Dialog
        opened={dialogOpened}
        onabort={() => setDialogOpened(!dialogOpened)}
        onchange={() => setDialogOpened(!dialogOpened)}
        onclose={() => setDialogOpened(!dialogOpened)}
        header="System Permissions"
      >
        <p>Grant geolocation permissions?</p>
        <p>This will allow the application to see your real-time location at any point in time.</p>
      </Dialog>
    </div>
  );
};
