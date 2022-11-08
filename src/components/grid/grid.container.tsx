import React, { useState } from 'react';
import { GridMenu } from './grid-menu.component';
import { GridComponent } from './grid.component';

export const GridContainer = () => {
  // fetch data into the store
  // brind the date from store to variables and pass them
  // to the grid component
  const [gridType, setGridType] = useState('Type 1');

  return (
    <React.Fragment>
      <GridMenu gridType={gridType} setGridType={setGridType} />
      <GridComponent />
    </React.Fragment>
  );
};
