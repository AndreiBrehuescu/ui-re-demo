import React from 'react';

interface GridMenuProps {
  gridType: string;
  setGridType: (value: string) => void;
}

export const GridMenu: React.FC<GridMenuProps> = ({ gridType, setGridType }: GridMenuProps) => {
  return (
    <ef-tab-bar vertical>
      <ef-tab icon="chart-chartline" label="Type 1" active={gridType === 'line' || undefined} onClick={() => setGridType('Type 1')}></ef-tab>
      <ef-tab icon="chart-area" label="Type 2" active={gridType === 'area' || undefined} onClick={() => setGridType('Type 2')}></ef-tab>
      <ef-tab icon="chart-bar" label="Type 3" active={gridType === 'bar' || undefined} onClick={() => setGridType('Type 3')}></ef-tab>
    </ef-tab-bar>
  );
};
